"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export const navigation = [
  ["/", "Home"],
  ["/merchants", "Merchants"],
  ["/developers", "Developers"],
  ["/security", "Security"],
  ["/contact", "Contact"],
] as const;
export function Brand() {
  return (
    <>
      <span className="brand-symbol" aria-hidden="true">
        <span />
      </span>
      <span>orbit</span>
    </>
  );
}
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link
          href="/"
          className="brand"
          aria-label="Orbit home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {navigation.map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={pathname === url ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/merchants#integration" className="header-link">
          Explore integration <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
