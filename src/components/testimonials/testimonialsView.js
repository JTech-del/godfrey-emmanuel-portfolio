import "./testimonials.css";

const renderTestimonials = () => {
    const testimonials = document.querySelector("#testimonials");

    if (!testimonials) {
        throw new Error(
            "Testimonials mount point #testimonials was not found.",
        );
    }

    testimonials.innerHTML = `
        <section
            class="testimonials section"
            aria-labelledby="testimonials-title"
        >
            <div class="container">

                <div
                    class="testimonials__header"
                    data-motion="fade-up"
                >
                    <p class="testimonials__eyebrow">
                        <i
                            data-lucide="quote"
                            aria-hidden="true"
                        ></i>

                        <span>Testimonials</span>
                    </p>

                    <h2
                        id="testimonials-title"
                        class="testimonials__title"
                    >
                        What people say
                        <span>about working with me.</span>
                    </h2>

                    <p class="testimonials__intro">
                        Genuine feedback from clients, collaborators,
                        and teams I have worked with will appear here.
                    </p>
                </div>

                <div
                    class="testimonials__empty"
                    data-motion="fade-up"
                    data-motion-delay="1"
                >
                    <div
                        class="testimonials__empty-icon"
                        aria-hidden="true"
                    >
                        <i data-lucide="message-square-quote"></i>
                    </div>

                    <div class="testimonials__empty-content">
                        <p class="testimonials__empty-label">
                            Testimonials coming soon
                        </p>

                        <h3 class="testimonials__empty-title">
                            Real experiences will have a place here.
                        </h3>

                        <p class="testimonials__empty-description">
                            As I continue working with clients,
                            collaborators, and teams, this section
                            will feature genuine feedback based on
                            real projects and working relationships.
                        </p>
                    </div>

                    <div
                        class="testimonials__empty-mark"
                        aria-hidden="true"
                    >
                        <i data-lucide="quote"></i>
                    </div>
                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();

    return testimonials;
};

export {
    renderTestimonials,
};