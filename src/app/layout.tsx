import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schweizer Schild — Kirchensteuer sparen (A0Y) | Kirchenaustritt Schweiz",
  description:
    "Erstellen Sie Ihren offiziellen Kirchenaustritt in 2 Minuten. Wir finden die korrekte Kirchgemeinde-Adresse. Sparen Sie CHF 800-2'000 pro Jahr.",
  keywords: [
    "Kirchenaustritt",
    "Kirchensteuer Schweiz",
    "A0Y Code",
    "Lohnabrechnung",
    "Kirche austreten",
    "Kirchensteuer sparen",
  ],
  openGraph: {
    title: "Schweizer Schild — Stop Kirchensteuer (A0Y)",
    description:
      "Erstellen Sie Ihren Kirchenaustritt in 2 Minuten. Sparen Sie CHF 800-2'000 pro Jahr.",
    type: "website",
    locale: "de_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Conversion Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17910526707"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17910526707');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
