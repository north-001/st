// viewport-fix.js
// ================================
// Вычисляет и задаёт min-height для .hero-add как (innerHeight - .hero-main.height)
// Пересчитывает ТОЛЬКО если resize по высоте больше 100px
// ================================

let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;




function updateHeroAddHeight() {
  const heroMain = document.querySelector('.hero-main');
  const heroAdd = document.querySelector('.hero-add');
  if (!heroMain || !heroAdd) return;

  const heroMainHeight = heroMain.offsetHeight;
  const viewportHeight = window.innerHeight;
  const remainingHeight = viewportHeight - heroMainHeight;

  heroAdd.style.minHeight = `${remainingHeight}px`;
  // обновляем сохранённые размеры
  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
}

// Первичная установка после загрузки страницы
window.addEventListener('load', () => {
  setTimeout(updateHeroAddHeight, 50);
});

  const hI = window.innerHeight;
  const hO = window.screen.height;
  const Tb = hO - hI;

function resizeRemember() {
  const hI = window.innerHeight;
  const hO = window.screen.height;
  const Tb = hO - hI;
}

window.addEventListener('load', () => {
  setTimeout(resizeRemember, 50);
});
// Обновление при resize — только если изменение больше 100px
window.addEventListener('resize', () => {
  const widthDiff = Math.abs(window.innerWidth - lastWidth);
  const heightDiff = Math.abs(window.innerHeight - lastHeight);



    //console.log(`innerHeight: ${hI}px | outerHeight: ${hO}px | top bar ≈ ${Tb}px`);

  // если окно реально изменилось по высоте более чем на 100px
  if (heightDiff > Tb || widthDiff > Tb) {
    updateHeroAddHeight();
  }
}, { passive: true });

// При смене ориентации всегда пересчитываем
window.addEventListener('orientationchange', updateHeroAddHeight, { passive: true });

