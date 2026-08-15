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
            (skill) => `
                <article class="skill-card">

                    <div class="skill-card__icon" aria-hidden="true">
                        <i data-lucide="code-2"></i>
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
                        Skills
                    </p>

                    <h2
                        id="skills-title"
                        class="section-heading__title"
                    >
                        Tools I use to build.
                    </h2>

                    <p class="section-heading__description">
                        Technologies and practices I use to build
                        responsive, interactive, and maintainable
                        frontend experiences.
                    </p>

                </div>


                <div class="skills__grid">
                    ${skillCards}
                </div>

            </div>
        </section>
    `;

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

export { renderSkills };