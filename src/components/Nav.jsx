import React, { useState } from "react";
import { profile, sections } from "../data.js";

export default function Nav({ active, scrollTo }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = (id) => {
    scrollTo(id);
    setNavOpen(false);
  };

  return (
    <>
      {/* Status bar */}
      <div className="status-bar">
        <div className="container status-bar-inner">
          <span className="mono muted small">PORTFOLIO / v1.0</span>
          <div className="status-flag">
            <span className="status-dot" />
            <span className="mono muted small">STATUS: OPEN TO WORK</span>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <div className="nav">
        <div className="container nav-inner">
          <span className="mono nav-name">{profile.shortName}</span>
          <nav className="nav-links">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={`mono nav-link ${active === s.id ? "nav-link-active" : ""}`}
              >
                {s.num} {s.label}
              </button>
            ))}
          </nav>
          <button className="mono nav-toggle" onClick={() => setNavOpen((v) => !v)}>
            {navOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
        {navOpen && (
          <div className="nav-mobile">
            {sections.map((s) => (
              <button key={s.id} onClick={() => handleClick(s.id)} className="mono nav-mobile-link">
                {s.num} {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
