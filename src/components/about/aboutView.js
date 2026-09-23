import "./about.css";

const renderAbout = () => {
    const aboutSection = document.querySelector("#about");

    if (!aboutSection) {
        throw new Error("About mount point #about was not found.");
    }

    aboutSection.innerHTML = `
        <section
            class="about section"
            aria-labelledby="about-title"
        >
            <div class="container">

                <!-- Section introduction -->
                <div class="about__intro">

                    <div class="about__intro-content">

                        <div class="about__section-marker">
                            <span class="about__section-line"></span>

                            <p class="about__eyebrow">
                                About
                            </p>
                        </div>

                        <h2
                            id="about-title"
                            class="about__title"
                        >
                            I turn ideas into
                            <span>interfaces.</span>
                        </h2>

                        <div class="about__description">

                            <p>
                                I'm a frontend developer who enjoys taking
                                an idea, breaking it down into a clear
                                structure, and turning it into a responsive
                                web experience.
                            </p>

                            <p>
                                I care about more than how a page looks.
                                I think about how an interface behaves,
                                how the code is organized, and how the
                                product can evolve as it grows.
                            </p>

                        </div>

                        <div class="about__identity">

                            <div class="about__identity-item">
                                <span class="about__identity-label">
                                    Currently building
                                </span>

                                <strong>
                                    Frontend → Full Stack
                                </strong>
                            </div>

                            <div class="about__identity-item">
                                <span class="about__identity-label">
                                    Core focus
                                </span>

                                <strong>
                                    JavaScript &amp; Product Interfaces
                                </strong>
                            </div>

                        </div>

                    </div>

                    <div class="about__profile">

                        <div class="about__profile-frame">

                            <img
                                src="/assets/images/profile/profile.webp"
                                alt="Godfrey Emmanuel"
                                class="about__profile-image"
                                loading="lazy"
                            />

                            <div class="about__profile-caption">
                                <span>Frontend Developer</span>
                                <span>Building with intention.</span>
                            </div>

                        </div>

                    </div>

                </div>


                <!-- Development approach -->
                <div class="about__details">

                    <!-- How I Work -->
                    <div class="about__workflow">

                        <div class="about__detail-heading">

                            <span class="about__detail-index">
                                01
                            </span>

                            <div>
                                <p class="about__detail-eyebrow">
                                    Development approach
                                </p>

                                <h3 class="about__subheading">
                                    How I Work
                                </h3>
                            </div>

                        </div>

                        <div class="about__steps">

                            <article class="about__step">

                                <div class="about__step-number">
                                    01
                                </div>

                                <div class="about__step-content">
                                    <h4>Understand</h4>

                                    <p>
                                        Start with the problem, requirements,
                                        and intended experience before
                                        writing the interface.
                                    </p>
                                </div>

                            </article>


                            <article class="about__step">

                                <div class="about__step-number">
                                    02
                                </div>

                                <div class="about__step-content">
                                    <h4>Structure</h4>

                                    <p>
                                        Establish a clear foundation so the
                                        interface, components, and project
                                        logic remain organized.
                                    </p>
                                </div>

                            </article>


                            <article class="about__step">

                                <div class="about__step-number">
                                    03
                                </div>

                                <div class="about__step-content">
                                    <h4>Build</h4>

                                    <p>
                                        Turn the structure into responsive,
                                        functional interfaces that behave
                                        naturally across devices.
                                    </p>
                                </div>

                            </article>


                            <article class="about__step">

                                <div class="about__step-number">
                                    04
                                </div>

                                <div class="about__step-content">
                                    <h4>Refine</h4>

                                    <p>
                                        Test, debug, improve, and polish the
                                        experience until the details feel
                                        intentional.
                                    </p>
                                </div>

                            </article>

                        </div>

                    </div>


                    <!-- Current Focus -->
                    <div class="about__focus">

                        <div class="about__focus-header">

                            <div>
                                <p class="about__detail-eyebrow">
                                    What I'm developing
                                </p>

                                <h3 class="about__subheading">
                                    Current Focus
                                </h3>
                            </div>

                            <span class="about__focus-count">
                                06
                            </span>

                        </div>


                        <div class="about__focus-list">

                            <article class="about__focus-item">

                                <div class="about__focus-icon">
                                    <i
                                        data-lucide="code-2"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div class="about__focus-content">
                                    <h4>Frontend Development</h4>

                                    <p>
                                        Building responsive, reusable
                                        interfaces with HTML, CSS,
                                        JavaScript, and modern frontend
                                        practices.
                                    </p>
                                </div>

                            </article>


                            <article class="about__focus-item">

                                <div class="about__focus-icon">
                                    <i
                                        data-lucide="layers-3"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div class="about__focus-content">
                                    <h4>UI Architecture</h4>

                                    <p>
                                        Creating clear structures that keep
                                        interfaces organized and easier to
                                        maintain as projects grow.
                                    </p>
                                </div>

                            </article>


                            <article class="about__focus-item">

                                <div class="about__focus-icon">
                                    <i
                                        data-lucide="monitor-smartphone"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div class="about__focus-content">
                                    <h4>Responsive Design</h4>

                                    <p>
                                        Designing experiences that adapt
                                        naturally across desktop, tablet,
                                        and mobile devices.
                                    </p>
                                </div>

                            </article>


                            <article class="about__focus-item">

                                <div class="about__focus-icon about__focus-icon--text">
                                    JS
                                </div>

                                <div class="about__focus-content">
                                    <h4>JavaScript</h4>

                                    <p>
                                        Deepening my understanding of
                                        JavaScript and using it to create
                                        more interactive and reliable
                                        interfaces.
                                    </p>
                                </div>

                            </article>


                            <article class="about__focus-item">

                                <div class="about__focus-icon">
                                    <i
                                        data-lucide="braces"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div class="about__focus-content">
                                    <h4>Clean &amp; Maintainable Code</h4>

                                    <p>
                                        Writing code that is structured,
                                        readable, and easier to improve
                                        as a project evolves.
                                    </p>
                                </div>

                            </article>


                            <article class="about__focus-item">

                                <div class="about__focus-icon">
                                    <i
                                        data-lucide="book-open"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div class="about__focus-content">
                                    <h4>Continuous Learning</h4>

                                    <p>
                                        Learning through real projects,
                                        experimentation, debugging, and
                                        continuous refinement.
                                    </p>
                                </div>

                            </article>

                        </div>

                    </div>

                </div>


                <!-- Closing statement -->
                <div class="about__closing">

                    <span class="about__closing-mark">“</span>

                    <p>
                        Good frontend work is where thoughtful design,
                        clear structure, and reliable behavior meet.
                    </p>

                    <span class="about__closing-line"></span>

                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();
};

export { renderAbout };
