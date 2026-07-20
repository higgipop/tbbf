import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Tampa Bay Business Forum | Invite-Only Professional Referral Network",
    template: "%s | Tampa Bay Business Forum",
  },
  description:
    "TBBF is Tampa Bay's invite-only professional referral network. 24 vetted members, one per industry, built on trust and consistent deal flow.",
  metadataBase: new URL("https://tampabusinessforum.com"),
  openGraph: {
    siteName: "Tampa Bay Business Forum",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72SJHN9RZP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-72SJHN9RZP');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
