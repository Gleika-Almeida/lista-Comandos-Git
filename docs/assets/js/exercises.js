"use strict";

/*
 * Git Guide — Exercícios interativos
 *
 * Responsabilidades:
 * - registrar exercícios concluídos;
 * - atualizar a barra de progresso;
 * - salvar o progresso no localStorage;
 * - permitir reiniciar o progresso.
 */

document.addEventListener("DOMContentLoaded", () => {
  const exerciseCheckboxes = document.querySelectorAll(
    ".exercise-complete"
  );

  const completedExercisesElement = document.querySelector(
    "#completed-exercises"
  );

  const totalExercisesElement = document.querySelector(
    "#total-exercises"
  );

  const progressBar = document.querySelector(
    "#exercise-progress-bar"
  );

  const progressStatus = document.querySelector(
    "#exercise-progress-status"
  );

  const resetProgressButton = document.querySelector(
    "#reset-progress-button"
  );

  if (
    exerciseCheckboxes.length === 0 ||
    !completedExercisesElement ||
    !totalExercisesElement ||
    !progressBar ||
    !progressStatus ||
    !resetProgressButton
  ) {
    console.warn(
      "Os elementos necessários para controlar os exercícios não foram encontrados."
    );

    return;
  }

  const storageKey = "git-guide-exercises-progress";
  const totalExercises = exerciseCheckboxes.length;

  function getStoredProgress() {
    try {
      const storedValue = localStorage.getItem(storageKey);

      if (!storedValue) {
        return [];
      }

      const parsedValue = JSON.parse(storedValue);

      return Array.isArray(parsedValue) ? parsedValue : [];
    } catch (error) {
      console.warn(
        "Não foi possível consultar o progresso salvo.",
        error
      );

      return [];
    }
  }

  function storeProgress(completedExerciseIds) {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify(completedExerciseIds)
      );
    } catch (error) {
      console.warn(
        "Não foi possível salvar o progresso.",
        error
      );
    }
  }

  function getCompletedExerciseIds() {
    return Array.from(exerciseCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.dataset.exerciseId);
  }

  function createProgressMessage(completedCount) {
    if (completedCount === 0) {
      return "Nenhum exercício concluído ainda.";
    }

    if (completedCount === totalExercises) {
      return "Parabéns! Todos os exercícios foram concluídos.";
    }

    if (completedCount === 1) {
      return `1 de ${totalExercises} exercícios concluído.`;
    }

    return `${completedCount} de ${totalExercises} exercícios concluídos.`;
  }

  function updateProgress() {
    const completedExerciseIds = getCompletedExerciseIds();
    const completedCount = completedExerciseIds.length;

    const progressPercentage = Math.round(
      (completedCount / totalExercises) * 100
    );

    completedExercisesElement.textContent =
      String(completedCount);

    totalExercisesElement.textContent =
      String(totalExercises);

    progressBar.style.width = `${progressPercentage}%`;

    progressBar.parentElement.setAttribute(
      "aria-valuenow",
      String(progressPercentage)
    );

    progressStatus.textContent =
      createProgressMessage(completedCount);

    storeProgress(completedExerciseIds);
  }

  function restoreProgress() {
    const storedExerciseIds = new Set(getStoredProgress());

    exerciseCheckboxes.forEach((checkbox) => {
      checkbox.checked = storedExerciseIds.has(
        checkbox.dataset.exerciseId
      );
    });

    updateProgress();
  }

  exerciseCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });

  resetProgressButton.addEventListener("click", () => {
    exerciseCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    updateProgress();

    document.querySelector("#progresso")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  restoreProgress();
});