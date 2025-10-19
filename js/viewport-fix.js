// viewport-fix.js
// ================================
// Устанавливает min-height для .hero-add равной оставшейся видимой высоте окна
// после вычитания высоты .hero-main.
// Работает корректно на мобильных (учитывает top bar) и десктопах.
// ================================

function updateHeroAddHeight() {
  const heroMain = document.querySelector(".hero-main");
  const heroAdd = document.querySelector(".hero-add");
  if (!heroMain || !heroAdd) return;

  // Используем visualViewport для мобильных, fallback на innerHeight
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  const heroMainHeight = heroMain.offsetHeight;

  // Без отрицательных значений
  const remainingHeight = Math.max(0, viewportHeight - heroMainHeight);

  heroAdd.style.minHeight = `${remainingHeight}px`;
  heroAdd.style.background = `yellow`;
}

// Первичная установка после полной загрузки
window.addEventListener("load", () => {
  // Даем небольшую задержку для мобильных браузеров, чтобы top bar точно учелся
  setTimeout(updateHeroAddHeight, 50);
});

// Обновляем при изменении размеров окна, ориентации и видимой области
window.addEventListener("resize", updateHeroAddHeight, { passive: true });
window.addEventListener("orientationchange", updateHeroAddHeight, { passive: true });
window.visualViewport?.addEventListener("resize", updateHeroAddHeight);
//window.visualViewport?.addEventListener("scroll", updateHeroAddHeight);

