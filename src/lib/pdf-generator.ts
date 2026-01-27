import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { AddressEntry, FormData } from './types';

/**
 * Generate a church resignation letter PDF
 * Swiss business letter format: sender top-right, recipient top-left (same vertical zone)
 */
export async function generateExitPdf(
    formData: FormData,
    recipientAddress: AddressEntry
): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points

    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const { width, height } = page.getSize();
    const margin = 70;
    const fontSize = 11;
    const lineHeight = 16;

    // Language detection
    // All currently supported cantons (ZH, BS, BE, ZG) use German as official language
    // We force German to ensure the authority accepts the letter
    const isGerman = true;

    // Format today's date
    const today = new Date();
    const dateStr = today.toLocaleDateString('de-CH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    // Confession labels
    const confessionLabel = formData.confession === 'catholic' ? 'röm.-kath.' : 'ref.';

    const confessionFull = formData.confession === 'catholic' ? 'römisch-katholischen Kirche' : 'evangelisch-reformierten Kirche';

    // === SENDER BLOCK (top right) ===
    let yPosition = height - margin;

    // === SENDER BLOCK (top right) ===
    const senderLines = [
        formData.fullName,
        formData.addressLine1,
        formData.addressLine2 || '',
        formData.postalCity,
    ].filter(Boolean);

    senderLines.forEach((line) => {
        page.drawText(line, {
            x: width - margin - 180,
            y: yPosition,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPosition -= lineHeight;
    });

    yPosition -= lineHeight * 2;

    // === RECIPIENT BLOCK (left side, below sender) ===
    const recipientLines = [
        recipientAddress.recipient_name,
        recipientAddress.addr1,
        recipientAddress.addr2 || '',
        `${recipientAddress.postal} ${recipientAddress.city}`,
    ].filter(Boolean);

    recipientLines.forEach((line) => {
        page.drawText(line, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPosition -= lineHeight;
    });

    yPosition -= lineHeight * 2;

    // === DATE LINE ===
    // Extract city from postalCity (format: "8001 Zürich")
    const postalCityParts = formData.postalCity.trim().split(/\s+/);
    const cityName = postalCityParts.length > 1
        ? postalCityParts.slice(1).join(' ')
        : 'Schweiz';

    page.drawText(`${cityName}, ${dateStr}`, {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: helvetica,
        color: rgb(0, 0, 0),
    });
    yPosition -= lineHeight * 2;

    // === SUBJECT LINE ===
    const subject = `Kirchenaustritt (${confessionLabel}) / Austritt aus der ${confessionFull}`;

    page.drawText(subject, {
        x: margin,
        y: yPosition,
        size: fontSize + 1,
        font: helveticaBold,
        color: rgb(0, 0, 0),
    });
    yPosition -= lineHeight * 2;

    // === IDENTITY BLOCK ===
    // Format DOB from ISO (YYYY-MM-DD) to Swiss format (DD.MM.YYYY)
    let dobDisplay = '[Geburtsdatum]';
    if (formData.dateOfBirth) {
        const parts = formData.dateOfBirth.split('-');
        if (parts.length === 3) {
            dobDisplay = `${parts[2]}.${parts[1]}.${parts[0]}`;
        } else {
            dobDisplay = formData.dateOfBirth;
        }
    }

    const identityLines = [
        `Name: ${formData.fullName}`,
        `Geburtsdatum: ${dobDisplay}`,
        `Adresse: ${formData.addressLine1}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.postalCity}`,
        `Konfession: ${confessionLabel}`,
    ];

    identityLines.forEach((line) => {
        page.drawText(line, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPosition -= lineHeight;
    });

    yPosition -= lineHeight;

    // === BODY ===
    const bodyLines = [
        'Sehr geehrte Damen und Herren,',
        '',
        `Hiermit erkläre ich meinen Austritt aus der ${confessionFull}`,
        'per sofort ab Eingang dieses Schreibens.',
        '',
        'Bitte bestätigen Sie mir schriftlich den Erhalt dieses Schreibens',
        'sowie das Wirksamkeitsdatum meines Austritts.',
        '',
        'Falls eine Meldung an zuständige Stellen vorgesehen ist,',
        'bitte ich um entsprechende Veranlassung.',
        '',
        'Freundliche Grüsse,',
    ];

    bodyLines.forEach((line) => {
        page.drawText(line, {
            x: margin,
            y: yPosition,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPosition -= lineHeight;
    });

    yPosition -= lineHeight * 2;

    // === SIGNATURE LINE ===
    page.drawText('________________________', {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
    });
    yPosition -= lineHeight;

    page.drawText(formData.fullName, {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: helvetica,
        color: rgb(0.3, 0.3, 0.3),
    });
    yPosition -= lineHeight;

    page.drawText('(Unterschrift)', {
        x: margin,
        y: yPosition,
        size: 9,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
    });

    yPosition -= lineHeight * 2;

    // === P.S. FORWARDING CLAUSE ===
    const psText = 'P.S. Falls Sie nicht zuständig sind, bitte ich Sie, dieses Schreiben an die zuständige Stelle weiterzuleiten oder mir die korrekte Adresse mitzuteilen.';

    // Split P.S. into multiple lines if too long (max ~80 chars per line)
    const psWords = psText.split(' ');
    let psLine = '';
    const psLines: string[] = [];

    psWords.forEach((word) => {
        if ((psLine + ' ' + word).length > 85) {
            psLines.push(psLine.trim());
            psLine = word;
        } else {
            psLine = psLine + ' ' + word;
        }
    });
    if (psLine.trim()) {
        psLines.push(psLine.trim());
    }

    psLines.forEach((line) => {
        page.drawText(line, {
            x: margin,
            y: yPosition,
            size: 9,
            font: helvetica,
            color: rgb(0.4, 0.4, 0.4),
        });
        yPosition -= 12;
    });

    // === PAGE 1 FOOTER ===
    page.drawText('Generated by SwissShield.ch — Document Automation Service (Page 1/2)', {
        x: margin,
        y: 40,
        size: 8,
        font: helvetica,
        color: rgb(0.6, 0.6, 0.6),
    });

    // ==========================================
    // PAGE 2: EMPLOYER NOTIFICATION (HR LETTER)
    // ==========================================
    const page2 = pdfDoc.addPage([595.28, 841.89]);
    let yPos2 = height - margin;

    // === P2 SENDER BLOCK ===
    senderLines.forEach((line) => {
        page2.drawText(line, {
            x: width - margin - 180,
            y: yPos2,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPos2 -= lineHeight;
    });

    yPos2 -= lineHeight * 2;

    // === P2 RECIPIENT BLOCK (Generic) ===
    const hrRecipientLines = [
        'An die Personalabteilung / HR Department',
        '(Ihres Arbeitgebers)',
    ];

    hrRecipientLines.forEach((line) => {
        page2.drawText(line, {
            x: margin,
            y: yPos2,
            size: fontSize,
            font: helvetica,
            color: rgb(0, 0, 0),
        });
        yPos2 -= lineHeight;
    });

    yPos2 -= lineHeight * 4;

    // === P2 DATE LINE ===
    page2.drawText(`${cityName}, ${dateStr}`, {
        x: margin,
        y: yPos2,
        size: fontSize,
        font: helvetica,
        color: rgb(0, 0, 0),
    });
    yPos2 -= lineHeight * 2;

    // === P2 SUBJECT LINE ===
    page2.drawText('Anpassung Quellensteuertarif (Kirchenaustritt)', {
        x: margin,
        y: yPos2,
        size: fontSize + 1,
        font: helveticaBold,
        color: rgb(0, 0, 0),
    });
    yPos2 -= lineHeight * 2;

    // === P2 BODY ===
    const hrBodyLines = [
        'Sehr geehrte Damen und Herren,',
        '',
        'Ich habe per sofort meinen Austritt aus der Kirche erklärt.',
        '',
        'Bitte ändern Sie meinen Quellensteuertarif ab dem nächstmöglichen Zeitpunkt',
        'von Code "Y" (mit Kirchensteuer) auf Code "N" (ohne Kirchensteuer).',
        'Beispiel: Tarif A0Y -> A0N.',
        '',
        'Eine Kopie meiner Austrittserklärung lege ich bei (oder reiche die Bestätigung',
        'nach, sobald ich diese von der Kirche erhalten habe).',
        '',
        'Vielen Dank für die Kenntnisnahme.',
        '',
        'Freundliche Grüsse,',
    ];

    hrBodyLines.forEach((line) => {
        if (line.includes('A0Y') || line.includes('A0N')) {
            page2.drawText(line, {
                x: margin,
                y: yPos2,
                size: fontSize,
                font: helveticaBold,
                color: rgb(0, 0, 0),
            });
        } else {
            page2.drawText(line, {
                x: margin,
                y: yPos2,
                size: fontSize,
                font: helvetica,
                color: rgb(0, 0, 0),
            });
        }
        yPos2 -= lineHeight;
    });

    yPos2 -= lineHeight * 2;

    // === P2 SIGNATURE ===
    page2.drawText('________________________', {
        x: margin,
        y: yPos2,
        size: fontSize,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
    });
    yPos2 -= lineHeight;

    page2.drawText(formData.fullName, {
        x: margin,
        y: yPos2,
        size: fontSize,
        font: helvetica,
        color: rgb(0.3, 0.3, 0.3),
    });
    yPos2 -= lineHeight;

    page2.drawText('(Unterschrift)', {
        x: margin,
        y: yPos2,
        size: 9,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
    });

    // === P2 FOOTER ===
    page2.drawText('Generated by SwissShield.ch — Document Automation Service (Page 2/2)', {
        x: margin,
        y: 40,
        size: 8,
        font: helvetica,
        color: rgb(0.6, 0.6, 0.6),
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
