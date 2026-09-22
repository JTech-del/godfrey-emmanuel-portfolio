import { githubConfig } from "../data/github/githubConfig.js";

const GITHUB_API_BASE_URL = "https://api.github.com";

const fetchGithubRepositories = async () => {
    const response = await fetch(
        `${GITHUB_API_BASE_URL}/users/${githubConfig.username}/repos?sort=updated&per_page=6`,
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
        },
    );

    if (!response.ok) {
        throw new Error(
            `GitHub API request failed with status ${response.status}.`,
        );
    }

    return response.json();
};

const getGithubData = async () => {
    try {
        const repositories = await fetchGithubRepositories();

        return {
            success: true,
            data: {
                repositories,
            },
            error: null,
        };
    } catch (error) {
        console.error("GitHub data request failed:", error);

        return {
            success: false,
            data: {
                repositories: [],
            },
            error: error.message,
        };
    }
};

export {
    getGithubData,
};