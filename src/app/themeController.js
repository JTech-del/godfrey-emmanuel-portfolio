const THEME_STORAGE_KEY = "portfolio-theme";

const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
};

const getStoredTheme = () => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    return storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : null;
};

const getCurrentTheme = () => {
    return (
        document.documentElement.getAttribute("data-theme") ||
        getStoredTheme() ||
        getSystemTheme()
    );
};

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
};

const initializeTheme = () => {
    const theme = getStoredTheme() || getSystemTheme();

    applyTheme(theme);

    return theme;
};

const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    return nextTheme;
};

export {
    initializeTheme,
    toggleTheme,
    getCurrentTheme,
};