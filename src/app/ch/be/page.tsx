import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Bern 2026 — Stop Paying Church Tax | Swiss Shield',
    description:
        'Leave the church in Bern (BE) and stop paying Kirchensteuer. Generate your official resignation letter with the correct parish address in 2 minutes. Save hundreds of francs immediately.',
    keywords: [
        'Kirchenaustritt Bern',
        'Kirchensteuer Bern',
        'church tax Bern',
        'leave church Bern',
        'Kirche austreten Bern',
    ],
};

export default function BernPage() {
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
                        Canton Bern (BE)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Bern
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Stop paying church tax in Bern. Generate your official resignation letter
                        with the correct address in 2 minutes.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">8–20%</p>
                        <p className="text-slate-400 mt-1">Of cantonal tax</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">Instant</p>
                        <p className="text-slate-400 mt-1">Effectiveness</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 min</p>
                        <p className="text-slate-400 mt-1">To generate letter</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        How Church Tax Works in Bern
                    </h2>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            In Canton Bern, the <strong>Kirchensteuer</strong> (church tax) is mandatory for
                            members of the recognized churches. The tax is calculated as a percentage of your
                            cantonal tax, ranging significantly depending on your municipality.
                        </p>

                        <h3>The Resignation Process in Bern</h3>
                        <ol>
                            <li>Write a formal resignation letter (<em>Austrittserklärung</em>)</li>
                            <li>Send it to the <strong>Gesamtkirchgemeinde</strong> or local parish</li>
                            <li>Sign the letter by hand (mandatory)</li>
                            <li>Send via registered mail (<em>Einschreiben</em>)</li>
                        </ol>

                        <p>
                            In Bern, unlike some other cantons, the church exit typically takes effect
                            <strong>immediately</strong> upon receipt of your resignation letter. This means
                            you stop paying church tax right away, pro-rated for the rest of the year.
                        </p>

                        <p>
                            Finding the correct address for the &quot;Gesamtkirchgemeinde&quot; versus the local
                            social services office can be confusing. Swiss Shield routes your letter to the
                            correct administrative body for the fastest processing.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            What Swiss Shield Does For You
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Finds the correct church office address</li>
                            <li>✓ Generates a legally valid resignation letter in German</li>
                            <li>✓ Includes proper legal phrasing for immediate exit</li>
                            <li>✓ Ready to print, sign, and mail</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Generate Your Bern Letter — CHF 29
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Frequently Asked Questions — Bern
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Can I leave the church via email?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                No. In Bern, a handwritten signature on a physical letter is strictly required.
                                Email resignations are typically rejected.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Do I need to be a Swiss citizen to pay church tax?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                No. Foreign residents (C permit, B permit) are also subject to church tax
                                if they are registered as Catholic or Protestant.
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
