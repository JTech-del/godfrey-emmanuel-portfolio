import { journey } from "../../data/journey/journeyData.js";

const renderJourney = () => {
        const journeyContainer = document.querySelector("#journey");

        if (!journeyContainer) {
            throw new Error("Journey mount point #journey was not found.");
        }

        journeyContainer.innerHTML = `
    <div>
      <p>Journey section</p>

      <ul>
        ${journey
          .map(
            (item) => `
              <li>
                <span>${item.period}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  `;
};

export { renderJourney };