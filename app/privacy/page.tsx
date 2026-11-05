import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
export const metadata: Metadata = {
  title: "Privacy",
  robots: { index: false, follow: false },
};
export default function Privacy() {
  return <LegalPage kind="privacy" />;
}
