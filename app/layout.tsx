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
  title: "Orbit - Your AI Assistant on WhatsApp",
  description: "Let Orbit handle your shopping, travel, and daily tasks through WhatsApp. Book flights, order food, compare prices, and more - all via chat.",
  keywords: ["AI assistant", "WhatsApp", "travel booking", "shopping assistant", "personal assistant", "AI chat"],
  openGraph: {
    title: "Orbit - Your AI Assistant on WhatsApp",
    description: "Let Orbit handle your shopping, travel, and daily tasks through WhatsApp.",
    type: "website",
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
