/*
const renderHero = () => {
    const hero = document.querySelector("#hero");

    if (!hero) {
        throw new Error("Hero mount point #hero was not found.");
    }

    hero.innerHTML = `
    <div>
      <p>Hero section</p>
    </div>
  `;
};

export { renderHero };
*/

const renderHero = () => {
    const hero = document.querySelector("#hero");

    if (!hero) {
        throw new Error("Hero mount point #hero was not found.");
    }

    hero.innerHTML = `
    <section class="section">
      <div class="container">
        <p>Hero section</p>
      </div>
    </section>
  `;
};

export { renderHero };