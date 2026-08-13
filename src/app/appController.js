import { renderNavbar } from "../components/navbar/navbarView.js";
import { renderHero } from "../components/hero/heroView.js";
import { renderProjects } from "../components/projects/projectsView.js";
import { renderAbout } from "../components/about/aboutView.js";
import { renderSkills } from "../components/skills/skillsView.js";
import { renderJourney } from "../components/journey/journeyView.js";
import { renderContact } from "../components/contact/contactView.js";
import { renderFooter } from "../components/footer/footerView.js";

const createApplicationShell = () => {
    const app = document.querySelector("#app");

    if (!app) {
        throw new Error("Application root element #app was not found.");
    }

    app.innerHTML = `
    <header id="navbar"></header>

    <main id="main-content">
      <section id="hero"></section>
      <section id="projects"></section>
      <section id="about"></section>
      <section id="skills"></section>
      <section id="journey"></section>
      <section id="contact"></section>
    </main>

    <footer id="footer"></footer>
  `;

    renderNavbar();
    renderHero();
    renderProjects();
    renderAbout();
    renderSkills();
    renderJourney();
    renderContact();
    renderFooter();

    return app;
};

export { createApplicationShell };