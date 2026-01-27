import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swiss Shield — Stop Paying Church Tax | Kirchenaustritt Made Easy",
  description:
    "Generate your church resignation letter in 2 minutes. We find the correct parish address and create a legally valid letter. Save CHF 800-2,000 per year.",
  keywords: [
    "Kirchenaustritt",
    "church tax Switzerland",
    "Kirchensteuer",
    "leave church Switzerland",
    "Swiss expat",
    "stop church tax",
  ],
  openGraph: {
    title: "Swiss Shield — Stop Paying Church Tax",
    description:
      "Generate your church resignation letter in 2 minutes. Save CHF 800-2,000 per year.",
    type: "website",
    locale: "en_CH",
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
