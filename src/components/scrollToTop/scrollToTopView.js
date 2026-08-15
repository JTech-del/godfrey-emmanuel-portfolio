import "./scrollToTop.css";

const renderScrollToTop = () => {
    const app = document.querySelector("#app");

    if (!app) {
        throw new Error("Application mount point #app was not found.");
    }

    const existingButton = document.querySelector(
        ".scroll-to-top",
    );

    if (existingButton) {
        return;
    }

    const button = document.createElement("button");

    button.type = "button";
    button.className = "scroll-to-top";
    button.setAttribute(
        "aria-label",
        "Scroll to top",
    );
    button.setAttribute(
        "title",
        "Scroll to top",
    );

    button.innerHTML = `
        <i data-lucide="arrow-up"></i>
    `;

    app.appendChild(button);

    const updateVisibility = () => {
        const shouldShow = window.scrollY > 500;

        button.classList.toggle(
            "scroll-to-top--visible",
            shouldShow,
        );
    };

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    window.addEventListener(
        "scroll",
        updateVisibility, { passive: true },
    );

    updateVisibility();

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

export { renderScrollToTop };