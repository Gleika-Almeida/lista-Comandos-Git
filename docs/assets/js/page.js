"use strict";

/*
     Controla o tema claro e escuro das páginas internas.
*/

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector("#theme-button");
  const themeIcon = document.querySelector("#theme-icon");

  if (!themeButton || !themeIcon) {
    return;
  }

  const storageKey = "git-guide-theme";

  const systemThemePreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  function getStoredTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      console.warn(
        "Não foi possível consultar a preferência de tema.",
        error
      );

      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      console.warn(
        "Não foi possível salvar a preferência de tema.",
        error
      );
    }
  }

  function getInitialTheme() {
    const storedTheme = getStoredTheme();

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return systemThemePreference.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const isDarkTheme = theme === "dark";

    document.documentElement.dataset.theme = theme;

    themeIcon.textContent = isDarkTheme ? "☀️" : "🌙";

    const accessibleLabel = isDarkTheme
      ? "Ativar tema claro"
      : "Ativar tema escuro";

    themeButton.setAttribute("aria-label", accessibleLabel);
    themeButton.setAttribute("title", accessibleLabel);
  }

  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme;

    const nextTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    storeTheme(nextTheme);
  }

  themeButton.addEventListener("click", toggleTheme);

  systemThemePreference.addEventListener("change", (event) => {
    if (getStoredTheme()) {
      return;
    }

    applyTheme(event.matches ? "dark" : "light");
  });

  applyTheme(getInitialTheme());
});