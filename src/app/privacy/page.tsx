import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy — Swiss Shield',
    description: 'How Swiss Shield handles your personal data.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-slate-900 py-6">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <Shield className="w-6 h-6 text-red-500" />
                        <span className="font-semibold">Swiss Shield</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                <div className="prose prose-slate max-w-none">
                    <p className="text-gray-600">Last updated: January 2026</p>

                    <h2>1. Data We Collect</h2>
                    <p>When you use Swiss Shield, we collect:</p>
                    <ul>
                        <li><strong>Form Data:</strong> Name, address, canton, postal code, email, and confession type</li>
                        <li><strong>Payment Data:</strong> Processed by Stripe; we do not store card numbers</li>
                        <li><strong>Usage Data:</strong> Anonymous analytics (page views, button clicks)</li>
                    </ul>

                    <h2>2. How We Use Your Data</h2>
                    <p>Your data is used exclusively to:</p>
                    <ul>
                        <li>Generate your personalized resignation letter</li>
                        <li>Process your payment</li>
                        <li>Send your receipt and enable re-downloads</li>
                        <li>Improve our service</li>
                    </ul>

                    <h2>3. Data Storage</h2>
                    <p>
                        Your order data is stored securely in Stripe&apos;s payment metadata. We host on Vercel
                        (EU region). We retain order data as long as required for payment processing
                        and to comply with Swiss accounting requirements.
                    </p>

                    <h2>4. Data Sharing</h2>
                    <p>We share data only with:</p>
                    <ul>
                        <li><strong>Stripe:</strong> For payment processing and order metadata</li>
                        <li><strong>Vercel:</strong> For hosting</li>
                    </ul>
                    <p>We do not sell your data to third parties. Ever.</p>

                    <h2>5. Your Rights (GDPR/DSG)</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li><strong>Access:</strong> Request a copy of your data</li>
                        <li><strong>Rectification:</strong> Correct inaccurate data</li>
                        <li><strong>Erasure:</strong> Request deletion of your data</li>
                        <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                    </ul>
                    <p>
                        To exercise these rights, email <a href="mailto:privacy@swissshield.ch">privacy@swissshield.ch</a>
                    </p>

                    <h2>6. Cookies</h2>
                    <p>
                        We use essential cookies for session management. We use privacy-friendly analytics
                        (Plausible) that do not require cookie consent. No tracking cookies are used.
                    </p>

                    <h2>7. Security</h2>
                    <p>
                        All data is encrypted in transit (TLS) and at rest. We follow industry best practices
                        for data security.
                    </p>

                    <h2>8. Contact</h2>
                    <p>
                        Data Controller: Swiss Shield<br />
                        Email: <a href="mailto:privacy@swissshield.ch">privacy@swissshield.ch</a>
                    </p>
                </div>
            </main>

            <footer className="border-t border-gray-200 py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
                    © 2026 Swiss Shield. Document automation service.
                </div>
            </footer>
        </div>
    );
}
