const createApplicationShell = () => {
    const app = document.querySelector("#app");

    if (!app) {
        throw new Error("Application root element #app was not found.");
    }

    app.innerHTML = `
    <header id="navbar"></header>

    <main id="main-content">
      <section id="hero"></section>

      <section id="projects"></section>

      <section id="about"></section>

      <section id="skills"></section>

      <section id="journey"></section>

      <section id="contact"></section>
    </main>

    <footer id="footer"></footer>
  `;

    return app;
};

export { createApplicationShell };