import { PageIntro, Section } from "./Primitives";
import Markdown from "./Markdown";
import { readReviewPolicy } from "../lib/review-policy.mjs";
export default function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const content = readReviewPolicy(kind);
  const title = kind === "privacy" ? "Privacy" : "Terms of use";
  return (
    <>
      <PageIntro
        eyebrow="LEGAL"
        title={
          <>
            {title}
            {!content && <><br /><em>Publication pending.</em></>}
          </>
        }
      >
        <p>
          {content
            ? "Information about your use of the Orbit website."
            : "The approved policy will be available when this website is published."}
        </p>
      </PageIntro>
      <Section className="first-section legal-section">
        {content ? (
          <article className="legal-copy">
            <Markdown>{content}</Markdown>
          </article>
        ) : (
          <p className="policy-pending">
            The approved{" "}
            {kind === "privacy" ? "Privacy Policy" : "Terms of Use"} will be
            made available here at publication.
          </p>
        )}
      </Section>
    </>
  );
}
