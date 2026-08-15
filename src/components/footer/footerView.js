import "./footer.css";

const footerNavigation = [{
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

const renderFooter = () => {
        const footer = document.querySelector("#footer");

        if (!footer) {
            throw new Error("Footer mount point #footer was not found.");
        }

        footer.innerHTML = `
        <footer class="site-footer">

            <div class="container">

                <div class="site-footer__main">

                    <!-- Brand -->

                    <div class="site-footer__brand">

                        <a
                            href="#hero"
                            class="site-footer__brand-link"
                            aria-label="Godfrey Emmanuel — Home"
                        >
                            <span class="site-footer__mark">
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


                    <!-- Navigation -->

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


                    <!-- Social -->

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
                                aria-label="GitHub"
                            >
                                <i data-lucide="github"></i>
                                <span>GitHub</span>
                            </a>

                            <a
                                href="#"
                                class="site-footer__social-link"
                                aria-label="LinkedIn"
                            >
                                <i data-lucide="linkedin"></i>
                                <span>LinkedIn</span>
                            </a>

                        </div>

                    </div>

                </div>


                <!-- Bottom -->

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

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

export { renderFooter };