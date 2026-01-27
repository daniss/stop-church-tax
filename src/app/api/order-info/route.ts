import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { findAddress } from '@/lib/address-data';
import { Canton, Confession } from '@/lib/types';

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

        // Extract metadata
        const metadata = session.metadata!;

        // Find the recipient address
        const matched = findAddress(
            metadata.canton as Canton,
            metadata.zip,
            metadata.confession as Confession
        );

        if (!matched.found || !matched.address) {
            return NextResponse.json({ recipient: null });
        }

        // Return recipient info for display
        return NextResponse.json({
            recipient: {
                name: matched.address.recipient_name,
                address: matched.address.addr1 + (matched.address.addr2 ? ', ' + matched.address.addr2 : ''),
                postal: matched.address.postal,
                city: matched.address.city,
            },
            orderInfo: {
                canton: metadata.canton,
                confession: metadata.confession,
                customerName: metadata.fullName,
            },
        });
    } catch (error) {
        console.error('Order info error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch order info' },
            { status: 500 }
        );
    }
}
