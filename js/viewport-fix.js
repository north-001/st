// viewport-fix.js
// ================================
// Устанавливает min-height для .hero-add равной оставшейся видимой высоте окна
// после вычитания высоты .hero-main.
// Работает корректно на мобильных (учитывает top bar) и десктопах.
// ================================

// Устанавливаем переменную --hero-main-height один раз
function updateHeroMainHeight() {
  const heroMain = document.querySelector('.hero-main');
  if (!heroMain) return;

  const heroHeight = heroMain.offsetHeight;
  document.documentElement.style.setProperty('--hero-main-height', `${heroHeight}px`);
}

// Первичная установка после загрузки страницы
window.addEventListener('load', () => {
  setTimeout(updateHeroMainHeight, 50); // небольшая задержка для мобильных
});

// Обновление при изменении размеров окна или смене ориентации
window.addEventListener('resize', updateHeroMainHeight, { passive: true });
window.addEventListener('orientationchange', updateHeroMainHeight, { passive: true });

