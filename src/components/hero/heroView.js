import "./hero.css";

const renderHero = () => {
    const hero = document.querySelector("#hero");

    if (!hero) {
        throw new Error("Hero mount point #hero was not found.");
    }

    hero.innerHTML = `
    <section class="hero section" aria-labelledby="hero-title">
      <div class="container">

        <div class="hero__content">

          <p class="hero__eyebrow">
            Frontend Developer
          </p>

          <h1 id="hero-title" class="hero__title">
            I build digital experiences
            <span>that feel as good as they work.</span>
          </h1>

          <p class="hero__description">
            I turn ideas and designs into responsive, interactive
            interfaces with a strong focus on usability, visual
            detail, and maintainable frontend code.
          </p>

          <div class="hero__actions">
            <a
              href="#projects"
              class="hero__button hero__button--primary"
            >
              View my work
            </a>

            <a
              href="#contact"
              class="hero__button hero__button--secondary"
            >
              Let's connect
            </a>
          </div>

        </div>

        <div class="hero__visual" aria-hidden="true">

          <div class="hero__visual-card">
            <span class="hero__visual-label">
              Currently building
            </span>

            <strong class="hero__visual-title">
              Thoughtful interfaces.
            </strong>

            <span class="hero__visual-status">
              <span class="hero__status-dot"></span>
              Available for meaningful projects
            </span>
          </div>

        </div>

      </div>
    </section>
  `;
};

export { renderHero };