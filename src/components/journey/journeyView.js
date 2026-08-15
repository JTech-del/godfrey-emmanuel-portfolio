import "./journey.css";
import "../shared/sectionHeading.css";
import { journey } from "../../data/journey/journeyData.js";

const renderJourney = () => {
    const journeySection = document.querySelector("#journey");

    if (!journeySection) {
        throw new Error("Journey mount point #journey was not found.");
    }

    const journeyItems = journey
        .map(
            (item, index) => `
                <article class="journey__item">

                    <div class="journey__marker">
                        <span>
                            ${String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <div class="journey__content">

                        <p class="journey__period">
                            ${item.period}
                        </p>

                        <h3 class="journey__title">
                            ${item.title}
                        </h3>

                        <p class="journey__description">
                            ${item.description}
                        </p>

                    </div>

                </article>
            `,
        )
        .join("");

    journeySection.innerHTML = `
        <section
            class="journey section"
            aria-labelledby="journey-title"
        >
            <div class="container">

                <div class="section-heading">

                    <p class="section-heading__eyebrow">
                        Journey
                    </p>

                    <h2
                        id="journey-title"
                        class="section-heading__title"
                    >
                        How I'm growing as a developer.
                    </h2>

                    <p class="section-heading__description">
                        A progression shaped by learning, building,
                        experimentation, and a growing understanding
                        of frontend development.
                    </p>

                </div>


                <div class="journey__timeline">

                    ${journeyItems}

                </div>

            </div>
        </section>
    `;
};

export { renderJourney };