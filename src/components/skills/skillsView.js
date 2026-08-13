import { skills } from "../../data/skills/skillsData.js";

const renderSkills = () => {
        const skillsContainer = document.querySelector("#skills");

        if (!skillsContainer) {
            throw new Error("Skills mount point #skills was not found.");
        }

        skillsContainer.innerHTML = `
    <div>
      <p>Skills section</p>

      <ul>
        ${skills
          .map(
            (skill) => `
              <li>
                <strong>${skill.name}</strong>
                <span>${skill.category}</span>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  `;
};

export { renderSkills };