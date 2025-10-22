// viewport-fix.js
// ================================
// Устанавливает min-height для .hero-add равной оставшейся видимой высоте окна
// после вычитания высоты .hero-main.
// Работает корректно на мобильных (учитывает top bar) и десктопах.
// ================================

function updateHeroAddHeight() {
  const heroMain = document.querySelector('.hero-main');
  const heroAdd = document.querySelector('.hero-add');
  if (!heroMain || !heroAdd) return;

  const heroMainHeight = heroMain.offsetHeight;
  const viewportHeight = window.innerHeight; // учитывает мобильную top bar
  const remainingHeight = viewportHeight - heroMainHeight;

  heroAdd.style.minHeight = `${remainingHeight}px`;
}

// Первичная установка после загрузки страницы
window.addEventListener('load', () => {
  // Небольшая задержка для мобильных браузеров
  setTimeout(updateHeroAddHeight, 50);
});

// Обновление при изменении размеров окна или ориентации
//window.addEventListener('resize', updateHeroAddHeight, { passive: true });
//window.addEventListener('orientationchange', updateHeroAddHeight, { passive: true });
