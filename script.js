var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.querySelector("#dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}

window.addEventListener("DOMContentLoaded", function () {
  const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

  if (isDarkModeEnabled === "true") {
    toggleDarkMode(); // Dark mode'u açar
  }
});

function toggleDarkMode() {
  darkBtn.classList.toggle("dark-btn-on");
  const isDarkMode = darkBtn.classList.contains("dark-btn-on");

  document.documentElement.style.setProperty(
    "--secondcolor",
    isDarkMode ? "#0a0a0a" : ""
  );
  document.documentElement.style.setProperty(
    "--bgcolor",
    isDarkMode ? "#000" : ""
  );
  document.documentElement.style.setProperty(
    "--firstcolor",
    isDarkMode ? "#000" : ""
  );

  localStorage.setItem("darkModeEnabled", isDarkMode ? "true" : "false");
}

darkBtn.onclick = toggleDarkMode;
