const MOTION_SELECTOR = "[data-motion]";

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const addMotionClasses = (elements) => {
    elements.forEach((element) => {
        element.classList.add("motion-ready");
    });
};

const showImmediately = (elements) => {
    elements.forEach((element) => {
        element.classList.add("motion-visible");
    });
};

const createObserver = () => {
    if (prefersReducedMotion()) {
        return null;
    }

    return new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("motion-visible");

                observerInstance.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        },
    );
};

let motionObserver = null;

const initializeMotion = () => {
    const elements = document.querySelectorAll(MOTION_SELECTOR);

    addMotionClasses(elements);

    motionObserver = createObserver();

    if (motionObserver) {
        elements.forEach((element) => {
            motionObserver.observe(element);
        });
    } else {
        showImmediately(elements);
    }

    document.documentElement.classList.add("motion-enabled");

    return motionObserver;
};

const observeMotionElements = (root = document) => {
    const elements = root.querySelectorAll(MOTION_SELECTOR);

    if (elements.length === 0) {
        return;
    }

    addMotionClasses(elements);

    if (prefersReducedMotion() || !motionObserver) {
        showImmediately(elements);
        return;
    }

    elements.forEach((element) => {
        motionObserver.observe(element);
    });
};

export {
    initializeMotion,
    observeMotionElements,
};