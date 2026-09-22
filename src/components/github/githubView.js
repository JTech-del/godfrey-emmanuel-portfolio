
import "./github.css";

import { githubConfig } from "../../data/github/githubConfig.js";
import { getGithubData } from "../../controllers/githubController.js";
import { observeMotionElements } from "../../app/motionController.js";

const renderGithubIcon = (className = "") => `
    <svg
        class="${className}"
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

const renderGithub = () => {
    const github = document.querySelector("#github");

    if (!github) {
        throw new Error("GitHub mount point #github was not found.");
    }

    github.innerHTML = `
        <section
            class="github section"
            aria-labelledby="github-title"
        >
            <div class="container">

                <div class="github__header">
                    <div>

                        <p class="github__eyebrow">
                            ${renderGithubIcon("github__eyebrow-icon")}

                            <span>GitHub</span>
                        </p>

                        <h2
                            id="github-title"
                            class="github__title"
                        >
                            Built in public.
                        </h2>

                    </div>

                    <p class="github__intro">
                        Explore the repositories behind my projects,
                        experiments, and ongoing development work.
                    </p>
                </div>

                <div
                    class="github__content"
                    data-github-content
                    aria-live="polite"
                >
                    <div class="github__loading">
                        <span
                            class="github__loading-indicator"
                            aria-hidden="true"
                        ></span>

                        <span>
                            Loading repositories...
                        </span>
                    </div>
                </div>

                <div class="github__profile">
                    <a
                        href="${githubConfig.profile.url}"
                        class="github__profile-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>
                            View GitHub profile
                        </span>

                        <i
                            data-lucide="arrow-up-right"
                            aria-hidden="true"
                        ></i>
                    </a>
                </div>

            </div>
        </section>
    `;

    window.lucide?.createIcons();

    loadGithubRepositories(github);
};

const loadGithubRepositories = async (github) => {
    const content = github.querySelector(
        "[data-github-content]",
    );

    if (!content) {
        return;
    }

    const result = await getGithubData();

    if (!result.success) {
        content.innerHTML = `
            <div class="github__state">
                <div class="github__state-icon">
                    ${renderGithubIcon("github__state-icon-svg")}
                </div>

                <h3>
                    GitHub activity is temporarily unavailable.
                </h3>

                <p>
                    You can still explore the repositories directly
                    from my GitHub profile.
                </p>
            </div>
        `;

        window.lucide?.createIcons();

        return;
    }

    const repositories = result.data.repositories;

    if (repositories.length === 0) {
        content.innerHTML = `
            <div class="github__state">
                <div class="github__state-icon">
                    <i
                        data-lucide="folder-git-2"
                        aria-hidden="true"
                    ></i>
                </div>

                <h3>
                    No public repositories found.
                </h3>

                <p>
                    Repository activity will appear here when
                    public repositories are available.
                </p>
            </div>
        `;

        window.lucide?.createIcons();

        return;
    }

    content.innerHTML = `
        <div class="github__grid">
            ${repositories
                .map(
                    (repository, index) => `
                        <article
                            class="github-card"
                            data-motion="fade-up"
                            data-motion-delay="${Math.min(
                                index + 1,
                                6,
                            )}"
                        >
                            <div class="github-card__top">

                                <div class="github-card__icon">
                                    ${renderGithubIcon(
                                        "github-card__icon-svg",
                                    )}
                                </div>

                                <span class="github-card__visibility">
                                    ${repository.private ? "Private" : "Public"}
                                </span>

                            </div>

                            <h3 class="github-card__title">
                                ${escapeHtml(repository.name)}
                            </h3>

                            <p class="github-card__description">
                                ${escapeHtml(
                                    repository.description ||
                                        "No repository description available.",
                                )}
                            </p>

                            <div class="github-card__meta">

                                <span>
                                    <i
                                        data-lucide="star"
                                        aria-hidden="true"
                                    ></i>
                                    ${repository.stargazers_count}
                                </span>

                                <span>
                                    <i
                                        data-lucide="git-fork"
                                        aria-hidden="true"
                                    ></i>
                                    ${repository.forks_count}
                                </span>

                                ${
                                    repository.language
                                        ? `
                                            <span>
                                                <i
                                                    data-lucide="code-2"
                                                    aria-hidden="true"
                                                ></i>
                                                ${escapeHtml(
                                                    repository.language,
                                                )}
                                            </span>
                                        `
                                        : ""
                                }

                            </div>

                            <a
                                href="${repository.html_url}"
                                class="github-card__link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View ${escapeHtml(
                                    repository.name,
                                )} repository on GitHub"
                            >
                                <span>
                                    View repository
                                </span>

                                <i
                                    data-lucide="arrow-up-right"
                                    aria-hidden="true"
                                ></i>
                            </a>

                        </article>
                    `,
                )
                .join("")}
        </div>
    `;

    window.lucide?.createIcons();

    observeMotionElements(content);
};

const escapeHtml = (value) => {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
};

export {
    renderGithub,
};
