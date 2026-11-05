import type { Metadata, Viewport } from "next";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import Motion from "./components/Motion";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://testing-orbit.com"),
  title: {
    default: "Orbit — Intelligence for agent-led commerce",
    template: "%s | Orbit",
  },
  description:
    "Orbit is a seller-side AI agent helping personal buying agents understand, compare and recommend products from participating merchants.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Orbit — Intelligence for agent-led commerce",
    description: "Merchant knowledge. Agent understanding.",
    type: "website",
    images: ["/orbit-social.svg"],
  },
  icons: { icon: "/orbit-mark.svg" },
};
export const viewport: Viewport = { themeColor: "#080911" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
