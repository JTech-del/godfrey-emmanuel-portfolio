const renderAbout = () => {
    const about = document.querySelector("#about");

    if (!about) {
        throw new Error("About mount point #about was not found.");
    }

    about.innerHTML = `
    <div>
      <p>About section</p>
    </div>
  `;
};

export { renderAbout };