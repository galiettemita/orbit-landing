import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-main">
        <div>
          <Link href="/" className="brand" aria-label="Orbit home">
            <span className="brand-symbol" aria-hidden="true">
              <span />
            </span>
            orbit
          </Link>
          <p>
            Merchant knowledge.
            <br />
            Agent understanding.
          </p>
        </div>
        <div className="footer-statement">
          A new conversation
          <br />
          <span>for commerce.</span>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/merchants">Merchants</Link>
          <Link href="/developers">Developers</Link>
          <Link href="/security">Security</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Orbit AI Labs · A brand and project</span>
        <span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <span className="status-inline">
            <span /> In development
          </span>
        </span>
      </div>
    </footer>
  );
}
