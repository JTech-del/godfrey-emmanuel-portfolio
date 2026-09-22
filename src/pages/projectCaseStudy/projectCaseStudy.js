import "./projectCaseStudy.css";
import { projects } from "../../data/projects/projectsData.js";

const getProjectFromSlug = (slug) => {
    return projects.find((project) => project.slug === slug);
};

const renderList = (items = []) => {
    if (!items.length) return "";

    return `
        <ul class="case-study__list">
            ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
    `;
};

const renderChallenges = (challenges = []) => {
    if (!challenges.length) return "";

    return `
        <section class="case-study__section">
            <p class="case-study__eyebrow">Engineering Challenges</p>
            <h2>Challenges & Approach</h2>

            <div class="case-study__challenges">
                ${challenges
                    .map(
                        (challenge) => `
                            <article class="case-study__challenge">
                                <h3>${challenge.title}</h3>
                                <p>${challenge.description}</p>

                                <div class="case-study__approach">
                                    <strong>Approach</strong>
                                    <p>${challenge.approach}</p>
                                </div>
                            </article>
                        `,
                    )
                    .join("")}
            </div>
        </section>
    `;
};

const renderDevelopment = (development) => {
    if (!development) return "";

    return `
        <section class="case-study__section">
            <p class="case-study__eyebrow">Development Status</p>
            <h2>Where the project stands</h2>

            <p class="case-study__current-state">
                ${development.currentState}
            </p>

            <div class="case-study__development-grid">
                <div>
                    <h3>Currently in progress</h3>
                    ${renderList(development.inProgress)}
                </div>

                <div>
                    <h3>Future direction</h3>
                    ${renderList(development.futureDirection)}
                </div>
            </div>
        </section>
    `;
};

const renderProjectCaseStudy = (slug) => {
    const project = getProjectFromSlug(slug);

    if (!project || !project.caseStudy) {
        return `
            <main class="case-study case-study--not-found">
                <div class="case-study__container">
                    <a
                        class="case-study__back"
                        href="/#projects"
                    >
                        ← Back to projects
                    </a>

                    <p class="case-study__eyebrow">Project</p>

                    <h1>Project not found</h1>

                    <p>
                        The project you're looking for doesn't exist or doesn't
                        have a case study yet.
                    </p>
                </div>
            </main>
        `;
    }

    const { caseStudy } = project;

    return `
        <main class="case-study">

            <div class="case-study__container">

                <a
                    class="case-study__back"
                    href="/#projects"
                >
                    ← Back to projects
                </a>

                <header class="case-study__hero">
<div class="case-study__meta">
    <span class="case-study__category">
        ${project.category}
    </span>

    <span class="case-study__separator" aria-hidden="true">
        /
    </span>

    <span class="case-study__status">
        ${project.status}
    </span>
</div>
                    <h1>${project.title}</h1>

                    <p class="case-study__intro">
                        ${caseStudy.overview}
                    </p>

                    ${
                        project.technologies?.length
                            ? `
                                <ul class="case-study__technologies">
                                    ${project.technologies
                                        .map(
                                            (technology) => `
                                                <li>
                                                    ${technology}
                                                </li>
                                            `,
                                        )
                                        .join("")}
                                </ul>
                            `
                            : ""
                    }

                    <div class="case-study__actions">

                        ${
                            project.links?.live
                                ? `
                                    <a
                                        href="${project.links.live}"
                                        class="case-study__button case-study__button--primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Explore live project
                                    </a>
                                `
                                : ""
                        }

                        ${
                            project.links?.source
                                ? `
                                    <a
                                        href="${project.links.source}"
                                        class="case-study__button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View source
                                    </a>
                                `
                                : ""
                        }

                    </div>

                </header>

                ${
                    caseStudy.media?.hero
                        ? `
                            <figure class="case-study__hero-media">
                                <img
                                    src="${caseStudy.media.hero}"
                                    alt="${project.title} project preview"
                                />
                            </figure>
                        `
                        : ""
                }

                ${
                    caseStudy.solution
                        ? `
                            <section class="case-study__section">
                                <p class="case-study__eyebrow">Approach</p>
                                <h2>Building the platform</h2>
                                <p>${caseStudy.solution}</p>
                            </section>
                        `
                        : ""
                }

                ${
                    caseStudy.features?.length
                        ? `
                            <section class="case-study__section">
                                <p class="case-study__eyebrow">Product</p>
                                <h2>Key Features</h2>
                                ${renderList(caseStudy.features)}
                            </section>
                        `
                        : ""
                }

                ${
                    caseStudy.architecture?.length
                        ? `
                            <section class="case-study__section">
                                <p class="case-study__eyebrow">Engineering</p>
                                <h2>Architecture</h2>
                                ${renderList(caseStudy.architecture)}
                            </section>
                        `
                        : ""
                }

                ${renderChallenges(caseStudy.challenges)}

                ${
                    caseStudy.lessons?.length
                        ? `
                            <section class="case-study__section">
                                <p class="case-study__eyebrow">Reflection</p>
                                <h2>What I learned</h2>
                                ${renderList(caseStudy.lessons)}
                            </section>
                        `
                        : ""
                }

                ${renderDevelopment(caseStudy.development)}

            </div>
        </main>
    `;
};

export { renderProjectCaseStudy };
