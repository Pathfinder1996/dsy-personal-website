const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileCareerGoal = document.querySelector("#profile-career-goal");
const profileResume = document.querySelector("#profile-resume");
const profileLinks = document.querySelector("#profile-links");
const profileAvatar = document.querySelector("#profile-avatar");

if (profileName && profileData.name) {
  profileName.textContent = profileData.name;
}

if (profileDescription && profileData.description) {
  profileDescription.textContent = profileData.description;
}

if (profileCareerGoal && profileData.careerGoal) {
  profileCareerGoal.textContent = profileData.careerGoal;
}

if (profileResume && profileData.resumeUrl) {
  profileResume.href = profileData.resumeUrl;
}

if (profileAvatar && profileData.avatar) {
  profileAvatar.src = profileData.avatar.src;
  profileAvatar.alt = profileData.avatar.alt;
}

function getProfileIcon(link) {
  if (typeof icons === "undefined") {
    return link.name;
  }

  return icons[link.icon] || link.name;
}

if (profileLinks && profileData.links) {
  profileLinks.innerHTML = profileData.links
    .map((link) => {
      return `
        <a
          class="hero-icon-link"
          href="${link.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${link.name}"
          title="${link.name}"
        >
          <span class="hero-icon" aria-hidden="true">
            ${getProfileIcon(link)}
          </span>
        </a>
      `;
    })
    .join("");
}
