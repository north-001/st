// hero-autoscroll.js
// ================================
// Реализует автопрокрутку страницы после достижения
// определённого порога скролла.
// ================================

window.addEventListener("load", () => {
  const heroImage = document.querySelector(".hero-image");
  const heroSection = document.querySelector(".hero");

  if (!heroImage || !heroSection) return;

  const heroStart = heroImage.getBoundingClientRect().top + window.scrollY;
  const heroHeight = heroImage.getBoundingClientRect().height;
  heroImage.style.height = `${heroHeight}px`;

  const heroContainerHeight = heroSection.getBoundingClientRect().height;
  heroSection.style.height = `${heroContainerHeight * 3}px`;

  let autoScrolled = false;

  window.addEventListener("scroll", () => {
    const triggerScrollY = 180; // Порог, при котором срабатывает автоскролл
    const targetScrollY = heroStart + 200; // Куда прокручиваем

    // Сброс, если вернулись выше порога
    if (window.scrollY < triggerScrollY) autoScrolled = false;

    // Автоскролл
    if (!autoScrolled && window.scrollY >= triggerScrollY) {
      autoScrolled = true;

      // Временно блокируем прокрутку
      document.body.style.overflow = "hidden";

      // Плавно прокручиваем
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });

      // Возвращаем возможность скролла
      setTimeout(() => {
        document.body.style.overflow = "";
        window.scrollTo(0, targetScrollY);
      }, 400);
    }
  });
});
