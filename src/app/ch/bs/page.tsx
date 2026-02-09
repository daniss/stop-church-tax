import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Basel-Stadt 2026 — Keine Kirchensteuer mehr | Schweizer Schild',
    description:
        'Austritt aus der Kirche in Basel-Stadt. Erstellen Sie Ihren offiziellen Austrittsbrief mit der korrekten Adresse in 2 Minuten.',
    keywords: [
        'Kirchenaustritt Basel',
        'Kirchensteuer Basel',
        'Austritt Kirche Basel',
        'Kirchensteuer sparen Basel',
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
                        Kanton Basel-Stadt (BS)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Basel-Stadt
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Keine Kirchensteuer mehr in Basel. Erstellen Sie Ihren offiziellen Austrittsbrief
                        mit der korrekten Adresse in 2 Minuten.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">CHF 600–1'200</p>
                        <p className="text-slate-400 mt-1">Gespart pro Jahr</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">7–10%</p>
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
                        Wie die Kirchensteuer in Basel-Stadt funktioniert
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-800 mb-8">
                        <p>
                            In Basel-Stadt wird die <strong>Kirchensteuer</strong> von registrierten Mitgliedern
                            der katholischen und reformierten Kirche erhoben. Im Gegensatz zu anderen Kantonen
                            sind juristische Personen in Basel-Stadt <strong>nicht</strong> kirchensteuerpflichtig.
                        </p>

                        <p>
                            Für Privatpersonen beträgt die Steuer ca. 7–10% der Staatssteuer.
                            Bei einem Einkommen von CHF 100'000 zahlen Sie rund <strong>CHF 600–1'200 pro Jahr</strong>.
                        </p>

                        <h3>Der Austrittsprozess in Basel</h3>
                        <ol>
                            <li>Verfassen einer formellen Austrittserklärung</li>
                            <li>Adressierung an die zentrale Kirchenverwaltung (nicht die lokale Pfarrei)</li>
                            <li>Handschriftliche Unterschrift</li>
                            <li>Versand per Einschreiben</li>
                        </ol>

                        <p>
                            Basel-Stadt ist einfacher als andere Kantone, da es für jede Konfession eine zentrale
                            Adresse gibt. Wir sorgen dafür, dass Ihr Brief richtig ankommt.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Was Schweizer Schild für Sie tut
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Adressiert an die korrekte Basler Kirchenverwaltung</li>
                            <li>✓ Erstellt einen rechtssicheren Austrittsbrief</li>
                            <li>✓ Inkludiert korrekte juristische Formulierungen</li>
                            <li>✓ Druckfertig zum Unterschreiben & Versenden</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Basler Austritt erstellen — CHF 9.99
                        <ArrowRight className="w-5 h-5" />
                    </Link>
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
