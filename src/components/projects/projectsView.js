
import "./projects.css";
import "../shared/sectionHeading.css";
import { projects } from "../../data/projects/projectsData.js";

const renderGithubIcon = () => `
    <svg
        class="project-card__github-icon"
        viewBox="0 0 98 96"
        aria-hidden="true"
        focusable="false"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M48.854 0C21.839 0 0 22.02 0 49.217c0 21.756 13.993 40.211 33.405 46.721 2.44.46 3.332-1.069 3.332-2.378 0-1.173-.046-4.276-.069-8.391-13.59 2.99-16.46-6.597-16.46-6.597-2.218-5.696-5.42-7.212-5.42-7.212-4.443-3.053.335-2.992.335-2.992 4.91.347 7.493 5.12 7.493 5.12 4.367 7.499 11.456 5.334 14.256 4.077.44-3.17 1.707-5.334 3.1-6.559-10.848-1.25-22.256-5.494-22.256-24.426 0-5.397 1.892-9.8 5.007-13.256-.502-1.255-2.17-6.285.477-13.093 0 0 4.083-1.316 13.385 5.063a46.72 46.72 0 0 1 12.19-1.656c4.136.02 8.31.562 12.19 1.656 9.303-6.38 13.376-5.063 13.376-5.063 2.655 6.808.987 11.838.485 13.093 3.115 3.456 5.001 7.859 5.001 13.256 0 18.977-11.427 23.164-22.3 24.39 1.753 1.532 3.313 4.548 3.313 9.171 0 6.624-.061 11.961-.061 13.592 0 1.318.884 2.86 3.356 2.37C84.868 89.419 98.854 70.966 98.854 49.217 98.854 22.02 76.015 0 48.854 0Z"
        />
    </svg>
`;

const renderProjects = () => {
    const projectsSection = document.querySelector("#projects");

    if (!projectsSection) {
        throw new Error("Projects mount point #projects was not found.");
    }

    const projectCards = projects
        .map(
            (project, index) => `
                <article
                    class="project-card ${
                        project.featured ? "project-card--featured" : ""
                    }"
                    data-project-id="${project.id}"
                >
                    <div class="project-card__media">
                        <img
                            src="${project.image}"
                            alt="Screenshot of the ${project.title} project"
                            class="project-card__image"
                            loading="${index === 0 ? "eager" : "lazy"}"
                        />

                        <span class="project-card__number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <div class="project-card__content">

                        <div class="project-card__meta">
                            <span class="project-card__category">
                                ${project.category}
                            </span>

                            ${
                                project.status
                                    ? `
                                        <span class="project-card__status">
                                            ${project.status}
                                        </span>
                                    `
                                    : ""
                            }
                        </div>

                        <div class="project-card__heading">
                            <h3 class="project-card__title">
                                ${project.title}
                            </h3>

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

                        <p class="project-card__description">
                            ${project.description}
                        </p>

                        <ul
                            class="project-card__technologies"
                            aria-label="${project.title} technologies"
                        >
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

                        <div
                            class="project-card__actions"
                            aria-label="${project.title} project actions"
                        >
                            ${
                                project.links.live
                                    ? `
                                        <a
                                            href="${project.links.live}"
                                            class="project-card__link project-card__link--primary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>View project</span>

                                            <i
                                                data-lucide="arrow-up-right"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    `
                                    : ""
                            }

                            ${
                                project.caseStudy
                                    ? `
                                        <a
                                            href="/projects/${project.slug}"
                                            class="project-card__link"
                                        >
                                            <span>Case study</span>

                                            <i
                                                data-lucide="arrow-right"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    `
                                    : ""
                            }

                            ${
                                project.links.source
                                    ? `
                                        <a
                                            href="${project.links.source}"
                                            class="project-card__link project-card__link--secondary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>Source code</span>

                                            ${renderGithubIcon()}
                                        </a>
                                    `
                                    : ""
                            }
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
                        A selection of real projects exploring product
                        interfaces, responsive experiences, frontend
                        architecture, and full-stack development.
                    </p>
                </div>

                <div class="projects__grid">
                    ${projectCards}
                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();
};

export { renderProjects };
