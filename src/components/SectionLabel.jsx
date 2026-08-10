import React from "react";

export default function SectionLabel({ num, label }) {
  return (
    <div className="section-label">
      <span className="mono section-num">{num}</span>
      <span className="mono section-label-text">{label}</span>
      <div className="section-rule" />
    </div>
  );
}
