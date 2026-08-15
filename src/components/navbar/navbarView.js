import "./navbar.css";

const navigationItems = [{
        label: "Home",
        href: "#hero",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Journey",
        href: "#journey",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const renderNavbar = () => {
        const navbar = document.querySelector("#navbar");

        if (!navbar) {
            throw new Error("Navbar mount point #navbar was not found.");
        }

        navbar.innerHTML = `
    <nav class="navbar" aria-label="Primary navigation">
      <div class="navbar__container container">

       <a
  href="#hero"
  class="navbar__brand"
  aria-label="Godfrey Emmanuel — Home"
>
  <span class="navbar__brand-mark" aria-hidden="true">
    GE
  </span>

  <span class="navbar__brand-info">
    <span class="navbar__brand-name">
      Godfrey Emmanuel
    </span>

   

          <span class="navbar__brand-role">
            Frontend Developer
          </span>
        </a>

        <button
          type="button"
          class="navbar__menu-toggle"
          aria-expanded="false"
          aria-controls="primary-navigation"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="primary-navigation"
          class="navbar__navigation"
        >
          <ul class="navbar__list">
            ${navigationItems
              .map(
                (item) => `
                  <li class="navbar__item">
                    <a
                      class="navbar__link"
                      href="${item.href}"
                    >
                      ${item.label}
                    </a>
                  </li>
                `,
              )
              .join("")}
          </ul>
        </div>

      </div>
    </nav>
  `;


  const menuToggle = navbar.querySelector(".navbar__menu-toggle");
const navigation = navbar.querySelector(".navbar__navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("navbar__navigation--open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});


const navigationLinks = navbar.querySelectorAll(".navbar__link");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("navbar__navigation--open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu",
    );
  });
});
};

export { renderNavbar };