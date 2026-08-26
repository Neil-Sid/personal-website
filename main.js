/* Renders everything in data.js into the page.
   You shouldn't need to edit this file to add content. */

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );

const linkList = (links = []) =>
  links
    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
    .join("");

const bullets = (points = []) =>
  points.length ? `<ul>${points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : "";

const tagList = (tags = []) =>
  tags.length
    ? `<div class="tags">${tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>`
    : "";

// Show a <section> only if it has content, then fill it.
const fill = (id, html) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (!html) return el.closest("section")?.remove();
  el.innerHTML = html;
};

const entryHTML = (e) => `
  <div class="entry">
    <div class="entry-head">
      <div><span class="entry-title">${esc(e.title)}</span>${
        e.org ? ` <span class="entry-org">· ${esc(e.org)}</span>` : ""
      }</div>
      ${e.date ? `<span class="entry-date">${esc(e.date)}</span>` : ""}
    </div>
    ${bullets(e.points)}
  </div>`;

const projectHTML = (p) => `
  <div class="project">
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.blurb)}</p>
    ${tagList(p.tags)}
    ${bullets(p.points)}
    <div class="project-links">${linkList(p.links)}</div>
  </div>`;

const skillHTML = (s) =>
  `<div class="skill-row"><span class="skill-label">${esc(s.label)}:</span> ${esc(
    s.items.join(", ")
  )}</div>`;

// ---- render ----
document.title = profile.name;
document.getElementById("name").textContent = profile.name;
document.getElementById("tagline").textContent = profile.tagline;
document.getElementById("header-links").innerHTML = linkList(profile.links);

fill("about",      about ? `<p>${esc(about)}</p>` : "");
fill("experience", experience.map(entryHTML).join(""));
fill("projects",   projects.map(projectHTML).join(""));
fill("skills",     skills.map(skillHTML).join(""));
fill("education",  education.map(entryHTML).join(""));

document.getElementById("year").textContent = new Date().getFullYear();
