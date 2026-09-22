
import "./footer.css";

const footerNavigation = [
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
    {
        label: "Contact",
        href: "#contact",
    },
];

const renderGithubIcon = () => `
    <svg
        class="site-footer__github-icon"
        viewBox="0 0 98 96"
        aria-hidden="true"
        focusable="false"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M48.854 0C21.839 0 0 22.02 0 49.217c0 21.756 13.993 40.211 33.405 46.721 2.44.46 3.332-1.069 3.332-2.378 0-1.173-.046-4.276-.069-8.391-13.59 2.99-16.46-6.597-16.46-6.597-2.218-5.696-5.42-7.212-5.42-7.212-4.443-3.053.335-2.992.335-2.992 4.91.347 7.493 5.12 7.493 5.12 4.367 7.499 11.456 5.334 14.256 4.077.44-3.17 1.707-5.334 3.1-6.559-10.848-1.25-22.256-5.494-22.256-24.426 0-5.397 1.892-9.8 5.007-13.256-.502-1.255-2.17-6.285.477-13.093 0 0 4.083-1.316 13.385 5.063a46.72 46.72 0 0 1 12.19-1.656c4.136.02 8.31.562 12.19 1.656 9.303-6.38 13.376-5.063 13.376-5.063 2.655 6.808.987 11.838.485 13.093 3.115 3.456 5.001 7.859 5.001 13.256 0 18.977-11.427 23.164-22.3 24.39 1.753 1.532 3.313 4.548 3.313 9.171 0 6.624-.061 11.961-.061 13.592 0 1.318.884 2.86 3.356 2.37C84.868 89.419 98.854 70.966 98.854 49.217 98.854 22.02 76.015 0 48.854 0Z"
        />
    </svg>
`;

const renderFooter = () => {
    const footer = document.querySelector("#footer");

    if (!footer) {
        throw new Error("Footer mount point #footer was not found.");
    }

    footer.innerHTML = `
        <footer class="site-footer">

            <div class="container">

                <div
                    class="site-footer__main"
                    data-motion="fade-up"
                >

                    <div class="site-footer__brand">

                        <a
                            href="#hero"
                            class="site-footer__brand-link"
                            aria-label="Godfrey Emmanuel — Home"
                        >
                            <span
                                class="site-footer__mark"
                                aria-hidden="true"
                            >
                                GE
                            </span>

                            <span class="site-footer__brand-text">
                                <span class="site-footer__name">
                                    Godfrey Emmanuel
                                </span>

                                <span class="site-footer__role">
                                    Frontend Developer
                                </span>
                            </span>
                        </a>

                        <p class="site-footer__description">
                            Building thoughtful, responsive interfaces
                            with clean and maintainable frontend code.
                        </p>

                    </div>

                    <div class="site-footer__group">

                        <h3 class="site-footer__heading">
                            Navigation
                        </h3>

                        <nav
                            class="site-footer__navigation"
                            aria-label="Footer navigation"
                        >
                            <ul class="site-footer__list">
                                ${footerNavigation
                                    .map(
                                        (item) => `
                                            <li>
                                                <a
                                                    href="${item.href}"
                                                    class="site-footer__link"
                                                >
                                                    ${item.label}
                                                </a>
                                            </li>
                                        `,
                                    )
                                    .join("")}
                            </ul>
                        </nav>

                    </div>

                    <div class="site-footer__group">

                        <h3 class="site-footer__heading">
                            Connect
                        </h3>

                        <div class="site-footer__social">

                            <a
                                href="https://github.com/JTech-del"
                                class="site-footer__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                ${renderGithubIcon()}

                                <span>GitHub</span>
                            </a>

                        </div>

                    </div>

                </div>

                <div class="site-footer__bottom">

                    <p class="site-footer__copyright">
                        &copy; ${new Date().getFullYear()}
                        Godfrey Emmanuel. All rights reserved.
                    </p>

                    <p class="site-footer__built">
                        Built with
                        <span>HTML</span>,
                        <span>CSS</span> &
                        <span>JavaScript</span>
                    </p>

                </div>

            </div>

        </footer>
    `;

    window.lucide?.createIcons();

    return footer;
};

export { renderFooter };
