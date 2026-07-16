"use strict";
/*
   Git Guide — Documentação Interativa
 
   Este arquivo controla:
  - renderização dos cartões;
  - pesquisa;
  - filtros;
  - cópia dos comandos;
  - estatísticas;
  - tema claro e escuro;
  - mensagens de estado.
 */

document.addEventListener("DOMContentLoaded", () => {

/*
    =========================================================
    VALIDAÇÃO DA BASE DE DADOS
    =========================================================
*/
  const commands = window.gitCommands;
  if (!Array.isArray(commands)) {
    console.error(
      "A base de dados window.gitCommands não foi encontrada."
    );
    return;
  }

/*
     =========================================================
     ELEMENTOS DO HTML
     =========================================================
*/
  const commandsGrid = document.querySelector("#commands-grid");
  const searchInput = document.querySelector("#command-search");
  const clearSearchButton = document.querySelector(
    "#clear-search-button"
  );
  const categoryFilters = document.querySelector(
    "#category-filters"
  );
  const levelFilters = document.querySelector("#level-filters");
  const resultsMessage = document.querySelector(
    "#results-message"
  );
  const emptyState = document.querySelector("#empty-state");
  const resetFiltersButton = document.querySelector(
    "#reset-filters-button"
  );
  const totalCommandsElement = document.querySelector(
    "#total-commands"
  );
  const totalCategoriesElement = document.querySelector(
    "#total-categories"
  );
  const themeButton = document.querySelector("#theme-button");
  const themeIcon = document.querySelector("#theme-icon");
  const copyToast = document.querySelector("#copy-toast");
/*
    =========================================================
    ESTADO DA APLICAÇÃO
    =========================================================
*/
  const state = {
    searchTerm: "",
    activeCategory: "todos",
    activeLevel: "todos",
  };
/*
     =========================================================
     NOMES APRESENTADOS AO USUÁRIO
     =========================================================
*/
  const categoryLabels = {
    configuracao: "Configuração",
    alteracoes: "Alterações",
    branches: "Branches",
    remotos: "Remotos",
    historico: "Histórico",
    desfazer: "Desfazer",
  };
  const levelLabels = {
    basico: "Básico",
    intermediario: "Intermediário",
    avancado: "Avançado",
  };
  const levelClasses = {
    basico: "basic",
    intermediario: "intermediate",
    avancado: "advanced",
  };
/*
    =========================================================
    FUNÇÕES AUXILIARES
    =========================================================

   - Converte o texto para minúsculas e remove acentos.
   
   - Exemplo:
   - "Configuração" se transforma em "configuracao".
*/
  function normalizeText(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }
/*
   - Protege os textos inseridos no HTML.
   
   - Isso evita que caracteres como < e > sejam interpretados
   - como elementos HTML.
*/
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
/*
      - Produz uma mensagem com singular ou plural.
*/
  function createResultsMessage(total) {
    if (total === 0) {
      return "Nenhum comando encontrado.";
    }
    if (total === 1) {
      return "1 comando encontrado.";
    }
    return `${total} comandos encontrados.`;
  }
/*
    =========================================================
    CRIAÇÃO DOS CARTÕES
    =========================================================
*/
  function createCommandCard(commandItem) {
    const categoryLabel =
      categoryLabels[commandItem.category] ??
      commandItem.category;
    const levelLabel =
      levelLabels[commandItem.level] ?? commandItem.level;
    const levelClass =
      levelClasses[commandItem.level] ?? "";
    const dangerousBadge = commandItem.dangerous
      ? `
        <span class="command-badge dangerous">
          Atenção
        </span>
      `
      : "";
    const warningContent =
      commandItem.dangerous && commandItem.warning
        ? `
          <div class="command-warning">
            <strong>Atenção:</strong>
            ${escapeHtml(commandItem.warning)}
          </div>
        `
        : "";
    return `
      <article
        class="command-card"
        id="${escapeHtml(commandItem.id)}"
      >
        <header class="command-card-header">
          <div>
            <h3 class="command-card-title">
              ${escapeHtml(commandItem.title)}
            </h3>
            <div class="command-badges">
              <span class="command-badge">
                ${escapeHtml(categoryLabel)}
              </span>
              <span class="command-badge ${levelClass}">
                ${escapeHtml(levelLabel)}
              </span>
              ${dangerousBadge}
            </div>
          </div>
        </header>
        <p class="command-description">
          ${escapeHtml(commandItem.description)}
        </p>
        ${warningContent}
        <div class="command-code-wrapper">
          <code class="command-code">
            ${escapeHtml(commandItem.command)}
          </code>
          <button
            class="copy-button"
            type="button"
            data-command-id="${escapeHtml(commandItem.id)}"
            aria-label="Copiar o comando ${escapeHtml(
              commandItem.command
            )}"
          >
            Copiar
          </button>
        </div>
        <p class="command-example">
          <strong>Exemplo:</strong>
          <code>${escapeHtml(commandItem.example)}</code>
        </p>
      </article>
    `;
  }
/*
     =========================================================
     PESQUISA E FILTROS
     =========================================================
*/
  function commandMatchesSearch(commandItem) {
    if (!state.searchTerm) {
      return true;
    }
    const searchableContent = [
      commandItem.title,
      commandItem.command,
      commandItem.description,
      commandItem.example,
      commandItem.category,
      commandItem.level,
      categoryLabels[commandItem.category],
      levelLabels[commandItem.level],
      ...(commandItem.keywords ?? []),
    ]
      .map(normalizeText)
      .join(" ");
    return searchableContent.includes(
      normalizeText(state.searchTerm)
    );
  }
  function commandMatchesCategory(commandItem) {
    return (
      state.activeCategory === "todos" ||
      commandItem.category === state.activeCategory
    );
  }
  function commandMatchesLevel(commandItem) {
    return (
      state.activeLevel === "todos" ||
      commandItem.level === state.activeLevel
    );
  }
  function getFilteredCommands() {
    return commands.filter((commandItem) => {
      return (
        commandMatchesSearch(commandItem) &&
        commandMatchesCategory(commandItem) &&
        commandMatchesLevel(commandItem)
      );
    });
  }
/*
      =========================================================
      RENDERIZAÇÃO DOS RESULTADOS
      =========================================================
*/
  function renderCommands() {
    const filteredCommands = getFilteredCommands();

    commandsGrid.innerHTML = filteredCommands
      .map(createCommandCard)
      .join("");

    resultsMessage.textContent = createResultsMessage(
      filteredCommands.length
    );
    const hasResults = filteredCommands.length > 0;
    commandsGrid.hidden = !hasResults;
    emptyState.hidden = hasResults;
  }
/*
     =========================================================
     ESTATÍSTICAS
     =========================================================
*/
  function updateStatistics() {
    const categories = new Set(
      commands.map((commandItem) => commandItem.category)
    );
    totalCommandsElement.textContent = String(commands.length);
    totalCategoriesElement.textContent = String(categories.size);
  }
/*
   =========================================================
   ESTADO VISUAL DOS FILTROS
   =========================================================
*/
  function updateFilterButtons(container, activeValue, dataName) {
    const buttons = container.querySelectorAll(
      `.filter-button[data-${dataName}]`
    );
    buttons.forEach((button) => {
      const buttonValue = button.dataset[dataName];
      const isActive = buttonValue === activeValue;
      button.classList.toggle("active", isActive);
      button.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });
  }
  function resetFilters() {
    state.searchTerm = "";
    state.activeCategory = "todos";
    state.activeLevel = "todos";
    searchInput.value = "";
    clearSearchButton.hidden = true;
    updateFilterButtons(
      categoryFilters,
      state.activeCategory,
      "category"
    );
    updateFilterButtons(
      levelFilters,
      state.activeLevel,
      "level"
    );
    renderCommands();
    searchInput.focus();
  }
/*
    =========================================================
    PESQUISA
    =========================================================
*/
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    clearSearchButton.hidden =
      event.target.value.length === 0;
    renderCommands();
  });
  clearSearchButton.addEventListener("click", () => {
    state.searchTerm = "";
    searchInput.value = "";
    clearSearchButton.hidden = true;
    renderCommands();
    searchInput.focus();
  });
/*
    =========================================================
    FILTRO POR CATEGORIA
    =========================================================
*/
  categoryFilters.addEventListener("click", (event) => {
    const selectedButton = event.target.closest(
      "[data-category]"
    );
    if (!selectedButton) {
      return;
    }
    state.activeCategory = selectedButton.dataset.category;

    updateFilterButtons(
      categoryFilters,
      state.activeCategory,
      "category"
    );
    renderCommands();
  });
/*
     =========================================================
     FILTRO POR NÍVEL
     =========================================================
*/
  levelFilters.addEventListener("click", (event) => {
    const selectedButton = event.target.closest("[data-level]");
    if (!selectedButton) {
      return;
    }
    state.activeLevel = selectedButton.dataset.level;
    updateFilterButtons(
      levelFilters,
      state.activeLevel,
      "level"
    );
    renderCommands();
  });
  resetFiltersButton.addEventListener("click", resetFilters);
/*
     =========================================================
     NOTIFICAÇÃO DE CÓPIA
     =========================================================
*/
  let toastTimer;
  function showToast(message) {
    window.clearTimeout(toastTimer);
    copyToast.textContent = message;
    copyToast.hidden = false;
    toastTimer = window.setTimeout(() => {
      copyToast.hidden = true;
    }, 2200);
  }
/*
    =========================================================
    CÓPIA DOS COMANDOS
    =========================================================
*/
  async function copyText(text) {
    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const temporaryTextarea =
    document.createElement("textarea");
    temporaryTextarea.value = text;
    temporaryTextarea.setAttribute("readonly", "");
    temporaryTextarea.style.position = "fixed";
    temporaryTextarea.style.opacity = "0";
    document.body.appendChild(temporaryTextarea);
    temporaryTextarea.select();
    const copyWasSuccessful =
    document.execCommand("copy");
    temporaryTextarea.remove();
    if (!copyWasSuccessful) {
      throw new Error("Não foi possível copiar o comando.");
    }
  }
  commandsGrid.addEventListener("click", async (event) => {
    const copyButton = event.target.closest(".copy-button");
    if (!copyButton) {
      return;
    }
    const commandId = copyButton.dataset.commandId;
    const selectedCommand = commands.find(
      (commandItem) => commandItem.id === commandId
    );
    if (!selectedCommand) {
      showToast("Comando não encontrado.");
      return;
    }
    const originalButtonText = copyButton.textContent;
    try {
      await copyText(selectedCommand.command);
      copyButton.textContent = "Copiado!";
      showToast("Comando copiado!");
      window.setTimeout(() => {
        copyButton.textContent = originalButtonText;
      }, 1500);
    } catch (error) {
      console.error(error);
      showToast(
        "Não foi possível copiar. Selecione o comando manualmente."
      );
    }
  });
/*
    =========================================================
    TEMA CLARO E ESCURO
    =========================================================
*/
  const themeStorageKey = "git-guide-theme";
  const systemThemePreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );
  function getStoredTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (error) {
      console.warn(
        "Não foi possível acessar a preferência de tema.",
        error
      );
      return null;
    }
  }
  function storeTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
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
    themeButton.setAttribute(
      "aria-label",
      isDarkTheme
        ? "Ativar tema claro"
        : "Ativar tema escuro"
    );
    themeButton.setAttribute(
      "title",
      isDarkTheme
        ? "Ativar tema claro"
        : "Ativar tema escuro"
    );
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
  systemThemePreference.addEventListener(
    "change",
    (event) => {
      const storedTheme = getStoredTheme();
      if (storedTheme) {
        return;
      }
      applyTheme(event.matches ? "dark" : "light");
    }
  );
/*
    =========================================================
    INICIALIZAÇÃO
    =========================================================
*/
  applyTheme(getInitialTheme());
  updateStatistics();
  renderCommands();
});