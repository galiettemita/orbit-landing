import type { Metadata } from "next";
import Link from "next/link";
import {
  PageIntro,
  Section,
  Arrow,
  StatusNote,
} from "../components/Primitives";
export const metadata: Metadata = {
  title: "For developers",
  description:
    "Orbit MCP interface, structured seller intelligence and integration boundaries.",
};
const excerpt = JSON.stringify(
  {
    schemaVersion: "1.0",
    state: "shortlist",
    payload: {
      search: {
        scopeRef: "example-scope",
        snapshotRef: "example-snapshot",
        coverage: "partial",
        outcome: "incomplete",
      },
    },
  },
  null,
  2,
);
export default function Developers() {
  return (
    <>
      <PageIntro
        eyebrow="FOR DEVELOPERS & INTEGRATION PARTNERS"
        title={
          <>
            A shared language
            <br />
            <em>for product intent.</em>
          </>
        }
      >
        <p>
          Structured product knowledge. Explicit permissions. Clear uncertainty.
          Orbit connects host and merchant adapters around shared seller
          intelligence and commerce services.
        </p>
      </PageIntro>
      <Section className="editorial">
        <p className="eyebrow">ARCHITECTURE</p>
        <div>
          <h2>
            Different integrations.
            <br />
            <em>Consistent boundaries.</em>
          </h2>
          <p>
            The development seller interface uses MCP over HTTP. Its{" "}
            <code>shopping.turn</code> tool returns structured shopping results
            and persists conversation state. It is a state-changing operation,
            not a read-only search.
          </p>
          <p>
            Authentication, available capabilities and sensitive-action approval
            depend on the host and current grants. Implementing MCP does not
            establish access to a personal-agent platform.
          </p>
        </div>
      </Section>
      <Section className="split">
        <div>
          <p className="eyebrow">STRUCTURED RESPONSES</p>
          <h2>
            Make uncertainty
            <br />
            <em>machine-readable.</em>
          </h2>
          <p>
            A shortlist should help another agent understand what was checked
            and what remains unknown. Partial catalog coverage cannot honestly
            establish an exhaustive no-match result.
          </p>
          <p className="fine-print">
            Verified field names from the development shopping-result contract.
            This is an illustrative excerpt, not a complete response, live
            catalog or public API endpoint.
          </p>
        </div>
        <div className="code-panel">
          <div className="code-heading">
            <span>shopping-result.excerpt.json</span>
            <span>ILLUSTRATIVE EXCERPT</span>
          </div>
          <pre tabIndex={0} aria-label="Illustrative shopping result JSON">
            <code>{excerpt}</code>
          </pre>
          <div className="code-footer">
            <span className="status-dot" /> Development contract · Public
            endpoint access pending
          </div>
        </div>
      </Section>
      <Section>
        <p className="eyebrow">INTEGRATION LIFECYCLE</p>
        <div className="steps-grid">
          {[
            [
              "01",
              "Establish access",
              "Agree on host support, merchant authorization, identity and capability scopes before exchanging private data.",
            ],
            [
              "02",
              "Validate the conversation",
              "Test clarification, structured discovery, comparison, session ownership, revocation and honest failure states.",
            ],
            [
              "03",
              "Prove each enabled effect",
              "Order and payment capabilities need their own permissions, supported approvals and observed external evidence.",
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
      <Section className="split">
        <div>
          <p className="eyebrow">ACCESS PRINCIPLES</p>
          <h2>
            Useful tools.
            <br />
            <em>Bounded authority.</em>
          </h2>
        </div>
        <div>
          <ul className="checklist">
            <li>
              Validate current agent identity and delegation on each request.
            </li>
            <li>
              Bind private session handles to the verified shopper and agent
              installation.
            </li>
            <li>
              Keep guest catalog discovery separate from private account access.
            </li>
            <li>
              Return explicit denial, timeout and incomplete-coverage outcomes.
            </li>
            <li>Never treat a shopping response as payment approval.</li>
          </ul>
        </div>
      </Section>
      <Section>
        <StatusNote>
          <strong>Current availability</strong>
          <p>
            Local automated coverage and sandbox evidence establish development
            behavior. Public host installation, partner admission and live
            purchasing remain separate gates. No approved Muse, Dot, Instinct or
            Stripe agentic-commerce partnership is claimed.
          </p>
          <Link href="/contact" className="text-link">
            Integration contact status <Arrow />
          </Link>
        </StatusNote>
      </Section>
    </>
  );
}
