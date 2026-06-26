const roadmapPanel = document.querySelector(".roadmap-panel");
const roadmapList = document.querySelector("#roadmap-list");
const roadmapTotalPercent = document.querySelector("#roadmap-total-percent");
const roadmapTotalBar = document.querySelector("#roadmap-total-bar");

function getRoadmapPercent(items) {
  if (!items.length) {
    return 0;
  }

  const completedCount = items.filter((item) => item.completed).length;

  return Math.round((completedCount / items.length) * 100);
}

function getRoadmapTotalPercent(data) {
  const allItems = data.flatMap((group) => group.items);

  return getRoadmapPercent(allItems);
}

function renderRoadmapItem(item) {
  return `
    <li class="roadmap-check-item${item.completed ? " is-completed" : ""}">
      <span class="roadmap-check-icon">${item.completed ? "✓" : "–"}</span>
      <span>${item.title}</span>
    </li>
  `;
}

function renderRoadmapGroup(group) {
  const percent = getRoadmapPercent(group.items);
  const completedCount = group.items.filter((item) => item.completed).length;
  const totalCount = group.items.length;

  return `
    <article class="roadmap-item">
      <button
        class="roadmap-toggle"
        type="button"
        aria-expanded="false"
      >
        <span class="roadmap-title-group">
          <span class="roadmap-icon" aria-hidden="true">
            ${icons[group.icon] || ""}
          </span>

          <span class="roadmap-title">${group.title}</span>
        </span>

        <span class="roadmap-progress-group">
          <span class="roadmap-mini-bar">
            <span style="width: ${percent}%"></span>
          </span>

          <span class="roadmap-percent">${percent}%</span>
        </span>
      </button>

      <div class="roadmap-detail">
        <div class="roadmap-detail-meta">
          <span>${completedCount} / ${totalCount} completed</span>

          ${
            group.noteUrl
              ? `<a href="${group.noteUrl}">閱讀筆記 →</a>`
              : ""
          }
        </div>

        <ul class="roadmap-check-list">
          ${group.items.map(renderRoadmapItem).join("")}
        </ul>
      </div>
    </article>
  `;
}

function closeRoadmapItem(item) {
  const toggle = item.querySelector(".roadmap-toggle");

  item.classList.remove("is-open");

  if (toggle) {
    toggle.setAttribute("aria-expanded", "false");
  }
}

function closeOtherRoadmapItems(currentItem) {
  const roadmapItems = document.querySelectorAll(".roadmap-item");

  roadmapItems.forEach((item) => {
    if (item === currentItem) {
      return;
    }

    closeRoadmapItem(item);
  });
}

function closeAllRoadmapItems() {
  const roadmapItems = document.querySelectorAll(".roadmap-item");

  roadmapItems.forEach((item) => {
    closeRoadmapItem(item);
  });
}

function initRoadmapToggles() {
  const roadmapToggles = document.querySelectorAll(".roadmap-toggle");

  roadmapToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const roadmapItem = toggle.closest(".roadmap-item");

      if (!roadmapItem) {
        return;
      }

      const isAlreadyOpen = roadmapItem.classList.contains("is-open");

      closeOtherRoadmapItems(roadmapItem);

      roadmapItem.classList.toggle("is-open", !isAlreadyOpen);
      toggle.setAttribute("aria-expanded", String(!isAlreadyOpen));
    });
  });
}

function initRoadmapAutoClose() {
  if (!roadmapPanel) {
    return;
  }

  roadmapPanel.addEventListener("pointerleave", () => {
    closeAllRoadmapItems();
  });
}

if (roadmapList) {
  const totalPercent = getRoadmapTotalPercent(roadmapData);

  roadmapTotalPercent.textContent = `${totalPercent}%`;
  roadmapTotalBar.style.width = `${totalPercent}%`;

  roadmapList.innerHTML = roadmapData.map(renderRoadmapGroup).join("");

  initRoadmapToggles();
  initRoadmapAutoClose();
}
