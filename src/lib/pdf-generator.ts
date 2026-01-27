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
    const isGerman = ['ZH', 'BS'].includes(formData.canton);

    // Format today's date
    const today = new Date();
    const dateStr = today.toLocaleDateString(isGerman ? 'de-CH' : 'fr-CH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    // Confession labels
    const confessionLabel = isGerman
        ? (formData.confession === 'catholic' ? 'röm.-kath.' : 'ref.')
        : (formData.confession === 'catholic' ? 'catholique romaine' : 'réformée');

    const confessionFull = isGerman
        ? (formData.confession === 'catholic' ? 'römisch-katholischen Kirche' : 'evangelisch-reformierten Kirche')
        : (formData.confession === 'catholic' ? "l'Église catholique romaine" : "l'Église protestante réformée");

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
        : (isGerman ? 'Schweiz' : 'Suisse');

    page.drawText(`${cityName}, ${dateStr}`, {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: helvetica,
        color: rgb(0, 0, 0),
    });
    yPosition -= lineHeight * 2;

    // === SUBJECT LINE ===
    const subject = isGerman
        ? `Kirchenaustritt (${confessionLabel}) / Austritt aus der ${confessionFull}`
        : `Déclaration de sortie (${confessionLabel}) / Sortie de ${confessionFull}`;

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
    let dobDisplay = isGerman ? '[Geburtsdatum]' : '[Date de naissance]';
    if (formData.dateOfBirth) {
        const parts = formData.dateOfBirth.split('-');
        if (parts.length === 3) {
            dobDisplay = `${parts[2]}.${parts[1]}.${parts[0]}`;
        } else {
            dobDisplay = formData.dateOfBirth;
        }
    }

    const identityLines = isGerman
        ? [
            `Name: ${formData.fullName}`,
            `Geburtsdatum: ${dobDisplay}`,
            `Adresse: ${formData.addressLine1}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.postalCity}`,
            `Konfession: ${confessionLabel}`,
        ]
        : [
            `Nom: ${formData.fullName}`,
            `Date de naissance: ${dobDisplay}`,
            `Adresse: ${formData.addressLine1}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.postalCity}`,
            `Confession: ${confessionLabel}`,
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
    const bodyLines = isGerman
        ? [
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
        ]
        : [
            'Madame, Monsieur,',
            '',
            `Par la présente, je déclare ma sortie de ${confessionFull}`,
            'avec effet dès réception de ce courrier.',
            '',
            'Je vous prie de bien vouloir m\'adresser une confirmation écrite',
            'de la réception de ce courrier ainsi que de la date d\'effet de ma sortie.',
            '',
            'Si une notification aux autorités compétentes est prévue,',
            'je vous prie de bien vouloir y procéder.',
            '',
            'Veuillez agréer, Madame, Monsieur, mes salutations distinguées.',
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

    page.drawText(isGerman ? '(Unterschrift)' : '(Signature)', {
        x: margin,
        y: yPosition,
        size: 9,
        font: helvetica,
        color: rgb(0.5, 0.5, 0.5),
    });

    yPosition -= lineHeight * 2;

    // === P.S. FORWARDING CLAUSE ===
    const psText = isGerman
        ? 'P.S. Falls Sie nicht zuständig sind, bitte ich Sie, dieses Schreiben an die zuständige Stelle weiterzuleiten oder mir die korrekte Adresse mitzuteilen.'
        : 'P.S. Si vous n\'êtes pas l\'autorité compétente, je vous remercie de transmettre cette demande au service compétent ou de m\'indiquer l\'adresse correcte.';

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

    // === FOOTER ===
    page.drawText('Generated by SwissShield.ch — Document Automation Service', {
        x: margin,
        y: 40,
        size: 8,
        font: helvetica,
        color: rgb(0.6, 0.6, 0.6),
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}
