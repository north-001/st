// viewport-fix.js
// ================================
// Устанавливает CSS-переменную --vh равной высоте окна минус высоту .hero-main.
// После первого скролла значение фиксируется (с задержкой для стабильности на iOS).
// ================================

let isVhLocked = false;
  const heroTitle = document.querySelector(".nav-info");
  heroTitle.style.color = `red`;
function updateVhVariable() {
  if (isVhLocked) return;

  const hero = document.querySelector(".hero-main");
  if (!hero) return;

  const windowHeight = window.innerHeight;
  const heroHeight = hero.offsetHeight;
  const remainingHeight = windowHeight - heroHeight;

  // Не допускаем отрицательных значений
  const safeHeight = Math.max(0, remainingHeight);

  document.documentElement.style.setProperty("--vh", `${safeHeight}px`);
  console.log(`--vh обновлено: ${safeHeight}px`);
}

// 🔹 Первичная установка после полной загрузки страницы
window.addEventListener("load", () => {
  updateVhVariable();

  // Иногда DOM рендерится с задержкой (особенно в React/Vue)
  // Повторяем обновление через 500 мс для надёжности
  setTimeout(updateVhVariable, 500);
});

// 🔹 Обновляем при изменении размера или ориентации
window.addEventListener("resize", updateVhVariable, { passive: true });
window.addEventListener("orientationchange", updateVhVariable, { passive: true });

// 🔹 После первого скролла фиксируем значение с небольшой задержкой
window.addEventListener(
  "scroll",
  () => {
    // Даём браузеру время откорректировать innerHeight после скрытия адресной строки
    setTimeout(() => {
      isVhLocked = true;
      console.log("— Высота зафиксирована —");
    }, 300);
  },
  { once: true, passive: true }
);
