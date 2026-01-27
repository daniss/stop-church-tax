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
  BadgeSwissFranc,
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
              <BadgeSwissFranc className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-sm font-medium">
                Attention: Do you have Code "A0Y" on your payslip?
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              Expats in Zurich: <br className="hidden sm:block" />
              Stop Paying the Hidden{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                'Church Tax'
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Check your payslip. If you see code <strong>A0Y</strong>, you are paying church tax.
              Use our tool to switch to <strong>A0N</strong> and save CHF 800–2,000/year.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Legally valid template</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Bonus: HR Notification Letter</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Standard German Format</span>
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
                  Switch from A0Y to A0N
                </h2>
                <p className="text-sm text-gray-500">
                  We'll find the correct church office for you
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Canton & Confession Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Canton
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
                    Confession
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
                  ZIP Code (PLZ / NPA)
                </label>
                <input
                  type="text"
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  placeholder="e.g. 8001"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-gray-900"
                  required
                />
              </div>

              {/* Address Preview */}
              {matchedAddress?.found && matchedAddress.address && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Letter will be sent to:
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        {matchedAddress.address.recipient_name}
                        <br />
                        {matchedAddress.address.addr1}
                        <br />
                        {matchedAddress.address.postal}{' '}
                        {matchedAddress.address.city}
                      </p>
                      {matchedAddress.fallbackMessage && (
                        <p className="text-xs text-green-600 mt-2 italic">
                          {matchedAddress.fallbackMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <hr className="border-gray-100" />

              {/* Personal Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (as registered)
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
                  Date of Birth
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
                  Street Address
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
                  Apartment / Floor <span className="text-gray-400 font-normal">(optional)</span>
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
                  ZIP + City
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
                  Email (for receipt)
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
                    Generate Letter — CHF 29
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500">
                Secure payment via Stripe. You'll receive your PDF
                immediately.
              </p>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">HR Letter</h3>
              <p className="text-slate-400 text-sm mt-1">Includes A0Y -&gt; A0N request</p>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">Correct Address</h3>
              <p className="text-slate-400 text-sm mt-1">
                We route to the right office
              </p>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium">2 Minutes</h3>
              <p className="text-slate-400 text-sm mt-1">Instant PDF download</p>
            </div>

          </div>
        </div>
      </main>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Check Payslip',
                desc: 'Look for Code \"A0Y\"',
              },
              { step: '2', title: 'Fill Form', desc: 'Enter your details' },
              {
                step: '3',
                title: 'Get 2 Letters',
                desc: 'Church Exit + HR Notification',
              },
              {
                step: '4',
                title: 'Send & Switch',
                desc: 'Mail letters, switch to A0N',
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
          <h2 className="text-3xl font-bold mb-4">The Math Is Simple</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">CHF 29</p>
              <p className="text-white/80 mt-2">One-time cost</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">CHF 1,000+</p>
              <p className="text-white/80 mt-2">Saved per year</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-4xl font-bold">3,448%</p>
              <p className="text-white/80 mt-2">Your ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is it legal to leave the church?',
                a: 'Yes. Freedom of religion is guaranteed by the Swiss constitution. You have the right to leave at any time.',
              },
              {
                q: 'How much will I save?',
                a: 'Church tax is typically 8-20% of your cantonal tax. For a CHF 100k salary in Zurich, that\'s roughly CHF 800-1,400 per year.',
              },
              {
                q: 'Do I need to send the letter by registered mail?',
                a: 'It\'s strongly recommended. It costs CHF 5.80 and gives you proof of delivery. The church cannot claim they never received it.',
              },
              {
                q: 'How long does the process take?',
                a: 'Generating the letter takes 2 minutes. The church typically confirms within 4-6 weeks. The tax exemption applies immediately upon receipt.',
              },
              {
                q: 'What if I picked the wrong confession?',
                a: 'Contact us at support@stop-church-tax.ch and we\'ll regenerate your letter at no additional cost.',
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
              <span className="text-white font-semibold">Swiss Shield</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </a>
              <a href="/refund" className="hover:text-white transition-colors">
                Refunds
              </a>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            © 2026 Swiss Shield. Document automation service. Not legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
