export default function Orbital() {
  return (
    <div className="orbital-stage" aria-hidden="true">
      <div className="orbital-aura" />
      <div className="orbital-grid" />
      <div className="orbital-sculpture">
        <div className="ring-band band-one" />
        <div className="ring-band band-two" />
        <div className="ring-band band-three" />
        <div className="ring-band band-four" />
        <div className="satellite-track track-one">
          <span />
        </div>
        <div className="satellite-track track-two">
          <span />
        </div>
        <div className="satellite-track track-three">
          <span />
        </div>
        <div className="orbit-core">
          <div className="core-shimmer" />
          <span className="core-logo">◌</span>
          <strong>orbit</strong>
          <small>SELLER INTELLIGENCE</small>
        </div>
      </div>
      <div className="orbit-tag tag-one">
        <span /> Product knowledge
      </div>
      <div className="orbit-tag tag-two">
        <span /> Personal agents
      </div>
      <div className="orbit-tag tag-three">
        <span /> Merchant inventory
      </div>
      <div className="coordinate c-one">O / 001</div>
      <div className="coordinate c-two">INTELLIGENCE IN ORBIT</div>
    </div>
  );
}
