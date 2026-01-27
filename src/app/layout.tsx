import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
