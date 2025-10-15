// ================================
// Управляет поведением прелоадера
// ================================

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Добавляем класс для плавного исчезновения
  preloader.classList.add("hidden");

  // После окончания transition полностью скрываем элемент
  preloader.addEventListener("transitionend", () => {
    preloader.style.display = "none";
  });

  // Запускаем все остальные скрипты
  initializeAfterLoadScripts();
});

// Эта функция вызывается после загрузки и готовности DOM
function initializeAfterLoadScripts() {
}
