const navToggleButton = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

/* Mobile navigation */
if (navToggleButton && siteNav) {
  navToggleButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");

    navToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav) {
      siteNav.classList.remove("is-open");
    }

    if (navToggleButton) {
      navToggleButton.setAttribute("aria-expanded", "false");
    }
  });
});

/* Hide header while scrolling down */
let lastScrollY = window.scrollY;

if (siteHeader) {
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    const shouldHideHeader = isScrollingDown && currentScrollY > 120;

    siteHeader.classList.toggle("is-hidden", shouldHideHeader);

    if (shouldHideHeader && siteNav) {
      siteNav.classList.remove("is-open");
    }

    if (shouldHideHeader && navToggleButton) {
      navToggleButton.setAttribute("aria-expanded", "false");
    }

    lastScrollY = currentScrollY;
  });
}

/* Experience tabs */
function initExperienceTabs() {
  const experienceTabs = document.querySelectorAll(".experience-tab");
  const experiencePanels = document.querySelectorAll(".experience-panel");

  if (!experienceTabs.length || !experiencePanels.length) {
    return;
  }

  experienceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.experienceTarget;
      const targetPanel = document.querySelector(
        `[data-experience-panel="${target}"]`
      );

      if (!targetPanel) {
        return;
      }

      experienceTabs.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      experiencePanels.forEach((panel) => {
        panel.classList.remove("is-active");
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      targetPanel.classList.add("is-active");
    });
  });
}

initExperienceTabs();
