import { Shield, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Refund Policy — Swiss Shield',
    description: 'Refund policy for Swiss Shield document automation service.',
};

export default function RefundPage() {
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
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-3">
                        <RefreshCw className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                            <h2 className="font-semibold text-blue-800 text-lg">Our Guarantee</h2>
                            <p className="text-blue-700 mt-2">
                                If we made a mistake with your letter (wrong address, wrong language,
                                technical error), we will regenerate it for free or issue a full refund.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-700">
                    <h2 className="text-gray-900">When We Offer Refunds</h2>
                    <p>You are entitled to a refund or free regeneration if:</p>
                    <ul>
                        <li><strong>Wrong Address:</strong> We routed your letter to the wrong parish or church office</li>
                        <li><strong>Wrong Language:</strong> The letter was generated in German when it should have been French (or vice versa)</li>
                        <li><strong>Technical Error:</strong> The PDF was corrupted, blank, or unreadable</li>
                        <li><strong>Duplicate Purchase:</strong> You accidentally purchased twice for the same person</li>
                    </ul>

                    <h2>When Refunds Are Not Available</h2>
                    <p>We cannot offer refunds for:</p>
                    <ul>
                        <li><strong>User Error:</strong> You provided incorrect personal information (name, address, etc.)</li>
                        <li><strong>Change of Mind:</strong> You decided not to leave the church after purchasing</li>
                        <li><strong>Downloaded PDFs:</strong> Once you have downloaded the PDF, the service is considered delivered</li>
                        <li><strong>Church Rejection:</strong> If the church rejects your letter for reasons unrelated to our template</li>
                    </ul>

                    <h2>How to Request a Refund</h2>
                    <ol>
                        <li>Email <a href="mailto:swissshieldsup@outlook.fr">swissshieldsup@outlook.fr</a> within 7 days of purchase</li>
                        <li>Include your payment receipt (from Stripe) or the email used for purchase</li>
                        <li>Describe the issue you encountered</li>
                        <li>We will respond within 2 business days</li>
                    </ol>

                    <h2>Free Regeneration</h2>
                    <p>
                        In most cases, we prefer to regenerate your letter correctly rather than issue a refund.
                        If the error was on our side, we will create a new PDF with the correct information
                        at no additional cost.
                    </p>

                    <h2>Processing Time</h2>
                    <p>
                        Approved refunds are processed within 5-10 business days. The refund will appear
                        on your original payment method (credit card, debit card, etc.).
                    </p>

                    <h2>Contact</h2>
                    <p>
                        For refund requests: <a href="mailto:swissshieldsup@outlook.fr">swissshieldsup@outlook.fr</a>
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
