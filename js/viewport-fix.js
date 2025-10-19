// viewport-fix.js
// ================================
// Устанавливает CSS-переменную --vh равной высоте окна минус высоту .hero-main.
// После первого скролла значение фиксируется.
// ================================

function updateHeroAddHeight() {
  const heroMain = document.querySelector(".hero-main");
  const heroAdd = document.querySelector(".hero-add");
  if (!heroMain || !heroAdd) return;

  const windowHeight = window.innerHeight;
  const heroMainHeight = heroMain.offsetHeight;

  // Без отрицательных значений
  const remainingHeight = Math.max(0, windowHeight - heroMainHeight);

  // Устанавливаем сразу в min-height
  heroAdd.style.minHeight = `${remainingHeight}px`;
  heroAdd.style.background = `red`;
}

// Первичная установка после загрузки
window.addEventListener("load", updateHeroAddHeight);

// Обновляем при ресайзе/смене ориентации
window.addEventListener("resize", updateHeroAddHeight, { passive: true });
window.addEventListener("orientationchange", updateHeroAddHeight, { passive: true });
