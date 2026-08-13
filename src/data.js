// ---------------------------------------------------------
// All your portfolio content lives here.
// Edit this file to update your info — no need to touch
// the components to change text.
// ---------------------------------------------------------

export const profile = {
  name: "Jomari Z Salting",
  shortName: "J. SALTING",
  role: "Application System Engineer.",
  pitch:
    "Detail-oriented engineer with hands-on experience across front-end development, back-end support, system testing, and UI documentation — with a focus on healthcare and POS platforms.",
  email: "jomsalting@gmail.com",
  phone: "0976 016 5869",
  phoneHref: "+639760165869",
  location: "Malabanban Sur, Candelaria, Quezon",
  github: "github.com/your-username", // TODO: add your real GitHub link
  linkedin: "linkedin.com/in/your-profile", // TODO: add your real LinkedIn link
  resumeFile: "/resume.pdf", // put your resume PDF in the /public folder with this name
};

export const sections = [
  { id: "summary", num: "01", label: "Summary" },
  { id: "skills", num: "02", label: "Skills" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "projects", num: "04", label: "Projects" },
  { id: "education", num: "05", label: "Education" },
  { id: "contact", num: "06", label: "Contact" },
];

export const summary =
  "Detail-oriented Application System Engineer with experience in front-end development, back-end support, system testing, UI documentation, and web application enhancement. Experienced in supporting POS and healthcare-related systems, reviewing test scenarios, assisting in application development, and troubleshooting software and hardware issues. Strong in problem-solving, documentation, teamwork, and adapting to new technologies.";

export const skillGroups = [
  { title: "Front-End", items: ["React", "JavaScript", "HTML", "CSS", "TypeScript (basic)"] },
  { title: "Back-End", items: ["C#.NET", "SQL", "MS SQL Server"] },
  { title: "Tools", items: ["Visual Studio", "VS Code", "GitHub", "SVN Tortoise", "IIS"] },
  {
    title: "Testing & Docs",
    items: ["Test scenario review", "Use case analysis", "UI documentation", "System documentation"],
  },
];

export const experience = [
  {
    role: "Application System Engineer",
    org: "Fujitsu / Weserv",
    time: "Dec 2021 — Jan 2026",
    points: [
      "Supported development, testing, and enhancement of healthcare web applications using C#.NET, MS SQL, GitHub, IIS, and SVN Tortoise.",
      "Built front-end features and sample UI designs using React, JavaScript, HTML, and CSS for client review.",
      "Reviewed and analyzed POS test scenarios to improve test coverage and support QA.",
      "Prepared and maintained UI-related documentation across the system design and implementation lifecycle.",
      "Coordinated with team members to resolve system concerns and deliver assigned work on schedule.",
    ],
  },
];

export const internships = [
  { role: "Technical Assistant Intern", org: "Pixografx", time: "Apr 2016 — Jun 2016" },
  { role: "Technical Assistant Intern", org: "Harte Hanks", time: "May 2017 — Jul 2017" },
  { role: "Production Coordinator Assistant Intern", org: "Happy Print", time: "Jan 2018 — May 2018" },
];

// TODO: Replace these with your real projects — this is the
// single highest-impact edit you can make to this site.
export const projects = [
  {
    title: "Add your first project here",
    desc: "Replace this card with a real build — even a small React dashboard or CRUD app. It's the single highest-impact addition you can make to this page.",
    tags: ["React", "Placeholder"],
    url: "",
  },
  {
    title: "Add a second project",
    desc: "A C#.NET + SQL mini-project, or a sanitized case study of a UI you built at Fujitsu/Weserv, works well here.",
    tags: ["C#.NET", "SQL", "Placeholder"],
    url: "",
  },
  {
    title: "Add a third project",
    desc: "Something that shows range — a testing/documentation artifact, a tool, or a POS-style mockup.",
    tags: ["Placeholder"],
    url: "",
  },
];

export const education = [
  {
    school: "Philippine Christian University",
    degree: "Master's in Engineering Management",
    time: "2024 — 2025",
  },
  {
    school: "Polytechnic University of the Philippines",
    degree: "B.S. Computer Engineering",
    time: "2018 — 2021",
  },
  {
    school: "Polytechnic University of the Philippines",
    degree: "Diploma, Computer Engineering Technology",
    time: "2015 — 2018",
  },
];
