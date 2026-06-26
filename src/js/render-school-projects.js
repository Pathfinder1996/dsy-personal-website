const schoolProjectList = document.querySelector("#school-project-list");

if (schoolProjectList) {
  schoolProjectList.innerHTML = schoolProjectsData
    .map((project) => {
      const tags = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      return `
        <article class="card">
          <div class="card-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="tag-list">
              ${tags}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}
