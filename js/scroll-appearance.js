// scroll-appearance.js
// ================================
// Отвечает за плавное появление элементов при прокрутке.
// Элементы постепенно становятся видимыми и сдвигаются вверх,
// когда приближаются к центру экрана.
// ================================

const observedClasses = [
  "section-text",
  "section-title",
  "section-image",
  "program-item",
  "section-decor-text",
  "section-location-map",
  "section-location-maps-button",
  "dresscode-list",
  "img-fotter",
];

const animatedElements = [];
observedClasses.forEach((cls) => {
  document
    .querySelectorAll(`.${cls}`)
    .forEach((el) => animatedElements.push(el));
});

const fadeStrength = 0.8; // Чем больше, тем медленнее проявление

function updateScrollAnimations() {
  const windowHeight = window.innerHeight;

  animatedElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(windowHeight / 2 - elementCenter);

    let opacity = 1 - (distanceFromCenter / (windowHeight / 2)) * fadeStrength;
    opacity = Math.max(0, Math.min(1, opacity));

    el.style.opacity = opacity;

    if (el.classList.contains("slide-element")) {
      el.style.transform = `translateY(${50 * (1 - opacity)}px)`;
    }
  });
}

window.addEventListener("scroll", updateScrollAnimations);
window.addEventListener("load", updateScrollAnimations);
