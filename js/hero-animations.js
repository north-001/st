// hero-animations.js
// ================================
// Отвечает за динамическое изменение отступов,
// прозрачности и масштаба элементов в блоке hero при скролле.
// ================================

const heroContainer = document.querySelector(".hero .container_content");
const heroTitle = document.querySelector(".hero-title");
const heroImage = document.querySelector(".hero-image");

if (heroContainer && heroTitle && heroImage) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = 150;
    const progress = Math.min(scrollY / maxScroll, 1);

    const contentPadding = 10 - 10 * progress;
    const titlePadding = 10 * progress;
    const titleOpacity = 1 - 0.6 * progress;
    const titleScale = 1 - 0.06 * progress;
    const imageMargin = 10 - 10 * progress;

    heroContainer.style.padding = `34px ${contentPadding}px 0 ${contentPadding}px`;
    heroTitle.style.padding = `0px ${titlePadding}px`;
    heroTitle.style.opacity = `${titleOpacity}`;
    heroTitle.style.transform = `scale(${titleScale})`;
    heroImage.style.margin = `${imageMargin}px 0`;
  });
}
