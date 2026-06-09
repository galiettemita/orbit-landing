import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brevio — your inbox, only the important parts",
  description:
    "Brevio is an executive assistant in beta that watches your Gmail and tells you only what's important. A product of Orbit AI Labs.",
  keywords: ["Brevio", "Gmail assistant", "email assistant", "iMessage alerts", "inbox triage", "Orbit AI Labs"],
  openGraph: {
    title: "Brevio — your inbox, only the important parts",
    description:
      "Brevio is an executive assistant in beta that watches your Gmail and tells you only what's important.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brevio — your inbox, only the important parts",
    description:
      "Brevio is an executive assistant in beta that watches your Gmail and tells you only what's important.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
