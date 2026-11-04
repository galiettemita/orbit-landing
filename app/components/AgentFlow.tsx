export default function AgentFlow() {
  return (
    <div
      className="agent-flow"
      aria-label="Personal buying agent to Orbit to participating merchant"
    >
      <article>
        <div className="flow-icon" aria-hidden="true">
          ⌘
        </div>
        <small>01 / UNDERSTAND THE PERSON</small>
        <h3>Personal buying agent</h3>
        <p>
          Brings its user’s needs, preferences
          <br className="desktop-break" /> and shopping intent.
        </p>
      </article>
      <div className="flow-connector" aria-hidden="true">
        <span />
        <i />
      </div>
      <article className="flow-center">
        <div className="flow-icon" aria-hidden="true">
          ◌
        </div>
        <small>02 / FIND THE RIGHT FIT</small>
        <h3>Orbit</h3>
        <p>
          Clarifies, compares and explains
          <br className="desktop-break" /> suitable product options.
        </p>
      </article>
      <div className="flow-connector" aria-hidden="true">
        <span />
        <i />
      </div>
      <article>
        <div className="flow-icon" aria-hidden="true">
          ▤
        </div>
        <small>03 / GROUND IN PRODUCT DATA</small>
        <h3>Participating merchant</h3>
        <p>
          Supplies authorized product
          <br className="desktop-break" /> information and availability.
        </p>
      </article>
    </div>
  );
}
