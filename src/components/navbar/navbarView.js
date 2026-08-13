const renderNavbar = () => {
    const navbar = document.querySelector("#navbar");

    if (!navbar) {
        throw new Error("Navbar mount point #navbar was not found.");
    }

    navbar.innerHTML = `
    <nav>
      <p>Godfrey Emmanuel</p>
    </nav>
  `;
};

export { renderNavbar };