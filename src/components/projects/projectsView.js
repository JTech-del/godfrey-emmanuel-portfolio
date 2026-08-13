import { projects } from "../../data/projects/projectsData.js";

const renderProjects = () => {
        const projectsContainer = document.querySelector("#projects");

        if (!projectsContainer) {
            throw new Error("Projects mount point #projects was not found.");
        }

        projectsContainer.innerHTML = `
    <div>
      <p>Projects section</p>

      <ul>
        ${projects
          .map(
            (project) => `
              <li>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  `;
};

export { renderProjects };