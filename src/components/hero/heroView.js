import "./hero.css";

const renderHero = () => {
    const hero = document.querySelector("#hero");

    if (!hero) {
        throw new Error("Hero mount point #hero was not found.");
    }

    hero.innerHTML = `
        <section
            class="hero section"
            aria-labelledby="hero-title"
        >
            <div class="container">

                <div
                    class="hero__content"
                    data-motion="fade-up"
                >

                    <p class="hero__eyebrow">
                        Frontend Developer
                    </p>

                    <h1 id="hero-title" class="hero__title">
                        I build digital experiences
                        <span>that feel as good as they work.</span>
                    </h1>

                    <p class="hero__description">
                        I build responsive, interactive web applications
                        with JavaScript and modern frontend technologies,
                        focusing on thoughtful interfaces, maintainable
                        code, and real-world user experiences.
                    </p>

                    <div class="hero__actions">
                        <a
                            href="#projects"
                            class="hero__button hero__button--primary"
                        >
                            <span>View my work</span>
                            <i
                                data-lucide="arrow-up-right"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="/assets/documents/godfrey-emmanuel-resume.pdf"
                            class="hero__button hero__button--secondary"
                            download
                        >
                            <span>Download resume</span>
                            <i
                                data-lucide="download"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="#contact"
                            class="hero__button hero__button--text"
                        >
                            <span>Let's connect</span>
                            <i
                                data-lucide="arrow-right"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>

                </div>

                <div
                    class="hero__visual"
                    data-motion="fade-left"
                    aria-hidden="true"
                >

                    <div class="hero__visual-card">

                        <div class="hero__visual-header">
                            <span class="hero__visual-label">
                                Building with intention
                            </span>

                            <span class="hero__visual-indicator">
                                <span class="hero__status-dot"></span>
                                Active
                            </span>
                        </div>

                        <div class="hero__visual-main">
                            <strong class="hero__visual-title">
                                Frontend
                                <span>→ Full Stack</span>
                            </strong>

                            <p class="hero__visual-description">
                                Turning ideas into structured,
                                responsive, and functional products.
                            </p>
                        </div>

                        <div class="hero__visual-stack">
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                        </div>

                        <div class="hero__visual-footer">
                            <span>Projects</span>
                            <strong>04</strong>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();
};

export { renderHero };