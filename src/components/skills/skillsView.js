import "./skills.css";
import "../shared/sectionHeading.css";
import { skills } from "../../data/skills/skillsData.js";

const renderSkills = () => {
    const skillsSection = document.querySelector("#skills");

    if (!skillsSection) {
        throw new Error("Skills mount point #skills was not found.");
    }

    const skillCards = skills
        .map(
            (skill, index) => `
                <article
                    class="skill-card"
                    data-skill-index="${index + 1}"
                >

                    <div class="skill-card__top">

                        <span class="skill-card__number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <div class="skill-card__icon" aria-hidden="true">
                            <i data-lucide="code-2"></i>
                        </div>

                    </div>

                    <div class="skill-card__content">

                        <div class="skill-card__header">

                            <h3 class="skill-card__title">
                                ${skill.name}
                            </h3>

                            <span class="skill-card__level">
                                ${skill.level}
                            </span>

                        </div>

                        <p class="skill-card__category">
                            ${skill.category}
                        </p>

                    </div>

                </article>
            `,
        )
        .join("");

    skillsSection.innerHTML = `
        <section
            class="skills section"
            aria-labelledby="skills-title"
        >
            <div class="container">

                <div class="section-heading">

                    <p class="section-heading__eyebrow">
                        Skills &amp; Toolkit
                    </p>

                    <h2
                        id="skills-title"
                        class="section-heading__title"
                    >
                        Tools I use to build.
                    </h2>

                    <p class="section-heading__description">
                        A growing technical foundation built through
                        real projects, experimentation, debugging, and
                        continuous practice.
                    </p>

                </div>


                <!-- Technical direction -->

                <div class="skills__direction">

                    <div class="skills__direction-intro">

                        <span class="skills__direction-label">
                            Development direction
                        </span>

                        <h3>
                            From interfaces to
                            <span>complete applications.</span>
                        </h3>

                        <p>
                            My current focus is strengthening the
                            connection between frontend interfaces,
                            application logic, APIs, and backend systems.
                        </p>

                    </div>


                    <div class="skills__path" aria-label="Development path">

                        <div class="skills__path-item">

                            <span class="skills__path-index">
                                01
                            </span>

                            <strong>
                                Frontend
                            </strong>

                            <small>
                                HTML · CSS · JavaScript · React
                            </small>

                        </div>

                        <span
                            class="skills__path-arrow"
                            aria-hidden="true"
                        >
                            →
                        </span>

                        <div class="skills__path-item">

                            <span class="skills__path-index">
                                02
                            </span>

                            <strong>
                                Application
                            </strong>

                            <small>
                                UI architecture · State · APIs
                            </small>

                        </div>

                        <span
                            class="skills__path-arrow"
                            aria-hidden="true"
                        >
                            →
                        </span>

                        <div class="skills__path-item">

                            <span class="skills__path-index">
                                03
                            </span>

                            <strong>
                                Full Stack
                            </strong>

                            <small>
                                Node.js · Express · MongoDB
                            </small>

                        </div>

                    </div>

                </div>


                <!-- Skills -->

                <div class="skills__grid">
                    ${skillCards}
                </div>


                <!-- Engineering principles -->

                <div class="skills__principles">

                    <div class="skills__principles-heading">

                        <p>
                            Beyond the tools
                        </p>

                        <h3>
                            How I approach development.
                        </h3>

                    </div>


                    <div class="skills__principles-list">

                        <article class="skills__principle">

                            <span class="skills__principle-index">
                                01
                            </span>

                            <div>
                                <h4>
                                    Structure
                                </h4>

                                <p>
                                    Keep projects organized so features
                                    can be understood, changed, and
                                    extended without unnecessary
                                    complexity.
                                </p>
                            </div>

                        </article>


                        <article class="skills__principle">

                            <span class="skills__principle-index">
                                02
                            </span>

                            <div>
                                <h4>
                                    Responsiveness
                                </h4>

                                <p>
                                    Build interfaces that remain usable
                                    and intentional across different
                                    screen sizes and devices.
                                </p>
                            </div>

                        </article>


                        <article class="skills__principle">

                            <span class="skills__principle-index">
                                03
                            </span>

                            <div>
                                <h4>
                                    Reliability
                                </h4>

                                <p>
                                    Think about states, errors, edge
                                    cases, and behavior rather than
                                    focusing only on the happy path.
                                </p>
                            </div>

                        </article>


                        <article class="skills__principle">

                            <span class="skills__principle-index">
                                04
                            </span>

                            <div>
                                <h4>
                                    Continuous Improvement
                                </h4>

                                <p>
                                    Use real projects to identify gaps,
                                    solve problems, and progressively
                                    improve both code and understanding.
                                </p>
                            </div>

                        </article>

                    </div>

                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();
};

export { renderSkills };