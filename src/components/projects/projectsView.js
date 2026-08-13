import "./projects.css";
import "../shared/sectionHeading.css";
import { projects } from "../../data/projects/projectsData.js";

const renderProjects = () => {
        const projectsSection = document.querySelector("#projects");

        if (!projectsSection) {
            throw new Error("Projects mount point #projects was not found.");
        }

        const projectCards = projects
            .map(
                (project) => `
        <article
          class="project-card ${
            project.featured ? "project-card--featured" : ""
          }"
        >
          <div class="project-card__content">

            <div class="project-card__meta">
              <span class="project-card__category">
                ${project.category}
              </span>

              ${
                project.featured
                  ? `
                    <span class="project-card__featured">
                      Featured
                    </span>
                  `
                  : ""
              }
            </div>

            <h3 class="project-card__title">
              ${project.title}
            </h3>

            <p class="project-card__description">
              ${project.description}
            </p>

            <ul class="project-card__technologies">
              ${project.technologies
                .map(
                  (technology) => `
                    <li class="project-card__technology">
                      ${technology}
                    </li>
                  `,
                )
                .join("")}
            </ul>

            <div class="project-card__actions">
              <a
                href="${project.links.live}"
                class="project-card__link"
              >
                View project
              </a>

              <a
                href="${project.links.source}"
                class="project-card__link project-card__link--secondary"
              >
                Source code
              </a>
            </div>

          </div>
        </article>
      `,
    )
    .join("");

  projectsSection.innerHTML = `
    <section
      class="projects section"
      aria-labelledby="projects-title"
    >
      <div class="container">

        <div class="section-heading">
          <p class="section-heading__eyebrow">
            Selected work
          </p>

          <h2
            id="projects-title"
            class="section-heading__title"
          >
            Things I've built.
          </h2>

          <p class="section-heading__description">
            A selection of projects where I explored interfaces,
            interactions, responsive design, and frontend architecture.
          </p>
        </div>

        <div class="projects__grid">
          ${projectCards}
        </div>

      </div>
    </section>
  `;
};

export { renderProjects };