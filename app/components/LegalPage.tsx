import { PageIntro, Section, StatusNote } from "./Primitives";
import Markdown from "./Markdown";
import { readReviewPolicy } from "../lib/review-policy.mjs";
export default function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const content = readReviewPolicy(kind);
  const title = kind === "privacy" ? "Privacy" : "Terms of use";
  return (
    <>
      <PageIntro
        eyebrow={content ? "PRIVATE POLICY REVIEW" : "POLICY STATUS"}
        title={
          <>
            {title}
            <br />
            <em>{content ? "Draft for review." : "Approval pending."}</em>
          </>
        }
      >
        <p>
          {content
            ? "Draft for owner review. This text is not effective and must not be presented as an approved public policy."
            : "The legal operator, monitored contact and final policy text must be confirmed before this website is publicly launched. No policy is effective on this review version."}
        </p>
      </PageIntro>
      <Section className="first-section legal-section">
        <StatusNote>
          <strong>
            {content
              ? "Private review draft · Not effective"
              : "Owner approval required"}
          </strong>
          <p>
            No legal entity, effective date or approved contractual arrangement
            is inferred from the Orbit AI Labs brand name.
          </p>
        </StatusNote>
        {content ? (
          <article className="legal-copy">
            <Markdown>{content}</Markdown>
          </article>
        ) : (
          <p className="policy-pending">
            The approved{" "}
            {kind === "privacy" ? "Privacy Policy" : "Terms of Use"} will be
            made available here after review.
          </p>
        )}
      </Section>
    </>
  );
}
