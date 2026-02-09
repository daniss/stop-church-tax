'use client';

import { useState, useEffect } from 'react';
import { findAddress, cantonNames, confessionNames } from '@/lib/address-data';
import { Canton, Confession, FormData } from '@/lib/types';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Clock,
  AlertTriangle,
  Loader2,
  AlertCircle,
  MapPin,
} from 'lucide-react';

const CANTONS: Canton[] = ['ZH', 'BS', 'BE', 'ZG'];
const CONFESSIONS: Confession[] = ['catholic', 'reformed'];

export default function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    canton: 'ZH',
    zip: '',
    confession: 'catholic',
    fullName: '',
    dateOfBirth: '',
    addressLine1: '',
    addressLine2: '',
    postalCity: '',
    email: '',
  });

  const [matchedAddress, setMatchedAddress] = useState<ReturnType<
    typeof findAddress
  > | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-update address preview when canton, zip, or confession changes
  useEffect(() => {
    if (formData.canton && formData.confession) {
      const result = findAddress(
        formData.canton,
        formData.zip,
        formData.confession
      );
      setMatchedAddress(result);
    }
  }, [formData.canton, formData.zip, formData.confession]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-red-500 text-sm font-bold uppercase tracking-wide">
                Achtung: Haben Sie Code "A0Y" auf der Lohnabrechnung?
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Kirchensteuer Sparen: <br className="hidden sm:block" />
              Stoppen Sie den{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                A0Y-Abzug
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Prüfen Sie Ihre Lohnabrechnung. Code <strong>A0Y</strong> bedeutet Kirchensteuer.
              Wechseln Sie jetzt zu <strong>A0N</strong> und sparen Sie CHF 800–2'000 pro Jahr.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Rechtssichere Vorlage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Inkl. Arbeitgeber-Brief</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Offizielles Schweizer Format</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Form Section */}
      <main className="relative z-10 -mt-8">
        <div className="max-w-2xl mx-auto px-4 pb-24">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-xl">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Wechsel von A0Y zu A0N
                </h2>
                <p className="text-sm text-gray-500">
                  Wir erstellen den korrekten Brief und finden die passende Adresse
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Canton & Confession Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kanton
                  </label>
                  <select
                    value={formData.canton}
                    onChange={(e) => setFormData({ ...formData, canton: e.target.value as Canton })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  >
                    {CANTONS.map((c) => (
                      <option key={c} value={c}>
                        {cantonNames[c]} ({c})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konfession
                  </label>
                  <select
                    value={formData.confession}
                    onChange={(e) => setFormData({ ...formData, confession: e.target.value as Confession })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  >
                    {CONFESSIONS.map((c) => (
                      <option key={c} value={c}>
                        {confessionNames[c]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PLZ (Postleitzahl)
                </label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="z.B. 8001"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              {/* Address Preview */}
              {!formData.zip ? (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-500">
                      Geben Sie Ihre PLZ ein, um die richtige Kirchengemeinde zu finden. Falls nicht gefunden, verwenden wir die kantonale Adresse.
                    </p>
                  </div>
                </div>
              ) : matchedAddress?.found && matchedAddress.address ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Brief wird gesendet an:
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        {matchedAddress.address.recipient_name}
                        <br />
                        {matchedAddress.address.addr1}
                        <br />
                        {matchedAddress.address.postal}{' '}
                        {matchedAddress.address.city}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <hr className="border-gray-100" />

              {/* Personal Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vor- und Nachname
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Max Mustermann"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Geburtsdatum
                </label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900 appearance-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Strasse & Hausnummer
                </label>
                <input
                  type="text"
                  value={formData.addressLine1}
                  onChange={(e) =>
                    setFormData({ ...formData, addressLine1: e.target.value })
                  }
                  placeholder="Bahnhofstrasse 1"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresszusatz <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.addressLine2 || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, addressLine2: e.target.value })
                  }
                  placeholder="Apt 4B, 2nd Floor"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PLZ & Ort
                </label>
                <input
                  type="text"
                  value={formData.postalCity}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCity: e.target.value })
                  }
                  placeholder="8001 Zürich"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail Adresse
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              {/* What You Get Preview */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="relative mb-4 group overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-white">
                  <img
                    src="/preview_letter.png"
                    alt="Sample Letter"
                    className="w-full h-auto blur-[1px] opacity-90 transition-all group-hover:blur-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-red-600/90 text-white px-4 py-1 text-sm font-bold rounded uppercase tracking-wider transform -rotate-12 shadow-lg backdrop-blur-sm">
                      Muster / Preview
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">Was Sie erhalten:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Kirchenaustritts-Brief (PDF, druckfertig)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Brief für Arbeitgeber (A0Y → A0N)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Adressiert an Ihre Kirchgemeinde</span>
                  </li>
                </ul>
              </div>

              {/* Guarantee */}
              <div className="text-center text-sm text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  Nicht zufrieden? Geld zurück innert 24h.
                </span>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Austritt erstellen — CHF 9.99
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-gray-500 space-y-1">
                <p>Sichere Zahlung via Stripe. PDF sofort verfügbar.</p>
                <p>Dokumente entsprechen dem offiziellen Schweizer Format.</p>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">Arbeitgeber-Brief</h3>
              <p className="text-slate-400 text-sm mt-1">Beantragt Änderung (A0Y -&gt; A0N)</p>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">Korrekte Adresse</h3>
              <p className="text-slate-400 text-sm mt-1">
                Automatische Zuweisung der Kirchgemeinde
              </p>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">2 Minuten</h3>
              <p className="text-slate-400 text-sm mt-1">Sofortiger PDF-Download</p>
            </div>

          </div>
        </div>
      </main>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            So funktioniert's
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Lohnabrechnung',
                desc: 'Suchen Sie nach Code \"A0Y\"',
              },
              { step: '2', title: 'Daten eingeben', desc: 'Füllen Sie das Formular aus' },
              {
                step: '3',
                title: '2 Briefe erhalten',
                desc: 'Kirchenaustritt + Info an Arbeitgeber',
              },
              {
                step: '4',
                title: 'Absenden & Sparen',
                desc: 'Briefe versenden, zu A0N wechseln',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Die Rechnung lohnt sich</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">CHF 9.99</p>
              <p className="text-white/80 mt-2">Einmalige Kosten</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">CHF 1'000+</p>
              <p className="text-white/80 mt-2">Gespart pro Jahr</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">100x</p>
              <p className="text-white/80 mt-2">Return on Investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufige Fragen (FAQ)
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Ist der Kirchenaustritt legal?',
                a: 'Ja. Die Religionsfreiheit ist in der Bundesverfassung verankert (Art. 15 BV). Sie haben das Recht, jederzeit auszutreten.',
              },
              {
                q: 'Wie viel spare ich?',
                a: 'Die Kirchensteuer beträgt je nach Gemeinde ca. 8-12% der einfachen Staatssteuer. Bei CHF 100\'000 Einkommen in Zürich sparen Sie ca. CHF 800–1\'400 pro Jahr.',
              },
              {
                q: 'Muss ich den Brief eingeschrieben senden?',
                a: 'Wir empfehlen den Versand per Einschreiben (CHF 5.80). So haben Sie einen rechtlichen Beweis für den Zugang der Kündigung.',
              },
              {
                q: 'Wie lange dauert es?',
                a: 'Die Erstellung dauert 2 Minuten. Die Bearbeitung durch die Kirchgemeinde dauert meist 4–6 Wochen. Der Austritt gilt jedoch ab Empfangsdatum.',
              },
              {
                q: 'Falsche Konfession gewählt?',
                a: 'Schreiben Sie uns an support@stop-church-tax.ch und wir erstellen den Brief kostenlos neu.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500" />
              <span className="text-white font-semibold">Schweizer Schild</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="/terms" className="hover:text-white transition-colors">
                AGB
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="/disclaimer" className="hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/refund" className="hover:text-white transition-colors">
                Rückerstattung
              </a>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            © 2026 Swiss Shield. Automatisierter Brief-Service. Keine Rechtsberatung.
          </p>
        </div>
      </footer>
    </div>
  );
}
