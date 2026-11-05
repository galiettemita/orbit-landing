import Link from "next/link";
import type { ReactNode } from "react";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">
        <span className="tiny-orbit" />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      <div className="lead">{children}</div>
      <span className="intro-orbit" aria-hidden="true" />
    </section>
  );
}
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`section wrap ${className}`}
      data-reveal="ready"
    >
      {children}
    </section>
  );
}
export function Closing() {
  return (
    <Section className="closing">
      <p className="eyebrow">Commerce moves forward</p>
      <h2>
        Your products.
        <br />
        Their personal agent.
        <br />
        <em>Connected by Orbit.</em>
      </h2>
      <Link className="button" href="/developers">
        Explore the architecture <Arrow />
      </Link>
      <div className="closing-light" aria-hidden="true" />
    </Section>
  );
}
export function StatusNote({ children }: { children: ReactNode }) {
  return (
    <div className="status-note">
      <span className="status-dot" />
      <div>{children}</div>
    </div>
  );
}
