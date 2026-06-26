const projectList = document.querySelector("#project-list");

function renderProjectSkillGroup(title, skills) {
  if (!skills || skills.length === 0) {
    return "";
  }

  const skillTags = skills
    .map((skill) => `<span class="tag">${skill}</span>`)
    .join("");

  return `
    <div class="project-tech-group">
      <h4 class="project-tech-title">${title}</h4>

      <div class="tag-list project-tag-list">
        ${skillTags}
      </div>
    </div>
  `;
}

if (projectList) {
  projectList.innerHTML = projectsData
    .map((project) => {
      const links = `
        ${
          project.demoUrl
            ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">Demo ↗</a>`
            : ""
        }
        ${
          project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
            : ""
        }
      `;

      return `
        <article class="project-feature">
          <div class="project-feature-image-wrap">
            <img
              class="project-feature-image"
              src="${project.image}"
              alt="${project.alt}"
            />
          </div>

          <div class="project-feature-content">
            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-tech-list">
              ${renderProjectSkillGroup("程式語言", project.languages)}
              ${renderProjectSkillGroup("使用之函式庫", project.libraries)}
              ${renderProjectSkillGroup("技能或工具", project.tools)}
              ${renderProjectSkillGroup("相關領域", project.domains || [])}
            </div>

            ${links.trim() ? `<div class="project-links">${links}</div>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}
