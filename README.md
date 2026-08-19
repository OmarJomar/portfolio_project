# Jomari Salting — Portfolio

## Project structure

```
portfolio-project/
├── index.html         ← page shell, title, meta description
├── package.json       ← dependencies
├── vite.config.js     ← Vite build/dev server config
├── public/
│   └── resume.pdf     ← resume PDF (served as-is, downloadable)
└── src/
    ├── main.jsx       ← React entry point
    ├── App.jsx        ← assembles the page, tracks active nav section via scroll
    ├── data.js        ← ALL your content (edit this to update text)
    ├── index.css      ← ALL styling (dark navy theme, edit variables at top)
    ├── assets/
    │   └── hero-bg.jpg         ← hero background photo (imported in Hero.jsx)
    ├── hooks/
    │   └── useScrollReveal.js  ← fade-in-on-scroll animation
    └── components/
        ├── Nav.jsx             ← sticky top nav|status bar|scrollspy
        ├── Hero.jsx            ← intro of web
        ├── SectionLabel.jsx    ← reusable numbered heading (e.g. "01 — Summary")
        ├── Sections.jsx        ← Summary|Skills|Exp|Proj|Educ|Contact
        └── Footer.jsx          ← copyright line + location
```

To change your text (name, skills, jobs, projects) → edit `src/data.js`.
To change colors/spacing → edit the `:root` variables at the top of `src/index.css`.

See the setup guide in chat for step-by-step run/deploy instructions.
