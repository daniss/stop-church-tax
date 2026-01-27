import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service — Swiss Shield',
    description: 'Terms and conditions for using Swiss Shield document automation service.',
};

export default function TermsPage() {
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
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                <div className="prose prose-gray max-w-none text-gray-800">
                    <p className="text-gray-600">Last updated: January 2026</p>

                    <h2>1. Service Description</h2>
                    <p>
                        Swiss Shield ("we", "our", "the Service") is a document automation service that
                        generates resignation letters for church membership in Switzerland. We provide:
                    </p>
                    <ul>
                        <li>Automated lookup of church office addresses based on canton and postal code</li>
                        <li>Generation of standardized resignation letter templates</li>
                        <li>Delivery of generated documents in PDF format</li>
                    </ul>

                    <h2>2. What We Are NOT</h2>
                    <p>
                        <strong>We are not a law firm.</strong> We do not provide legal advice. The documents
                        we generate are templates based on publicly available information. We make no
                        guarantees about the legal validity or acceptance of any document by any church
                        authority.
                    </p>

                    <h2>3. User Responsibilities</h2>
                    <p>By using this Service, you agree that:</p>
                    <ul>
                        <li>All information you provide is accurate and complete</li>
                        <li>You are the person named in the generated document (or authorized to act on their behalf)</li>
                        <li>You will print, sign, and mail the document yourself</li>
                        <li>You understand that the church resignation process varies by canton and parish</li>
                    </ul>

                    <h2>4. Payment and Refunds</h2>
                    <p>
                        Payment is non-refundable once a PDF has been generated and downloaded. If you believe
                        you received an incorrect document due to our error (e.g., wrong canton routing), contact
                        us at support@stop-church-tax.ch within 7 days for a replacement or refund.
                    </p>

                    <h2>5. Data Handling</h2>
                    <p>
                        Your order data is processed by Stripe for payment. We do not store payment card details.
                        For full details on how we handle your data, see our <Link href="/privacy">Privacy Policy</Link>.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Swiss Shield shall not be liable for any
                        indirect, incidental, special, consequential, or punitive damages, including loss of
                        profits, data, or other intangible losses resulting from your use of the Service.
                    </p>

                    <h2>7. Governing Law</h2>
                    <p>
                        These terms are governed by the laws of Switzerland. Any disputes shall be submitted
                        to the courts of Zurich, Switzerland.
                    </p>

                    <h2>8. Changes to Terms</h2>
                    <p>
                        We may update these terms from time to time. Continued use of the Service after changes
                        constitutes acceptance of the new terms.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        Questions about these terms? Email us at <a href="mailto:support@stop-church-tax.ch">support@stop-church-tax.ch</a>
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
