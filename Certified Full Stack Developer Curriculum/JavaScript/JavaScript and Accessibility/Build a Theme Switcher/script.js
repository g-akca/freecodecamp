const themes = [
  {
    name: "light",
    message: "This is light mode."
  },
  {
    name: "dark",
    message: "This is dark mode."
  },
  {
    name: "ocean",
    message: "This is ocean mode."
  }
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById(themeSwitcherButton.getAttribute("aria-controls"));

themeSwitcherButton.addEventListener("click", () => {
  themeDropdown.hidden = !themeDropdown.hidden;
  if (!themeDropdown.hidden) {
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  }
  else {
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

const themeMenuItems = document.querySelectorAll("[role=\"menuitem\"");
const bodyElement = document.querySelector("body");
const statusElement = document.getElementById("status");

themeMenuItems.forEach(themeMenuItem => {
  themeMenuItem.addEventListener("click", () => {
    bodyElement.classList.remove("theme-light", "theme-dark", "theme-ocean");
    bodyElement.classList.add(themeMenuItem.id);
    statusElement.innerText = themes.find(theme => theme.name == themeMenuItem.innerText.toLowerCase()).message;
  });
});