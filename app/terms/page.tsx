import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { loadLegalMarkdown } from "../lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Brevio",
  description:
    "The terms that govern your access to and use of Brevio, a product of Orbit AI Labs.",
};

export default function TermsOfService() {
  const content = loadLegalMarkdown("terms-of-service-v0.1.md");
  return <LegalPage content={content} />;
}
