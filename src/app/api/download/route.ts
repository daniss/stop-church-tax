import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { generateExitPdf } from '@/lib/pdf-generator';
import { findAddress } from '@/lib/address-data';
import { Canton, Confession, FormData } from '@/lib/types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-12-15.clover',
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get('session_id');

        if (!sessionId) {
            return NextResponse.json(
                { error: 'Missing session_id' },
                { status: 400 }
            );
        }

        // Retrieve the checkout session from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        // Verify payment was successful
        if (session.payment_status !== 'paid') {
            return NextResponse.json(
                { error: 'Payment not completed' },
                { status: 402 }
            );
        }

        // Extract form data from metadata
        const metadata = session.metadata!;
        const formData: FormData = {
            canton: metadata.canton as Canton,
            zip: metadata.zip,
            confession: metadata.confession as Confession,
            fullName: metadata.fullName,
            dateOfBirth: metadata.dateOfBirth,
            addressLine1: metadata.addressLine1,
            addressLine2: metadata.addressLine2 || undefined,
            postalCity: metadata.postalCity,
            email: metadata.email,
        };

        // Find the recipient address
        const matched = findAddress(formData.canton, formData.zip, formData.confession);

        if (!matched.found || !matched.address) {
            return NextResponse.json(
                { error: 'Address not found' },
                { status: 404 }
            );
        }

        // Generate the PDF
        const pdfBytes = await generateExitPdf(formData, matched.address);

        // Return the PDF
        return new NextResponse(Buffer.from(pdfBytes), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="kirchenaustritt-${formData.canton}-${Date.now()}.pdf"`,
                'Content-Length': pdfBytes.length.toString(),
            },
        });
    } catch (error) {
        console.error('Download error:', error);
        return NextResponse.json(
            { error: 'Failed to generate PDF' },
            { status: 500 }
        );
    }
}
