import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
export const metadata: Metadata = {
  title: "Terms — approval pending",
  robots: { index: false, follow: false },
};
export default function Terms() {
  return <LegalPage kind="terms" />;
}
