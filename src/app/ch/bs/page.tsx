import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Basel-Stadt 2026 — Stop Paying Church Tax | Swiss Shield',
    description:
        'Leave the church in Basel-Stadt and stop paying Kirchensteuer. Generate your official resignation letter with the correct address in 2 minutes.',
    keywords: [
        'Kirchenaustritt Basel',
        'Kirchensteuer Basel',
        'leave church Basel',
        'stop church tax Basel',
        'Kirche austreten Basel',
    ],
};

export default function BaselPage() {
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
                        Canton Basel-Stadt (BS)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Basel-Stadt
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Stop paying church tax in Basel. Generate your official resignation letter
                        with the correct address in 2 minutes.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 600–1,200</p>
                        <p className="text-slate-400 mt-1">Saved per year</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">7–10%</p>
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
                        How Church Tax Works in Basel-Stadt
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-800 mb-8">
                        <p>
                            In Basel-Stadt, the <strong>Kirchensteuer</strong> is charged to registered
                            members of the Catholic and Reformed churches. Unlike some other cantons,
                            legal entities in Basel-Stadt are <strong>not</strong> subject to church tax.
                        </p>

                        <p>
                            For individuals, the rate is approximately 7–10% of the cantonal income tax.
                            If you earn CHF 100,000, you&apos;re paying around <strong>CHF 600–1,200
                                per year</strong> in church tax.
                        </p>

                        <h3>The Basel Process</h3>
                        <ol>
                            <li>Write a formal resignation letter</li>
                            <li>Address it to the central church administration (not your local parish)</li>
                            <li>Sign by hand</li>
                            <li>Send via registered mail</li>
                        </ol>

                        <p>
                            Basel-Stadt is simpler than some other cantons because there is one central
                            address for each confession. We&apos;ll route your letter correctly.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            What Swiss Shield Does For You
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Routes to the correct Basel church administration</li>
                            <li>✓ Generates a legally valid resignation letter in German</li>
                            <li>✓ Includes proper legal phrasing</li>
                            <li>✓ Ready to print, sign, and mail</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Generate Your Basel Letter — CHF 29
                        <ArrowRight className="w-5 h-5" />
                    </Link>
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
