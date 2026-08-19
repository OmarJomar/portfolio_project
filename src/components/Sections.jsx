import React from "react";
import { Mail, Phone, Github, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import {
  profile,
  summary,
  skillGroups,
  experience,
  internships,
  projects,
  education,
} from "../data.js";

export function Summary() {
  return (
    <section id="summary" className="section">
      <SectionLabel num="01" label="Summary" />
      <p className="summary-text">{summary}</p>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionLabel num="02" label="Skills" />
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="mono skills-group-title">{g.title}</h3>
              <div className="skill-list">
                {g.items.map((item) => (
                  <div key={item.name} className="skill-row">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-dots">
                      {"●".repeat(item.level)}
                      {"○".repeat(5 - item.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionLabel num="03" label="Experience" />
      <div className="exp-list">
        {experience.map((e) => (
          <div key={e.org} className="exp-row">
            <p className="mono muted small">{e.time}</p>
            <div>
              <h3 className="exp-role">{e.role}</h3>
              <p className="exp-org">{e.org}</p>
              <ul className="exp-points">
                {e.points.map((p, i) => (
                  <li key={i} className="exp-point">
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="intern-block">
          <p className="mono muted small intern-label">Internships</p>
          <div className="intern-list">
            {internships.map((it) => (
              <div key={it.org} className="exp-row">
                <p className="mono muted small">{it.time}</p>
                <div>
                  <h3 className="exp-role">
                    {it.role} — <span className="exp-org-inline">{it.org}</span>
                  </h3>
                  <p className="intern-description">{it.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
  <section id="projects" className="section">
    <SectionLabel num="04" label="Projects" />
    <div className="projects-grid">
      {projects.map((p) => (
        <div key={p.title} className="project-card">
          <div>
            <div className="project-head">
              <h3 className="project-title">{p.title}</h3>
              <ArrowUpRight size={16} className="muted" />
            </div>
            <p className="project-meta">
              {p.org} <span className="project-meta-dot">·</span> {p.time}
            </p>
            <p className="project-desc">{p.desc}</p>
          </div>
          <div className="tag-row project-tags">
            {p.tags.map((t) => (
              <span key={t} className="mono tag tag-small">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <SectionLabel num="05" label="Education" />
      <div className="edu-list">
        {education.map((ed) => (
          <div key={ed.degree} className="edu-row">
            <div>
              <h3 className="edu-degree">{ed.degree}</h3>
              <p className="edu-school">{ed.school}</p>
            </div>
            <p className="mono muted small">{ed.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
  <section id="contact" className="section">
    <SectionLabel num="06" label="Contact" />
    <div className="contact-list">
      <a href={`mailto:${profile.email}`} className="contact-row">
        <Mail size={16} className="accent" />
        {profile.email}
      </a>
      <a href={`tel:${profile.phoneHref}`} className="contact-row">
        <Phone size={16} className="accent" />
        {profile.phone}
      </a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-row">
        <Github size={16} className="accent" />
        {profile.github}
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-row">
        <Linkedin size={16} className="accent" />
        {profile.linkedin}
      </a>
      <a href={profile.facebook} target="_blank" rel="noopener noreferrer" className="contact-row">
        <Facebook size={16} className="accent" />
        {profile.facebook}
      </a>
      <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="contact-row">
        <Instagram size={16} className="accent" />
        {profile.instagram}
      </a>
    </div>
  </section>
  );
}
