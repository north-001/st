// viewport-fix.js
// ================================
// Вычисляет и задаёт min-height для .hero-add как (innerHeight - .hero-main.height)
// Пересчитывает ТОЛЬКО если resize по высоте больше 100px
// Добавлено: ограничение min/max высоты
// ================================

let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

// Ограничения по высоте hero-add
const MIN_HERO_ADD = 250; // можешь поменять
const MAX_HERO_ADD = 670; // можешь поменять

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function updateHeroAddHeight() {
  const heroMain = document.querySelector(".hero-main");
  const heroAdd = document.querySelector(".hero-add");
  if (!heroMain || !heroAdd) return;

  const heroMainHeight = heroMain.offsetHeight;
  const viewportHeight = window.innerHeight;

  let remainingHeight = viewportHeight - heroMainHeight;

  // применяем ограничение
  remainingHeight = clamp(remainingHeight, MIN_HERO_ADD, MAX_HERO_ADD);

  heroAdd.style.minHeight = `${remainingHeight}px`;
  heroAdd.style.maxHeight = `${MAX_HERO_ADD}px`;

  // обновляем сохранённые размеры
  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
}

// Первичная установка после загрузки страницы
window.addEventListener("load", () => {
  setTimeout(updateHeroAddHeight, 50);
});

let hI = window.innerHeight;
let hO = window.screen.height;
let Tb = hO - hI;

function resizeRemember() {
  hI = window.innerHeight;
  hO = window.screen.height;
  Tb = hO - hI;
}

window.addEventListener("load", () => {
  setTimeout(resizeRemember, 50);
});

// Обновление при resize — только если изменение превышает Tb
window.addEventListener("load", () => {
  setTimeout(() => {
    window.addEventListener(
      "resize",
      () => {
        const widthDiff = Math.abs(window.innerWidth - lastWidth);
        const heightDiff = Math.abs(window.innerHeight - lastHeight);

        if (heightDiff > Tb || widthDiff > Tb) {
          updateHeroAddHeight();
        }
      },
      { passive: true }
    );
  }, 50);
});

// При смене ориентации всегда пересчитываем
window.addEventListener("orientationchange", updateHeroAddHeight, {
  passive: true,
});



