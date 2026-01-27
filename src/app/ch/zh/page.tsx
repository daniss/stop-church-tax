import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Zürich 2026 — Stop Paying Church Tax | Swiss Shield',
    description:
        'Leave the church in Zürich and stop paying Kirchensteuer. Generate your official resignation letter with the correct parish address in 2 minutes. Save CHF 800-1,400 per year.',
    keywords: [
        'Kirchenaustritt Zürich',
        'Kirchensteuer Zürich',
        'leave church Zurich',
        'stop church tax Zurich',
        'Kirche austreten Zürich',
    ],
};

export default function ZurichPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <header className="py-6 border-b border-slate-700">
                <div className="max-w-4xl mx-auto px-4">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <Shield className="w-6 h-6 text-red-500" />
                        <span className="font-semibold">Swiss Shield</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <span className="inline-block bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Canton Zürich (ZH)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Zürich
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Stop paying church tax in Zurich. Generate your official resignation letter
                        with the correct address in 2 minutes.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 800–1,400</p>
                        <p className="text-slate-400 mt-1">Saved per year</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">8–12%</p>
                        <p className="text-slate-400 mt-1">Of cantonal tax</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 min</p>
                        <p className="text-slate-400 mt-1">To generate letter</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        How Church Tax Works in Zürich
                    </h2>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            In Canton Zürich, the <strong>Kirchensteuer</strong> (church tax) is automatically
                            deducted from your salary if you are registered as Catholic (römisch-katholisch)
                            or Reformed Protestant (evangelisch-reformiert). The tax rate is approximately
                            8–12% of your cantonal income tax.
                        </p>

                        <p>
                            For someone earning CHF 100,000, this typically amounts to <strong>CHF 800–1,400
                                per year</strong>—money you could be saving or investing.
                        </p>

                        <h3>The Resignation Process in Zürich</h3>
                        <ol>
                            <li>Write a formal resignation letter (<em>Austrittserklärung</em>)</li>
                            <li>Send it to your <strong>Kirchgemeinde</strong> (parish), not the Gemeinde</li>
                            <li>Sign the letter by hand</li>
                            <li>Send via registered mail (<em>Einschreiben</em>)</li>
                            <li>Receive written confirmation within 4–6 weeks</li>
                        </ol>

                        <p>
                            The tricky part? Finding the <strong>correct address</strong>. The parish boundaries
                            don&apos;t always match the political municipalities or postal codes. Send to the wrong
                            address, and your letter may be rejected or delayed.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            What Swiss Shield Does For You
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Finds the correct parish address for your ZIP code</li>
                            <li>✓ Generates a legally valid resignation letter in German</li>
                            <li>✓ Includes proper legal phrasing and formatting</li>
                            <li>✓ Ready to print, sign, and mail</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Generate Your Zurich Letter — CHF 29
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Frequently Asked Questions — Zürich
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                When does the tax exemption take effect?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                In Zürich, the church tax exemption typically takes effect from the date
                                the parish receives your letter. If you submit in January, you may be
                                exempt for the entire year.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Can I use the same letter for my spouse?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                No, each person must submit their own resignation letter, even if you
                                share the same address and parish.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                What if I&apos;m not sure which confession I&apos;m registered as?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Check your tax statement (<em>Steuerrechnung</em>) — it will show
                                &quot;röm.-kath.&quot; or &quot;evang.-ref.&quot; next to the church tax line.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-slate-700 py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
                    © 2026 Swiss Shield. Document automation service. Not legal advice.
                </div>
            </footer>
        </div>
    );
}
