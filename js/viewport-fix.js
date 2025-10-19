// viewport-fix.js
// ================================
// Устанавливает CSS-переменную --vh равной высоте окна минус высоту .hero-main.
// После первого скролла значение фиксируется.
// ================================

let isVhLocked = false;

function updateVhVariable() {
  if (isVhLocked) return;

  const hero = document.querySelector(".hero-main");
  if (!hero) return;

  const windowHeight = window.innerHeight;
  const heroHeight = hero.offsetHeight;
  const remainingHeight = windowHeight - heroHeight;

  // Не даём уйти в отрицательные значения
  const safeHeight = Math.max(0, remainingHeight);

  document.documentElement.style.setProperty("--vh", `${safeHeight}px`);
}

// Первичная установка после загрузки
window.addEventListener("load", updateVhVariable);

// Обновляем при изменении ориентации или ресайзе
window.addEventListener("resize", updateVhVariable, { passive: true });
window.addEventListener("orientationchange", updateVhVariable, { passive: true });

// После первого скролла фиксируем значение
window.addEventListener(
  "scroll",
  () => {
    isVhLocked = true;
  },
  { once: true, passive: true }
);
