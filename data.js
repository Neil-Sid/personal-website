/* ============================================================
   ALL SITE CONTENT LIVES HERE.
   ============================================================ */

const projects = [
  {
    name:  "Scrollopedia",
    blurb: "An infinite-scrolling Wikipedia feed that learns what you like and keeps serving up articles worth reading.",
    tags:  ["React", "TypeScript", "Node.js", "SQLite"],
    points: [
      "Built the infinite scroll feed in React and TypeScript with dynamic article loading for continuous discovery.",
      "Wrote a recommendation engine that scores articles against your likes and clicks, sharpening what surfaces next.",
      "Built a RESTful API with authentication, covering user accounts and per-account recommendations.",
      "Designed a SQLite schema for accounts, likes, interests, and interaction data so feeds persist across sessions.",
    ],
    links: [
    ],
  },
  {
    name:  "Dev Connect",
    blurb: "A web app for finding other developers by shared interests, built on top of live GitHub profile data.",
    tags:  ["JavaScript", "Node.js", "Express", "MongoDB"],
    points: [
      "Built with Node.js, Express, and MongoDB to display GitHub usernames and profile pictures.",
      "Implemented account creation and login so users can find other developers with common interests.",
      "Integrated the GitHub REST API to pull real profile data, giving users context on potential connections.",
    ],
    links: [
    ],
  },
  {
    name:  "Choose Your Own Adventure",
    blurb: "A branching story generator where the AI writes the next chapter based on the path you pick.",
    tags:  ["React", "Python", "Django", "OpenAI API"],
    points: [
      "Generates stories in real time through the OpenAI API, with a Django backend managing session state and a React frontend handling interaction.",
      "Structured AI responses as JSON to make parsing reliable rather than best-effort.",
    ],
    links: [
    ],
  },
  {
    name:  "Tower Rush",
    blurb: "A 3D Unity game built with a team, with procedurally generated enemy bases so no two runs play the same.",
    tags:  ["C#", "Unity"],
    points: [
      "Collaborated on a multi-scene game featuring AI behaviors, Scriptable Objects, and physics-driven gameplay.",
      "Developed gameplay systems with coroutines, prefabs, and components for a scalable, reusable architecture.",
      "Wrote algorithms to procedurally generate enemy bases, widening gameplay variety.",
    ],
    links: [
    ],
  },
  {
    name:  "Platform Jumper",
    blurb: "A 2D Android platformer with global leaderboards, written in Kotlin on an MVVM architecture.",
    tags:  ["Kotlin", "Android", "Firebase"],
    points: [
      "Implemented character movement, physics, and collision detection, structured with MVVM for modular, maintainable code.",
      "Integrated Firebase Database to back global leaderboards and high score tracking.",
      "Added Google AdMob interstitial ads to support monetization.",
    ],
    links: [
    ],
  },
];


/* ------------------------------------------------------------
   HEADER
   ------------------------------------------------------------ */
const profile = {
  name:    "Neil Sidhu",
  tagline: "Recent  Computer Science Gradaute from the University of Maryland.",
  links: [
    { label: "GitHub",   url: "https://github.com/Neil-Sid" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/neil-s-620708273/" },
  ],
};


/* ------------------------------------------------------------
   ABOUT — set to "" to hide the section entirely
   ------------------------------------------------------------ */
const about =
  "I recently graduated with a Computer Science degree and a minor in Business from  the University of Maryland, " +
  "Most of what I build is full-stack web work React and TypeScript " +
  "front ends over Node and Django APIs with some Unity and Mobile App development.";


/* ------------------------------------------------------------
   EXPERIENCE — empty, so the section hides itself.
   Add a { title, org, date, points } block when you have one.
   ------------------------------------------------------------ */
const experience = [];


/* ------------------------------------------------------------
   SKILLS — one row per category
   ------------------------------------------------------------ */
const skills = [
  {
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "C#", "Kotlin", "Rust", "OCaml", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Express", "Django", "Unity", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux"],
  },
  {
    label: "Databases",
    items: ["SQLite", "MongoDB"],
  },
];


/* ------------------------------------------------------------
   EDUCATION
   ------------------------------------------------------------ */
const education = [
  {
    title:  "B.S. Computer Science, Minor in Business",
    org:    "University of Maryland, College Park",
    date:   "May 2026",
    points: [
      "GPA: 3.45 / 4.00",
      "Coursework: Algorithms, Computer Systems, Object Oriented Programming II, Organization of Programming Languages, Web Application Development, Programming Handheld Systems, Computer and Network Security, Database Systems.",
    ],
  },
];
