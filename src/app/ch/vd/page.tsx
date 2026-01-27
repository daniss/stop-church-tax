import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Quitter l\'Église dans le Canton de Vaud 2026 — Swiss Shield',
    description:
        'Sortie de l\'Église dans le Canton de Vaud (Lausanne). Générez votre lettre de démission officielle en 2 minutes.',
    keywords: [
        'quitter église Vaud',
        'sortie église Lausanne',
        'démission église Vaud',
        'leave church Vaud',
        'Lausanne church exit',
    ],
};

export default function VaudPage() {
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
                        Canton de Vaud (VD)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Sortie de l&apos;Église dans le Canton de Vaud
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Générez votre lettre de démission officielle avec la bonne adresse en 2 minutes.
                    </p>
                </div>

                {/* Note about Vaud */}
                <div className="bg-blue-900/50 border border-blue-500/30 rounded-xl p-6 mb-12">
                    <h3 className="font-semibold text-blue-300 mb-2">
                        💡 Particularité du Canton de Vaud
                    </h3>
                    <p className="text-blue-200">
                        Dans le Canton de Vaud, il n&apos;y a <strong>pas d&apos;impôt ecclésiastique</strong>
                        pour les particuliers. Les Églises sont financées par l&apos;État. Cependant, vous
                        pouvez toujours souhaiter formaliser votre sortie de l&apos;Église.
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Pourquoi formaliser sa sortie à Vaud?
                    </h2>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            Même si vous ne payez pas d&apos;impôt ecclésiastique dans le Canton de Vaud,
                            certaines personnes souhaitent formaliser leur sortie pour des raisons
                            personnelles ou philosophiques.
                        </p>

                        <p>
                            Une lettre de démission officielle vous permet de:
                        </p>
                        <ul>
                            <li>Clarifier votre statut auprès de l&apos;Église</li>
                            <li>Éviter de recevoir des communications de la paroisse</li>
                            <li>Formaliser votre position personnelle</li>
                        </ul>

                        <h3>Destinataires à Vaud</h3>
                        <ul>
                            <li><strong>Catholique:</strong> Fédération ecclésiastique catholique romaine du Canton de Vaud</li>
                            <li><strong>Protestant:</strong> Église évangélique réformée du Canton de Vaud</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                        <h3 className="font-semibold text-green-800 flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5" />
                            Ce que Swiss Shield fait pour vous
                        </h3>
                        <ul className="text-green-700 space-y-2">
                            <li>✓ Trouve l&apos;adresse correcte de votre Église</li>
                            <li>✓ Génère une lettre de démission valide en français</li>
                            <li>✓ Format professionnel prêt à imprimer</li>
                            <li>✓ Instructions étape par étape</li>
                        </ul>
                    </div>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-600 transition-all"
                    >
                        Générer ma lettre — CHF 29
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>

            <footer className="border-t border-slate-700 py-8 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-sm">
                    © 2026 Swiss Shield. Service d&apos;automatisation de documents. Pas un conseil juridique.
                </div>
            </footer>
        </div>
    );
}
