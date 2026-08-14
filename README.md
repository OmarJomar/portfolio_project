# Jomari Salting — Portfolio

## Project structure

```
portfolio-project/
├── index.html              ← page shell, title, meta description
├── package.json            ← dependencies
├── vite.config.js          ← Vite build/dev server config
├── public/
│   └── resume.pdf          ← resume PDF here
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← assembles the page
    ├── data.js             ← ALL your content (edit this to update text)
    ├── index.css           ← ALL styling (dark navy theme, edit variables at top)
    └── components/
        ├── Nav.jsx           ← sticky top nav + status bar, scrollspy active-link highlight
        ├── Hero.jsx          ← intro block: name, headline, pitch, CTA buttons
        ├── SectionLabel.jsx  ← reusable numbered heading (e.g. "01 — Summary")
        ├── Sections.jsx      ← Summary, Skills, Experience, Projects, Education, Contact
        └── Footer.jsx        ← copyright line + location
```

To change your text (name, skills, jobs, projects) → edit `src/data.js`.
To change colors/spacing → edit the `:root` variables at the top of `src/index.css`.

See the setup guide in chat for step-by-step run/deploy instructions.
