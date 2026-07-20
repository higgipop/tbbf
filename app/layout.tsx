import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
