import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Zürich 2026 — Keine Kirchensteuer mehr | Schweizer Schild',
    description:
        'Austritt aus der Kirche in Zürich. Erstellen Sie Ihren offiziellen Austrittsbrief mit der korrekten Adresse in 2 Minuten. Sparen Sie CHF 800-1\'400 pro Jahr.',
    keywords: [
        'Kirchenaustritt Zürich',
        'Kirchensteuer Zürich',
        'Austritt Kirche Zürich',
        'Kirchensteuer sparen Zürich',
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
                        Kanton Zürich (ZH)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Zürich
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Keine Kirchensteuer mehr in Zürich. Erstellen Sie Ihren offiziellen Austrittsbrief
                        mit der korrekten Adresse in 2 Minuten.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 800–1'400</p>
                        <p className="text-slate-400 mt-1">Gespart pro Jahr</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">8–12%</p>
                        <p className="text-slate-400 mt-1">der Kantonssteuer</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 Min</p>
                        <p className="text-slate-400 mt-1">Dauer</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Wie die Kirchensteuer in Zürich funktioniert
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-800 mb-8">
                        <p>
                            Im Kanton Zürich wird die <strong>Kirchensteuer</strong> automatisch vom Lohn abgezogen,
                            wenn Sie als Römisch-Katholisch oder Evangelisch-Reformiert gemeldet sind.
                            Der Steuersatz beträgt ca. 8–12% der einfachen Staatssteuer.
                        </p>

                        <p>
                            Für jemanden mit CHF 100'000 Einkommen bedeutet das <strong>CHF 800–1'400 pro Jahr</strong>
                            — Geld, das Sie sparen oder investieren könnten.
                        </p>

                        <h3>Der Austrittsprozess in Zürich</h3>
                        <ol>
                            <li>Verfassen einer formellen Austrittserklärung</li>
                            <li>Senden an die <strong>Kirchgemeinde</strong> (nicht die politische Gemeinde!)</li>
                            <li>Brief handschriftlich unterzeichnen</li>
                            <li>Per Einschreiben versenden</li>
                            <li>Bestätigung innert 4–6 Wochen erhalten</li>
                        </ol>

                        <p>
                            Das Problem? Die <strong>korrekte Adresse</strong> zu finden. Die Kirchgemeinden
                            entsprechen nicht immer den politischen Gemeinden. Ein Brief an die falsche Adresse
                            führt zu Verzögerungen oder Ablehnung.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Was Schweizer Schild für Sie tut
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Findet die korrekte Kirchgemeinde für Ihre PLZ</li>
                            <li>✓ Erstellt den rechtssicheren Austrittsbrief</li>
                            <li>✓ Inkludiert korrekte Formulierungen & Formatierung</li>
                            <li>✓ Druckfertig zum Unterschreiben & Versenden</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Zürcher Austritt erstellen — CHF 9.99
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Häufige Fragen — Zürich
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Wann ist der Austritt wirksam?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                In Zürich ist der Austritt ab dem Datum wirksam, an dem die Kirchgemeinde
                                Ihren Brief erhält. Wenn Sie im Januar austreten, sind Sie meist für das ganze Jahr befreit.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Kann ich den gleichen Brief für meinen Partner nutzen?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Nein, jede Person muss einen eigenen Brief unterschreiben, auch bei gleicher Adresse.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Wo sehe ich meine Konfession?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Prüfen Sie Ihre Steuerrechnung — dort steht "röm.-kath." oder "evang.-ref." neben der Kirchensteuer.
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
