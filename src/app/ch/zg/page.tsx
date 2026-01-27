import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Zug 2026 — Stop Paying Church Tax | Swiss Shield',
    description:
        'Leave the church in Zug (ZG) and save thousands in Kirchensteuer. The tax is mandatory even for expats. Exit legally in 2 minutes.',
    keywords: [
        'Kirchenaustritt Zug',
        'Kirchensteuer Zug',
        'church tax Zug',
        'expat tax Zug',
        'Kirche austreten Zug',
    ],
};

export default function ZugPage() {
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
                        Canton Zug (ZG)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Zug
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        For high earners in Zug, church tax can cost over CHF 2,000 per year.
                        Stop the automatic deduction legally.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 2k+</p>
                        <p className="text-slate-400 mt-1">Potential savings</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">Mandatory</p>
                        <p className="text-slate-400 mt-1">Unless you exit</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 min</p>
                        <p className="text-slate-400 mt-1">To generate letter</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        The Cost of Church Tax in Zug
                    </h2>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            While Canton Zug is known for low taxes, the <strong>Kirchensteuer</strong> is a significant exception.
                            It is mandatory for all registered Catholic and Reformed residents. Because incomes in Zug are
                            often higher, the absolute amount paid in church tax can be substantial.
                        </p>

                        <p>
                            Many expats are registered as church members by default when they move to Zug, often without
                            realizing the financial implication until they receive their first full tax bill.
                        </p>

                        <h3>How to Exit in Zug</h3>
                        <p>
                            To stop paying, you must formally declare your exit from the church (<em>Kirchenaustritt</em>).
                            This requires a physical letter sent to your specific parish chancellery (<em>Kirchenkanzlei</em>).
                        </p>

                        <ol>
                            <li>Generate your letter with correct legal terminology</li>
                            <li>Send it to the Chancellery (we provide the correct address)</li>
                            <li>The tax liability typically ends at the end of the month of exit</li>
                        </ol>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Swiss Shield Advantage
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Routes to the correct Zuger Kirchenkanzlei</li>
                            <li>✓ Standard German letter format accepted by authorities</li>
                            <li>✓ Avoids common pitfalls that cause rejection</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Generate Your Zug Letter — CHF 29
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Frequently Asked Questions — Zug
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Can I claim back past church taxes?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Generally, no. You can only stop future payments. The exit is usually effective
                                from the end of the month you send the letter.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                I am an expat, does this apply to me?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Yes. Your nationality does not matter. If you are a resident in Zug and registered
                                with a confession, you pay the tax.
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
