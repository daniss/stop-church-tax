'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { CheckCircle, Download, FileText, Mail, Printer, MapPin, AlertCircle } from 'lucide-react';

interface RecipientInfo {
    name: string;
    address: string;
    postal: string;
    city: string;
}

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [recipient, setRecipient] = useState<RecipientInfo | null>(null);

    // Fetch recipient info from session metadata
    useEffect(() => {
        if (sessionId) {
            fetch(`/api/order-info?session_id=${sessionId}`)
                .then(res => res.json())
                .then(data => {
                    if (data.recipient) {
                        setRecipient(data.recipient);
                    }
                })
                .catch(() => {
                    // Silent fail - recipient display is optional
                });
        }
    }, [sessionId]);

    if (!sessionId) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <p className="text-red-600">Invalid session. Please try again.</p>
                </div>
            </div>
        );
    }

    const downloadUrl = `/api/download?session_id=${sessionId}`;
    // Display order reference (first 8 chars of session ID)
    const orderRef = sessionId.substring(sessionId.indexOf('_') + 1, sessionId.indexOf('_') + 9).toUpperCase();

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-2xl mx-auto px-4 py-16">
                {/* Success Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Payment Successful!
                    </h1>
                    <p className="text-lg text-gray-600">
                        Your church resignation letter is ready for download.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Order Reference: <span className="font-mono font-medium text-gray-600">{orderRef}</span>
                    </p>
                </div>

                {/* Download Button */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <a
                        href={downloadUrl}
                        className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
                    >
                        <Download className="w-5 h-5" />
                        Download Your Letter (PDF)
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-3">
                        Save this PDF to your computer. This download link expires in 30 days.
                    </p>
                </div>

                {/* Recipient Address Preview */}
                {recipient && (
                    <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                        <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            Your letter will be sent to:
                        </h3>
                        <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded-lg border">
                            <p className="font-medium">{recipient.name}</p>
                            <p>{recipient.address}</p>
                            <p>{recipient.postal} {recipient.city}</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            Please verify this address is correct before mailing.
                        </p>
                    </div>
                )}

                {/* Next Steps */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-600" />
                        What to do next
                    </h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <Printer className="w-4 h-4" /> Print the letter
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Print on standard A4 paper. Black and white is fine.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Sign the letter by hand
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Your handwritten signature is required for it to be valid.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> Send via Registered Mail
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Go to your local Post office and send as{' '}
                                    <strong>Einschreiben</strong> (registered mail).
                                    Keep the receipt as proof of delivery.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                4
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">
                                    Wait for confirmation
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    You should receive a written confirmation after the church processes
                                    your resignation (typically a few weeks). Your membership ends after
                                    processing, often from the date of receipt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Notes */}
                <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                    <h3 className="font-semibold text-amber-800 mb-2">
                        💡 Good to know
                    </h3>
                    <ul className="text-amber-700 text-sm space-y-2">
                        <li>
                            <strong>Effective date:</strong> In some cantons, the effective date may depend
                            on when you submit. Keep your registered mail receipt as proof.
                        </li>
                        <li>
                            <strong>Quellensteuer:</strong> If you pay withholding tax (Quellensteuer),
                            you may also need to inform your employer&apos;s payroll department.
                        </li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                        This is a document automation service, not legal advice. Processing times
                        and effective dates vary by canton and individual circumstances.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center text-sm text-gray-500">
                    <p>Questions? Contact us at support@stop-church-tax.ch</p>
                </div>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                </div>
            }
        >
            <SuccessContent />
        </Suspense>
    );
}
