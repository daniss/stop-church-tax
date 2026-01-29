import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { FormData, Canton, Confession } from '@/lib/types';
import { findAddress } from '@/lib/address-data';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-12-15.clover',
});

export async function POST(request: NextRequest) {
    try {
        const body: FormData = await request.json();

        // Validate required fields
        if (
            !body.canton ||
            !body.zip ||
            !body.confession ||
            !body.fullName ||
            !body.dateOfBirth ||
            !body.email ||
            !body.addressLine1 ||
            !body.postalCity
        ) {
            return NextResponse.json(
                { error: 'Missing required fields: please fill in all form fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if we can route this address
        const matchedAddress = findAddress(
            body.canton as Canton,
            body.zip,
            body.confession as Confession
        );

        if (!matchedAddress.found) {
            return NextResponse.json(
                { error: 'Canton not supported yet' },
                { status: 400 }
            );
        }

        // Get base URL with fallback
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            // @ts-ignore
            allow_promotion_codes: true,
            line_items: [
                {
                    price: 'price_1Sv37C16ADgb9jS1mwrGb42e',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/?cancelled=true`,
            customer_email: body.email,
            metadata: {
                canton: body.canton,
                zip: body.zip,
                confession: body.confession,
                fullName: body.fullName,
                dateOfBirth: body.dateOfBirth,
                addressLine1: body.addressLine1,
                addressLine2: body.addressLine2 || '',
                postalCity: body.postalCity,
                email: body.email,
                recipientId: matchedAddress.address?.id || '',
            },
        });

        return NextResponse.json({
            sessionId: session.id,
            url: session.url,
        });
    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
}
