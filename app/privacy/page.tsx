import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { loadLegalMarkdown } from "../lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Brevio",
  description:
    "How Brevio, a product of Orbit AI Labs, collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  const content = loadLegalMarkdown("privacy-policy-v0.1.md");
  return <LegalPage content={content} />;
}
