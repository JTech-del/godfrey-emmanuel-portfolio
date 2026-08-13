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