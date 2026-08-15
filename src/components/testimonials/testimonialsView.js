import "./testimonials.css";
import { testimonials } from "../../data/testimonials/testimonialsData.js";

const renderTestimonials = () => {
        const testimonialsContainer =
            document.querySelector("#testimonials");

        if (!testimonialsContainer) {
            throw new Error(
                "Testimonials mount point #testimonials was not found.",
            );
        }

        testimonialsContainer.innerHTML = `
        <section
            class="testimonials section"
            aria-labelledby="testimonials-title"
        >
            <div class="container">

                <div class="testimonials__header">

                    <p class="testimonials__eyebrow">
                        Testimonials
                    </p>

                    <h2
                        id="testimonials-title"
                        class="testimonials__title"
                    >
                        What Clients Say
                    </h2>

                    <p class="testimonials__description">
                        Real feedback from real clients. I take pride in
                        delivering thoughtful solutions that help businesses
                        and ideas move forward.
                    </p>

                </div>

                ${
                    testimonials.length > 0
                        ? `
                            <div class="testimonials__list">
                                ${testimonials
                                    .map(
                                        (testimonial) => `
                                            <article class="testimonial-card">

                                                <div class="testimonial-card__quote">
                                                    <i data-lucide="quote"></i>
                                                </div>

                                                <div class="testimonial-card__client">

                                                    <img
                                                        src="${testimonial.image}"
                                                        alt="${testimonial.name}"
                                                        class="testimonial-card__image"
                                                    />

                                                    <div>
                                                        <h3>
                                                            ${testimonial.name}
                                                        </h3>

                                                        <p>
                                                            ${testimonial.role}
                                                            ${
                                                                testimonial.company
                                                                    ? `, ${testimonial.company}`
                                                                    : ""
                                                            }
                                                        </p>
                                                    </div>

                                                </div>

                                                <div
                                                    class="testimonial-card__rating"
                                                    aria-label="${testimonial.rating} out of 5 stars"
                                                >
                                                    ${"★".repeat(testimonial.rating)}
                                                </div>

                                                <p class="testimonial-card__text">
                                                    ${testimonial.text}
                                                </p>

                                                <div class="testimonial-card__meta">

                                                    ${
                                                        testimonial.project
                                                            ? `
                                                                <span>
                                                                    <strong>
                                                                        Project:
                                                                    </strong>
                                                                    ${testimonial.project}
                                                                </span>
                                                            `
                                                            : ""
                                                    }

                                                    ${
                                                        testimonial.date
                                                            ? `
                                                                <span>
                                                                    <i data-lucide="calendar"></i>
                                                                    ${testimonial.date}
                                                                </span>
                                                            `
                                                            : ""
                                                    }

                                                </div>

                                            </article>
                                        `,
                                    )
                                    .join("")}
                            </div>
                        `
                        : `
                            <div
                                class="testimonials__empty"
                                aria-live="polite"
                            >

                                <div class="testimonials__empty-icon">
                                    <i data-lucide="message-circle-more"></i>
                                </div>

                                <h3>
                                    More testimonials coming soon
                                </h3>

                                <p>
                                    Client feedback will appear here as I
                                    complete more projects and collaborations.
                                </p>

                            </div>
                        `
                }

            </div>
        </section>
    `;

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

export { renderTestimonials };