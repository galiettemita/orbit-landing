import type { Metadata } from "next";
import { PageIntro, Section, StatusNote } from "../components/Primitives";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Orbit merchant, developer, platform-review and business inquiry availability.",
};
export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title={
          <>
            A useful connection
            <br />
            <em>starts with context.</em>
          </>
        }
      >
        <p>
          For merchants, commerce partners, agent developers and platform
          reviewers exploring the next generation of product discovery.
        </p>
      </PageIntro>
      <Section className="first-section">
        <StatusNote>
          <strong>Contact route awaiting confirmation</strong>
          <p>
            A monitored public address has not yet been confirmed for this Orbit
            website. This page currently accepts no submissions. The verified
            route will appear here before public launch.
          </p>
        </StatusNote>
      </Section>
      <Section>
        <div className="steps-grid">
          {[
            [
              "MERCHANTS",
              "Bring the catalog context",
              "Product categories, data formats, source rights, refresh frequency and the scope of a potential authorized pilot.",
            ],
            [
              "DEVELOPERS & PARTNERS",
              "Describe the connection",
              "The agent host, transport, authentication model, supported capabilities and proposed integration lifecycle.",
            ],
            [
              "PLATFORM REVIEWERS",
              "Define the evidence",
              "The capability under review, acceptance criteria and any permission or operating requirements.",
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
      <Section className="editorial">
        <p className="eyebrow">PROJECT IDENTITY</p>
        <div>
          <h2>Orbit AI Labs</h2>
          <p>
            Orbit AI Labs is the brand and project name. A registered company
            and legal operating entity have not been confirmed for this website.
          </p>
          <p>
            General business, privacy and security inquiries will use
            owner-confirmed monitored routes. No response-time promise or
            immediate onboarding availability is implied.
          </p>
        </div>
      </Section>
    </>
  );
}
