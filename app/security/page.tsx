import type { Metadata } from "next";
import Link from "next/link";
import {
  PageIntro,
  Section,
  Arrow,
  StatusNote,
} from "../components/Primitives";
export const metadata: Metadata = {
  title: "Security",
  description:
    "Orbit security principles, authorization boundaries and development evidence.",
};
export default function Security() {
  return (
    <>
      <PageIntro
        eyebrow="SECURITY & TRUST"
        title={
          <>
            Control stays at
            <br />
            <em>the right boundary.</em>
          </>
        }
      >
        <p>
          Product sources and agent messages are untrusted data. Deterministic
          services enforce identity, permissions and purchase rules before
          actions can occur.
        </p>
      </PageIntro>
      <Section className="first-section">
        <StatusNote>
          <strong>Evidence level: development implementation.</strong>
          <p>
            The safeguards described here have local automated coverage. No
            external security audit, compliance certification or production
            guarantee is claimed.
          </p>
        </StatusNote>
      </Section>
      <Section className="security-grid">
        {[
          [
            "◎",
            "Isolated merchant data",
            "Merchant-scoped storage, database row-level controls and ownership checks protect private records. Shopper and agent-installation identities remain distinct.",
          ],
          [
            "↶",
            "Revocable permissions",
            "Access depends on current delegation and consent. Revoked grants must stop new effects; an old session handle cannot restore authority.",
          ],
          [
            "◇",
            "Explicit buyer authorization",
            "Saved preferences, model output and developer keys cannot authorize purchases. Supported effects require the appropriate current approval and permissions.",
          ],
          [
            "⌁",
            "Grounded, auditable decisions",
            "Product data cannot change policy or grant access. Structured validation and durable operation records separate a proposed action from its observed result.",
          ],
        ].map(([icon, t, p]) => (
          <article key={t}>
            <span className="security-icon" aria-hidden="true">
              {icon}
            </span>
            <h2>{t}</h2>
            <p>{p}</p>
          </article>
        ))}
      </Section>
      <Section className="split">
        <div>
          <p className="eyebrow">THIS INFORMATION WEBSITE</p>
          <h2>
            Designed to explain.
            <br />
            <em>Limited by purpose.</em>
          </h2>
        </div>
        <div>
          <p>
            This website has no Orbit accounts, catalog uploads, contact form,
            advertising trackers or Orbit-operated analytics. It does not
            connect to the commerce backend or process payments.
          </p>
          <p>
            Vercel hosts the website. The review deployment uses Vercel
            Authentication; production publication requires a separate approval.
          </p>
          <h3>Reporting a concern</h3>
          <p>
            A monitored security contact must be confirmed before public launch.
            Please avoid sharing secrets or private customer information through
            public issues.
          </p>
          <Link href="/contact" className="text-link">
            Contact status <Arrow />
          </Link>
        </div>
      </Section>
    </>
  );
}
