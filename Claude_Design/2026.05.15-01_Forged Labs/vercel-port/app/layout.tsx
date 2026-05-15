import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

// Type pairing is locked per CLAUDE.md — Inter (sans) for everything,
// Fraunces (serif, italic) for accent words only.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forged Labs — A software studio for the long game",
  description:
    "Forged Labs is a software studio in League City, Texas. We make software for two kinds of work — the patient work of a life, and the careful work of industry.",
  metadataBase: new URL("https://forgedlabs.io"),
  openGraph: {
    type: "website",
    url: "https://forgedlabs.io/",
    siteName: "Forged Labs",
    title: "Forged Labs — A software studio for the long game",
    description:
      "Software for two kinds of work — the patient work of a life, and the careful work of industry.",
  },
  themeColor: "#0A0B10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
