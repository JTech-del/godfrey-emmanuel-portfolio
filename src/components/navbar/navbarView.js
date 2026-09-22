import "./navbar.css";

import {
    getCurrentTheme,
    toggleTheme,
} from "../../app/themeController.js";

const navigationItems = [
    {
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
  { label: "GitHub", href: "#github" },
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

    const currentTheme = getCurrentTheme();

    navbar.innerHTML = `
        <nav class="navbar" aria-label="Primary navigation">
            <div class="navbar__container container">

                <a
                    href="#hero"
                    class="navbar__brand"
                    aria-label="Godfrey Emmanuel — Home"
                >
                    <span
                        class="navbar__brand-mark"
                        aria-hidden="true"
                    >
                        GE
                    </span>

                    <span class="navbar__brand-info">
                        <span class="navbar__brand-name">
                            Godfrey Emmanuel
                        </span>

                        <span class="navbar__brand-role">
                            Frontend Developer
                        </span>
                    </span>
                </a>

                <div class="navbar__controls">

                    <button
                        type="button"
                        class="navbar__theme-toggle"
                        aria-label="Switch to ${
                            currentTheme === "dark" ? "light" : "dark"
                        } theme"
                        aria-pressed="${currentTheme === "light"}"
                    >
                        <span class="navbar__theme-icon">
                            <i
                                data-lucide="${
                                    currentTheme === "dark"
                                        ? "sun"
                                        : "moon"
                                }"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </button>

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

                </div>

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

    window.lucide?.createIcons();

    const themeToggle = navbar.querySelector(
        ".navbar__theme-toggle",
    );

    const themeIcon = navbar.querySelector(
        ".navbar__theme-icon",
    );

    const menuToggle = navbar.querySelector(
        ".navbar__menu-toggle",
    );

    const navigation = navbar.querySelector(
        ".navbar__navigation",
    );

    const navigationLinks =
        navbar.querySelectorAll(".navbar__link");

    /*
     * Mobile menu state
     */
    const setMenuState = (isOpen) => {
        navigation.classList.toggle(
            "navbar__navigation--open",
            isOpen,
        );

        menuToggle.classList.toggle(
            "navbar__menu-toggle--open",
            isOpen,
        );

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen),
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu",
        );
    };

    /*
     * Active navigation state
     */
    const setActiveLink = (sectionId) => {
        navigationLinks.forEach((link) => {
            const isActive =
                link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle(
                "navbar__link--active",
                isActive,
            );

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    /*
     * Theme toggle
     */
    themeToggle.addEventListener("click", () => {
        const nextTheme = toggleTheme();

        themeToggle.setAttribute(
            "aria-label",
            `Switch to ${
                nextTheme === "dark" ? "light" : "dark"
            } theme`,
        );

        themeToggle.setAttribute(
            "aria-pressed",
            String(nextTheme === "light"),
        );

        themeIcon.classList.add(
            "navbar__theme-icon--changing",
        );

        window.setTimeout(() => {
            themeIcon.innerHTML = `
                <i
                    data-lucide="${
                        nextTheme === "dark" ? "sun" : "moon"
                    }"
                    aria-hidden="true"
                ></i>
            `;

            window.lucide?.createIcons();

            themeIcon.classList.remove(
                "navbar__theme-icon--changing",
            );
        }, 100);
    });

    /*
     * Mobile menu toggle
     */
    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        setMenuState(!isOpen);
    });

    /*
     * Close mobile menu after navigation
     */
    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });

    /*
     * Observe page sections and update the active navigation item.
     */
    const sections = navigationItems
        .map((item) => {
            const sectionId = item.href.replace("#", "");

            return document.getElementById(sectionId);
        })
        .filter(Boolean);

    if (sections.length > 0) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio,
                    );

                if (visibleSections.length > 0) {
                    setActiveLink(
                        visibleSections[0].target.id,
                    );
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -55% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            },
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        /*
         * Home is the initial state before the first
         * meaningful section intersection occurs.
         */
        setActiveLink("hero");
    }
};

export { renderNavbar };