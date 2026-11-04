"use client";
import { useState } from "react";
export default function ProductDemo() {
  const [mode, setMode] = useState<"study" | "engineering">("study");
  const engineering = mode === "engineering";
  return (
    <div className="demo-panel">
      <div className="demo-topline">
        <span className="status-dot" />
        <strong>Illustrative demonstration</strong>
        <span>FICTIONAL INVENTORY</span>
      </div>
      <div className="demo-message">
        <span className="speaker personal" aria-hidden="true">
          P
        </span>
        <div>
          <small>PERSONAL BUYING AGENT</small>
          <p>
            My user needs a lightweight laptop for college, under $1,000, with
            excellent battery life.
          </p>
        </div>
      </div>
      <div className="demo-message">
        <span className="speaker" aria-hidden="true">
          O
        </span>
        <div>
          <small>ORBIT / SELLER-SIDE AGENT</small>
          <p>
            Will it be used for everyday study, or demanding engineering and
            design software?
          </p>
          <fieldset className="demo-options">
            <legend>Explore the example use case</legend>
            <button
              type="button"
              aria-pressed={!engineering}
              onClick={() => setMode("study")}
            >
              Everyday study <span aria-hidden="true">↗</span>
            </button>
            <button
              type="button"
              aria-pressed={engineering}
              onClick={() => setMode("engineering")}
            >
              Engineering & design <span aria-hidden="true">↗</span>
            </button>
          </fieldset>
        </div>
      </div>
      <div className="demo-live" aria-live="polite" aria-atomic="true">
        <div className="demo-response" key={mode}>
          <div className="demo-message">
            <span className="speaker personal" aria-hidden="true">
              P
            </span>
            <div>
              <small>PERSONAL BUYING AGENT</small>
              <p>
                {engineering
                  ? "Engineering and design — software compatibility matters."
                  : "Everyday study: browser research, documents and video calls."}
              </p>
            </div>
          </div>
          <div className="demo-message">
            <span className="speaker" aria-hidden="true">
              O
            </span>
            <div>
              <small>ORBIT / EXPLAINED RECOMMENDATION</small>
              <p>
                {engineering
                  ? "Which applications and versions does the course require? A lightweight laptop is only suitable if its operating system and hardware meet those requirements."
                  : "In this fictional catalog, Aero 13 is a suitable candidate: 1.2 kg, 16 GB memory and a listed price of $899. Its stated battery figure is up to 12 hours; real use would vary."}
              </p>
              <div
                className={`example-product ${engineering ? "needs-context" : ""}`}
              >
                <div className="laptop-art" aria-hidden="true">
                  <div />
                  <span />
                </div>
                <div>
                  <span className="micro-label">
                    {engineering
                      ? "COMPATIBILITY UNKNOWN"
                      : "FICTIONAL PRODUCT · USD"}
                  </span>
                  <h3>
                    {engineering ? "One useful question first." : "Aero 13"}
                  </h3>
                  <p>
                    {engineering
                      ? "Required software → verified specifications → suitable options"
                      : "Portable · Everyday study · $899"}
                  </p>
                  <span className="product-status">
                    {engineering
                      ? "More information needed"
                      : "Matches the stated use case"}
                  </span>
                </div>
              </div>
              <p className="demo-disclaimer">
                Products, specifications and prices are fictional. Stock, final
                price, compatibility and delivery require current merchant
                verification. No request is sent and no purchase occurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
