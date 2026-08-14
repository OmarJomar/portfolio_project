import React from "react";
import { Mail, Download } from "lucide-react";
import { profile } from "../data.js";
import heroBg from '../assets/hero-bg.jpg';
import heroProfilePic from '../assets/hero-profile.jpg';

export default function Hero() {
  return (
    <header className="hero-banner" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container hero">
        <img src={heroProfilePic} alt={profile.name} className="hero-profile-image" />
        <p className="hero-greeting">Hello, I am</p>
        <h2 className="mono eyebrow">{profile.name}</h2>
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
