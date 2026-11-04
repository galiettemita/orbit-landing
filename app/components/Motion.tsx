"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { motionAllowed } from "../lib/motion.mjs";

function subscribeReducedMotion(notify: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
}
const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerReducedMotion = () => true;

export default function Motion() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.enhanced = "true";
    const sync = () => {
      root.dataset.motion = motionAllowed({
        reduced,
        paused,
        hidden: document.hidden,
      })
        ? "running"
        : "paused";
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;
    if (!reduced && !paused && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.reveal = "visible";
              observer?.unobserve(entry.target);
            }
        },
        { threshold: 0.08 },
      );
      for (const section of sections) {
        section.dataset.reveal =
          section.getBoundingClientRect().top > window.innerHeight - 30
            ? "pending"
            : "visible";
        observer.observe(section);
      }
    } else
      sections.forEach((section) => {
        section.dataset.reveal = "visible";
      });

    const stage = document.querySelector<HTMLElement>(".orbital-stage");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (reduced || paused || event.pointerType !== "mouse" || !stage) return;
      cancelAnimationFrame(frame);
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 15;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 15;
      frame = requestAnimationFrame(() => {
        stage.style.setProperty("--pointer-x", `${x}px`);
        stage.style.setProperty("--pointer-y", `${y}px`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      stage?.style.setProperty("--pointer-x", "0px");
      stage?.style.setProperty("--pointer-y", "0px");
    };
    stage?.addEventListener("pointermove", move, { passive: true });
    stage?.addEventListener("pointerleave", reset);
    if (reduced || paused) reset();
    return () => {
      document.removeEventListener("visibilitychange", sync);
      observer?.disconnect();
      sections.forEach((section) => {
        section.dataset.reveal = "visible";
      });
      stage?.removeEventListener("pointermove", move);
      stage?.removeEventListener("pointerleave", reset);
      reset();
    };
  }, [pathname, paused, reduced]);

  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={paused || reduced}
      disabled={reduced}
      onClick={() => setPaused((value) => !value)}
      aria-label={
        reduced
          ? "Decorative motion disabled by system preference"
          : paused
            ? "Resume decorative motion"
            : "Pause decorative motion"
      }
    >
      <span aria-hidden="true">{paused || reduced ? "▷" : "Ⅱ"}</span>
      {reduced ? "Reduced motion" : paused ? "Resume motion" : "Pause motion"}
    </button>
  );
}
