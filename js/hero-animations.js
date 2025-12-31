// hero-animations.js
// ================================
// Отвечает за динамическое изменение отступов,
// прозрачности и масштаба элементов в блоке hero при скролле.
// ================================

  const heroImage = document.querySelector(".hero-add .container_content");
  const heroTitle = document.querySelector(".hero-header");

  const animationEnd = heroImage.getBoundingClientRect().top + window.scrollY;

if (heroImage) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = animationEnd;
    const progress = Math.min(scrollY / maxScroll, 1);

    const imagePadding = 10 - 10 * progress;
    const titleOpacity = 1 - 0.6 * progress;
    const titleScale = 1 - 0.06 * progress;


      heroImage.style.padding = `0 ${imagePadding}px ${imagePadding}px ${imagePadding}px`;
      heroTitle.style.opacity = `${titleOpacity}`;
      heroTitle.style.transform = `scale(${titleScale})`;

  });
}
