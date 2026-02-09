import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Kirchenaustritt Bern 2026 — Keine Kirchensteuer mehr | Schweizer Schild',
    description:
        'Austritt aus der Kirche im Kanton Bern (BE). Sparen Sie Kirchensteuer ab sofort. Offizieller Austrittsbrief in 2 Minuten erstellt.',
    keywords: [
        'Kirchenaustritt Bern',
        'Kirchensteuer Bern',
        'Kirchensteuer sparen Bern',
        'Austritt Kirche Bern',
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
                        Kanton Bern (BE)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Kirchenaustritt in Bern
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Keine Kirchensteuer mehr in Bern. Erstellen Sie Ihren offiziellen Austrittsbrief
                        mit der korrekten Adresse in 2 Minuten.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">8–20%</p>
                        <p className="text-slate-400 mt-1">der Kantonssteuer</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">Sofort</p>
                        <p className="text-slate-400 mt-1">Wirksamkeit</p>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-6 text-center">
                        <p className="text-3xl font-bold text-white">2 Min</p>
                        <p className="text-slate-400 mt-1">Dauer</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Wie die Kirchensteuer in Bern funktioniert
                    </h2>

                    <div className="prose prose-gray max-w-none text-gray-800 mb-8">
                        <p>
                            Im Kanton Bern ist die <strong>Kirchensteuer</strong> für Mitglieder der anerkannten
                            Landeskirchen obligatorisch. Die Steuer wird als Prozentsatz der Kantonssteuer berechnet
                            und variiert je nach Gemeinde stark.
                        </p>

                        <h3>Der Austrittsprozess in Bern</h3>
                        <ol>
                            <li>Verfassen einer formellen Austrittserklärung</li>
                            <li>Senden an die <strong>Gesamtkirchgemeinde</strong> oder lokale Kirchgemeinde</li>
                            <li>Zwingend handschriftlich unterzeichnen</li>
                            <li>Per Einschreiben versenden</li>
                        </ol>

                        <p>
                            In Bern ist die Besonderheit, dass der Austritt meist <strong>sofort</strong> mit
                            Eingang des Briefes wirksam wird. Das bedeutet, dass die Steuerpflicht oft per
                            sofort (pro rata) endet.
                        </p>

                        <p>
                            Die richtige Adresse zu finden (Gesamtkirchgemeinde vs. Verwaltung) kann verwirrend sein.
                            Schweizer Schild adressiert Ihren Brief automatisch an die zuständige Stelle.
                        </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Was Schweizer Schild für Sie tut
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Findet die korrekte Adresse der Kirchgemeinde</li>
                            <li>✓ Erstellt einen rechtssicheren Austrittsbrief</li>
                            <li>✓ Inkludiert Formulierungen für sofortigen Austritt</li>
                            <li>✓ Druckfertig zum Unterschreiben & Versenden</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Berner Austritt erstellen — CHF 9.99
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* FAQ */}
                <div className="bg-slate-800 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">
                        Häufige Fragen — Bern
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-white">
                                Kann ich per E-Mail austreten?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Nein. Im Kanton Bern ist eine handschriftliche Unterschrift zwingend erforderlich.
                                E-Mails werden in der Regel abgelehnt.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">
                                Muss ich Schweizer Bürger sein, um Kirchensteuer zu zahlen?
                            </h3>
                            <p className="text-slate-300 mt-2">
                                Nein. Auch ausländische Einwohner (C-Ausweis, B-Ausweis) sind kirchensteuerpflichtig,
                                wenn sie einer Landeskirche angehören.
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
