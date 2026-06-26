const aboutContainer = document.querySelector("#about-content");
const aboutAvatar = document.querySelector("#about-avatar");

if (aboutContainer) {
  aboutContainer.innerHTML = aboutData.description
    .map((paragraph) => `<p class="section-description">${paragraph}</p>`)
    .join("");
}

if (aboutAvatar && profileData.avatar) {
  aboutAvatar.src = profileData.avatar.src;
  aboutAvatar.alt = profileData.avatar.alt;
}
