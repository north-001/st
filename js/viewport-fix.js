// viewport-fix.js
// ================================
// Исправляет проблему 100vh на мобильных устройствах.
// Устанавливает CSS-переменную --vh равной 1% от внутренней высоты окна.
// После первого скролла высота «фиксируется».
// ================================

let isVhLocked = false;

function updateVhVariable() {
  if (isVhLocked) return;
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Первичная установка
updateVhVariable();

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
