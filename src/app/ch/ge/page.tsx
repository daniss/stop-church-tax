import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Quitter l\'Église à Genève 2026 — Swiss Shield',
    description:
        'Sortie de l\'Église à Genève. Générez votre lettre de démission officielle avec la bonne adresse en 2 minutes.',
    keywords: [
        'quitter église Genève',
        'sortie église Genève',
        'démission église Genève',
        'leave church Geneva',
        'church exit Geneva',
    ],
};

export default function GenevePage() {
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
                        Canton de Genève (GE)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Sortie de l&apos;Église à Genève
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Générez votre lettre de démission officielle avec la bonne adresse en 2 minutes.
                    </p>
                </div>

                {/* Note about Geneva */}
                <div className="bg-blue-900/50 border border-blue-500/30 rounded-xl p-6 mb-12">
                    <h3 className="font-semibold text-blue-300 mb-2">
                        💡 Note sur Genève
                    </h3>
                    <p className="text-blue-200">
                        À Genève, l&apos;impôt ecclésiastique est <strong>facultatif</strong> pour les
                        particuliers. Cependant, si vous êtes inscrit comme membre d&apos;une Église reconnue,
                        vous pouvez toujours souhaiter formaliser votre sortie.
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Comment ça fonctionne à Genève
                    </h2>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p>
                            Genève est l&apos;un des rares cantons où l&apos;impôt ecclésiastique est
                            <strong> volontaire</strong> pour les personnes physiques. Cela signifie que
                            vous n&apos;êtes pas automatiquement prélevé si vous ne le souhaitez pas.
                        </p>

                        <p>
                            Cependant, de nombreuses personnes restent inscrites sans le savoir. Si vous
                            souhaitez officialiser votre sortie de l&apos;Église catholique ou protestante,
                            vous devez envoyer une lettre de démission.
                        </p>

                        <h3>Destinataires à Genève</h3>
                        <ul>
                            <li><strong>Catholique:</strong> Église catholique romaine à Genève</li>
                            <li><strong>Protestant:</strong> Église protestante de Genève</li>
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
