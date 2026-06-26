const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileResume = document.querySelector("#profile-resume");
const profileLinks = document.querySelector("#profile-links");
const profileAvatar = document.querySelector("#profile-avatar");

if (profileName) {
  profileName.textContent = profileData.name;
}

if (profileDescription) {
  profileDescription.textContent = profileData.description;
}

if (profileResume) {
  profileResume.href = profileData.resumeUrl;
}

if (profileAvatar) {
  profileAvatar.src = profileData.avatar.src;
  profileAvatar.alt = profileData.avatar.alt;
}

if (profileLinks) {
  profileLinks.innerHTML = profileData.links
    .map((link) => {
      return `
        <a
          class="hero-icon-link"
          href="${link.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${link.name}"
        >
          <span class="hero-icon" aria-hidden="true">
            ${icons[link.icon]}
          </span>
        </a>
      `;
    })
    .join("");
}
