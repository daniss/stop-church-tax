import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Zug 2026 — Keine Kirchensteuer mehr | Schweizer Schild',
    description:
        'Austritt aus der Kirche in Zug (ZG). Sparen Sie Tausende Franken Kirchensteuer. Der Austritt ist auch für Expats möglich. Legal in 2 Minuten.',
    keywords: [
        'Kirchenaustritt Zug',
        'Kirchensteuer Zug',
        'Kirchensteuer sparen Zug',
        'Expat Steuern Zug',
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
                        Kanton Zug (ZG)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Zug
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Für Besserverdiener in Zug kann die Kirchensteuer über CHF 2'000 pro Jahr kosten.
                        Stoppen Sie den automatischen Abzug legal.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 2k+</p>
                        <p className="text-slate-400 mt-1">Mögliche Ersparnis</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">Pflicht</p>
                        <p className="text-slate-400 mt-1">Ohne Austritt</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 Min</p>
                        <p className="text-slate-400 mt-1">Dauer</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        The Cost of Church Tax in Zug
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-800 mb-8">
                        <p>
                            Obwohl der Kanton Zug für tiefe Steuern bekannt ist, ist die <strong>Kirchensteuer</strong> eine
                            wichtige Ausnahme. Sie ist für alle registrierten Katholiken und Reformierten obligatorisch.
                            Da die Einkommen in Zug oft höher sind, sind auch die Kirchensteuerbeträge erheblich.
                        </p>

                        <p>
                            Viele Expats werden bei der Anmeldung in Zug automatisch als Kirchenmitglieder registriert,
                            oft ohne die finanziellen Folgen zu realisieren, bis die erste Steuerrechnung kommt.
                        </p>

                        <h3>So treten Sie in Zug aus</h3>
                        <p>
                            Um die Zahlung zu stoppen, müssen Sie formell aus der Kirche austreten (<em>Kirchenaustritt</em>).
                            Dies erfordert einen physischen Brief an die zuständige Kirchenkanzlei.
                        </p>

                        <ol>
                            <li>Erstellen Sie Ihren Brief mit korrekter juristischer Terminologie</li>
                            <li>Senden Sie ihn an die Kanzlei (wir liefern die Adresse)</li>
                            <li>Die Steuerpflicht endet meist am Ende des Austritts-Monats</li>
                        </ol>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Vorteil von Schweizer Schild
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Adressiert an die korrekte Zuger Kirchenkanzlei</li>
                            <li>✓ Standardisiertes, behördlich akzeptiertes Format</li>
                            <li>✓ Vermeidet Fehler, die zur Ablehnung führen</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Zuger Austritt erstellen — CHF 9.99
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Häufige Fragen — Zug
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Kann ich vergangene Kirchensteuern zurückfordern?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Generell nein. Sie können nur zukünftige Zahlungen stoppen. Der Austritt ist meist
                                ab Ende des Monats wirksam, in dem Sie den Brief senden.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Ich bin Expat, gilt das für mich?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Ja. Ihre Nationalität spielt keine Rolle. Wenn Sie im Kanton Zug wohnen und
                                einer Konfession angehören, zahlen Sie Kirchensteuer.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-slate-700 py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
                    © 2026 Schweizer Schild. Automatisierter Brief-Service. Keine Rechtsberatung.
                </div>
            </footer>
        </div>
    );
}
