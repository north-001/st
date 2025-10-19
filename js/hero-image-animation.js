document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-image-main img");
  const indicators = document.querySelectorAll(".indicator");
  const indicatorsBlock = document.querySelector(".hero-image-indicators");

  const slideInterval = 5000; // длительность одного слайда
  let currentIndex = 0;

  let slideTimer;
  let progressRAF;
  let startTime;
  let pausedTime = 0;
  let isPaused = false;
  let scrollTimeout;

  function showSlide(index) {
    slides.forEach((slide, i) =>
      slide.classList.toggle("active", i === index)
    );
    indicators.forEach((dot, i) =>
      dot.classList.toggle("active", i === index)
    );
    resetProgress();
  }

  function resetProgress() {
    startTime = performance.now();
    pausedTime = 0;
    cancelAnimationFrame(progressRAF);
    updateProgress();
  }

  function updateProgress() {
    if (isPaused) return; // если на паузе — ничего не обновляем

    const elapsed = performance.now() - startTime - pausedTime;
    let progress = Math.min((elapsed / slideInterval) * 100, 100);

    indicatorsBlock.style.setProperty("--progress-width", `${progress}%`);
    indicatorsBlock.style.setProperty("--progress-opacity", 1 - progress / 100);

    if (progress < 100) {
      progressRAF = requestAnimationFrame(updateProgress);
    } else {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  }

  function pauseCarousel() {
    if (isPaused) return;
    isPaused = true;
    clearTimeout(slideTimer);
    cancelAnimationFrame(progressRAF);
    pauseStart = performance.now();
  }

  function resumeCarousel() {
    if (!isPaused) return;
    isPaused = false;
    pausedTime += performance.now() - pauseStart;
    updateProgress();
  }

  // --- Пауза при скролле ---
  window.addEventListener("scroll", () => {
    pauseCarousel();
    clearTimeout(scrollTimeout);

    // Возобновить через 1 секунду после остановки скролла
    scrollTimeout = setTimeout(() => {
      resumeCarousel();
    }, 100);
  });

  // Клик по индикатору — перейти к слайду
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // --- CSS для прогресс-бара ---
  const style = document.createElement("style");
  style.innerHTML = `
    .hero-image-indicators::after {
      content: "";
      display: block;
      height: 1px;
      background: #fff;
      width: var(--progress-width, 0%);
      opacity: var(--progress-opacity, 1);
      transition: none;
    }
  `;
  document.head.appendChild(style);

  // --- Запуск ---
  showSlide(currentIndex);
});
