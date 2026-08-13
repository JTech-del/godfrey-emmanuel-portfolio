import "./hero.css";

const renderHero = () => {
    const hero = document.querySelector("#hero");

    if (!hero) {
        throw new Error("Hero mount point #hero was not found.");
    }

    hero.innerHTML = `
    <section class="hero section">
      <div class="container">
        <p class="hero__eyebrow">
          Frontend Developer
        </p>

        <h1 class="hero__title">
          Building thoughtful digital experiences.
        </h1>

        <p class="hero__description">
          I build responsive, interactive interfaces with a strong focus
          on usability, maintainability, and the details that make products
          feel complete.
        </p>

        <div class="hero__actions">
          <a href="#projects" class="hero__button hero__button--primary">
            View my work
          </a>

          <a href="#contact" class="hero__button hero__button--secondary">
            Let's connect
          </a>
        </div>
      </div>
    </section>
  `;
};

export { renderHero };