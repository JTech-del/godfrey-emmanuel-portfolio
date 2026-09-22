import { renderProjectCaseStudy } from "../pages/projectCaseStudy/projectCaseStudy.js";

const renderProjectRoute = () => {
    const pathname = window.location.pathname;

    const match = pathname.match(/^\/projects\/([^/]+)\/?$/);

    if (!match) {
        return false;
    }

    const slug = match[1];

    const app = document.querySelector("#app");

    if (!app) {
        throw new Error("Application root element #app was not found.");
    }

    app.innerHTML = renderProjectCaseStudy(slug);

    return true;
};

export { renderProjectRoute };
