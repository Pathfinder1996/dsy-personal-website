const experienceTabList = document.querySelector("#experience-tab-list");
const experienceContent = document.querySelector("#experience-content");

if (experienceTabList && experienceContent) {
  experienceTabList.innerHTML = experienceData
    .map((item, index) => {
      const isActive = index === 0;

      return `
        <button
          class="experience-tab${isActive ? " is-active" : ""}"
          type="button"
          role="tab"
          aria-selected="${String(isActive)}"
          data-experience-target="${item.id}"
        >
          ${item.tabTitle}
        </button>
      `;
    })
    .join("");

  experienceContent.innerHTML = experienceData
    .map((item, index) => {
      const isActive = index === 0;
      const details = item.details
        .map((detail) => `<li>${detail}</li>`)
        .join("");

      return `
        <article
          class="experience-panel${isActive ? " is-active" : ""}"
          data-experience-panel="${item.id}"
        >
          <h3>
            ${item.degree}
          </h3>

          <p class="experience-period">${item.period}</p>

          <ul class="experience-list">
            ${details}
          </ul>
        </article>
      `;
    })
    .join("");
}
