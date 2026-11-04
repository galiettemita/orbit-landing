import Link from "next/link";
import Orbital from "./components/Orbital";
import AgentFlow from "./components/AgentFlow";
import ProductDemo from "./components/ProductDemo";
import { Arrow, Section, Closing } from "./components/Primitives";
export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            COMMERCE, IN A NEW ORBIT
          </p>
          <h1>
            The intelligence
            <br />
            between products
            <br />
            <em>and personal agents.</em>
          </h1>
          <p className="lead">
            Your next customer’s first conversation may be with an AI. Orbit
            helps personal buying agents discover, understand and recommend
            products from participating merchants.
          </p>
          <div className="actions">
            <Link href="/merchants" className="button">
              For merchants <Arrow />
            </Link>
            <Link href="/developers" className="text-link">
              For developers <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="hero-footnote">
            <span /> Seller-side AI, in development.
            <br />
            People stay with their personal agents.
          </p>
        </div>
        <Orbital />
        <div className="hero-index" aria-hidden="true">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </section>
      <Section className="flow-section">
        <div className="section-kicker">
          <p className="eyebrow">THE AGENT-TO-AGENT MODEL</p>
          <p>
            A knowledgeable representative.
            <br />A more useful connection.
          </p>
        </div>
        <AgentFlow />
      </Section>
      <Section className="intelligence split">
        <div>
          <p className="eyebrow">FROM DATA TO UNDERSTANDING</p>
          <h2>
            A catalog lists
            <br />
            what exists.
            <br />
            <em>
              Orbit explains
              <br />
              what fits.
            </em>
          </h2>
          <p>
            Product knowledge becomes more valuable when another agent can
            reason about it.
          </p>
          <Link href="/merchants" className="text-link">
            Explore merchant integration <Arrow />
          </Link>
        </div>
        <div className="feature-list">
          {[
            [
              "01",
              "Understand the intent",
              "Keep the useful detail: budget, size, features, compatibility requirements and preferences.",
            ],
            [
              "02",
              "Ask a question that matters",
              "Clarify when the answer changes which products are suitable. Keep the conversation moving.",
            ],
            [
              "03",
              "Explain the tradeoffs",
              "Return structured recommendations, grounded explanations and visible uncertainty.",
            ],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="feature-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </Section>
      <Section className="demo-section" id="demonstration">
        <div className="demo-heading">
          <p className="eyebrow">A CONVERSATION, NOT JUST A QUERY</p>
          <h2>
            Better questions.
            <br />
            <em>Better product decisions.</em>
          </h2>
          <p>
            See how a personal buying agent and a seller-side specialist can
            turn a broad request into a useful recommendation.
          </p>
          <div className="demo-caption">
            <span>TRY THE TWO USE CASES</span>
            <span aria-hidden="true">↘</span>
          </div>
        </div>
        <ProductDemo />
      </Section>
      <Section className="audience-section">
        <div className="section-kicker">
          <div>
            <p className="eyebrow">BUILT AROUND THE CONNECTION</p>
            <h2>
              One conversation.
              <br />
              <em>Two sides of commerce.</em>
            </h2>
          </div>
          <p>
            Orbit represents participating sellers.
            <br />
            Personal agents represent their users.
          </p>
        </div>
        <div className="audience-grid">
          <Link href="/merchants" className="audience-card">
            <span className="card-glyph" aria-hidden="true">
              ▤
            </span>
            <small>FOR MERCHANTS</small>
            <h3>
              Make your product
              <br />
              knowledge work harder.
            </h3>
            <p>
              Prepare authorized inventory for discovery, comparison and useful
              conversations with buying agents.
            </p>
            <span className="card-link">
              Meet Orbit for merchants <Arrow />
            </span>
          </Link>
          <Link href="/developers" className="audience-card">
            <span className="card-glyph" aria-hidden="true">
              ⌘
            </span>
            <small>FOR DEVELOPERS & PARTNERS</small>
            <h3>
              Build on clear
              <br />
              integration boundaries.
            </h3>
            <p>
              Explore structured responses, the MCP interface and the separation
              of host, merchant and payment capabilities.
            </p>
            <span className="card-link">
              Explore the architecture <Arrow />
            </span>
          </Link>
        </div>
      </Section>
      <Section className="trust-section split">
        <div>
          <p className="eyebrow">AMBITIOUS. ACCOUNTABLE.</p>
          <h2>
            Built for possibility.
            <br />
            <em>Grounded in evidence.</em>
          </h2>
        </div>
        <div>
          <p>
            Orbit’s development implementation includes catalog-grounded
            conversations, structured recommendations and tested permission
            boundaries.
          </p>
          <p>
            Public personal-agent integrations and live commerce remain subject
            to host approval, merchant authorization and verified operating
            arrangements. No partner admission or live purchasing is claimed.
          </p>
          <Link href="/security" className="text-link">
            Our security principles <Arrow />
          </Link>
          <span className="availability">
            <span className="status-dot" /> In development · Not a live shopping
            service
          </span>
        </div>
      </Section>
      <Closing />
    </>
  );
}
