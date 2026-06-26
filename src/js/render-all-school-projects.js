const allSchoolProjectList = document.querySelector("#all-school-project-list");

if (allSchoolProjectList) {
  allSchoolProjectList.innerHTML = `
    <div class="course-table-header">
      <span>年度</span>
      <span>課程名稱</span>
      <span>使用語言與工具</span>
      <span>連結</span>
    </div>

    ${schoolProjects
      .map((project) => {
        const links = `
          ${project.noteUrl ? `<a href="${project.noteUrl}" target="_blank" rel="noopener noreferrer">↗</a>` : ""}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
        `;

        return `
          <article class="course-row">
            <div class="course-year">${project.year}</div>
            <div class="course-name">${project.course}</div>
            <div class="course-tools">${project.tools.join(" · ")}</div>
            <div class="course-links">${links}</div>
          </article>
        `;
      })
      .join("")}
  `;
}
