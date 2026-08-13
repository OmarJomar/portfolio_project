import React from "react";
import { Mail, Download } from "lucide-react";
import { profile } from "../data.js";
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <header className="hero-banner" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero">
        <p className="mono eyebrow">{profile.name}</p>
        <h1 className="hero-title">{profile.role}</h1>
        <p className="hero-pitch">{profile.pitch}</p>
        <div className="hero-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={15} /> Get in touch
          </a>
          <a href={profile.resumeFile} download className="btn btn-secondary">
            <Download size={15} /> Download resume
          </a>
        </div>
      </div>
    </header>
  );
}
