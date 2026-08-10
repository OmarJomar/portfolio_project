# Jomari Salting — Portfolio

## Project structure

```
portfolio-project/
├── index.html              ← page shell, title, meta description
├── package.json             ← dependencies
├── vite.config.js
├── public/
│   └── resume.pdf           ← put your real resume PDF here
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx                ← assembles the page
    ├── data.js                 ← ALL your content (edit this to update text)
    ├── index.css               ← ALL styling (dark navy theme, edit variables at top)
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── SectionLabel.jsx
        ├── Sections.jsx        ← Summary, Skills, Experience, Projects, Education, Contact
        └── Footer.jsx
```

To change your text (name, skills, jobs, projects) → edit `src/data.js`.
To change colors/spacing → edit the `:root` variables at the top of `src/index.css`.

See the setup guide in chat for step-by-step run/deploy instructions.
