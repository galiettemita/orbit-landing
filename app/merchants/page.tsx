import type { Metadata } from "next";
import Link from "next/link";
import {
  PageIntro,
  Section,
  Closing,
  Arrow,
  StatusNote,
} from "../components/Primitives";
export const metadata: Metadata = {
  title: "For merchants",
  description:
    "Prepare authorized merchant product knowledge for personal AI buying agents.",
};
export default function Merchants() {
  return (
    <>
      <PageIntro
        eyebrow="FOR MERCHANTS"
        title={
          <>
            Your inventory.
            <br />
            <em>Understood by agents.</em>
          </>
        }
      >
        <p>
          Bring the depth of your product knowledge to a new kind of shopping
          conversation. Orbit is being built to help buying agents understand
          the details that make a product suitable.
        </p>
      </PageIntro>
      <Section className="editorial">
        <p className="eyebrow">THE MERCHANT ROLE</p>
        <div>
          <h2>
            Your products are the source.
            <br />
            <em>Orbit adds the conversation.</em>
          </h2>
          <p>
            The buying agent brings its user’s intent. Orbit represents
            participating sellers transparently, using authorized merchant
            information to explain relevant options. The person stays in their
            own assistant’s interface.
          </p>
        </div>
      </Section>
      <Section>
        <div className="steps-grid">
          {[
            [
              "01",
              "Authorize the source",
              "Define which catalog data Orbit may access. Product-data permission is separate from the right to create orders.",
            ],
            [
              "02",
              "Structure the knowledge",
              "Normalize product and variant information: features, identifiers, compatibility evidence, prices and source context.",
            ],
            [
              "03",
              "Explain suitable options",
              "Help buying agents compare eligible products. Keep missing attributes and uncertain availability visible.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span className="step-number">{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="split" id="integration">
        <div>
          <p className="eyebrow">INTEGRATION PREPARATION</p>
          <h2>
            Start with a<br />
            <em>bounded catalog.</em>
          </h2>
          <p>
            The development implementation includes structured-feed imports and
            selected document ingestion. Each source requires agreed rights,
            mapping, validation and refresh expectations.
          </p>
          <p>
            Current inventory observations do not automatically authorize a
            reservation, order or payment.
          </p>
        </div>
        <div className="detail-panel">
          <h3>A useful merchant pilot starts with</h3>
          <ul className="checklist">
            <li>An authorized catalog owner and data source</li>
            <li>Stable product and variant identifiers</li>
            <li>Clear price, currency and availability definitions</li>
            <li>Source-backed compatibility and feature details</li>
            <li>A process for missing or stale information</li>
            <li>Separate order, fulfillment and payment permissions</li>
          </ul>
          <Link href="/contact" className="text-link">
            Contact availability <Arrow />
          </Link>
        </div>
      </Section>
      <Section>
        <StatusNote>
          <strong>Development capabilities, not a sales promise.</strong>
          <p>
            Broad public onboarding and live commerce are not open. Merchant
            adapters, host admission and operating arrangements require
            verification. Integration does not guarantee recommendation
            placement, traffic or sales.
          </p>
        </StatusNote>
      </Section>
      <Closing />
    </>
  );
}
