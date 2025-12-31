document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-image-main img");
  const indicators = document.querySelectorAll(".indicator");
  const indicatorsBlock = document.querySelector(".hero-image-indicators");

  const slideInterval = 5000; // длительность одного слайда
  const fadeDuration = 1000;  // время плавного перехода (1 секунда)
  let currentIndex = 0;

  let progressRAF;
  let fadeRAF;
  let startTime;
  let pausedTime = 0;
  let pauseStart = 0;
  let isPaused = false;
  let scrollTimeout;

  // --- Отображение слайда с плавным fade ---
  function showSlide(index) {
    cancelAnimationFrame(fadeRAF);

    const prevSlide = slides[currentIndex];
    const nextSlide = slides[index];

    slides.forEach((slide, i) => {
      slide.style.zIndex = i === currentIndex ? 1 : 0;
    });
    nextSlide.style.zIndex = 2;

    // текущее состояние opacity при старте анимации
    let startOpacityPrev = parseFloat(prevSlide.style.opacity) || 1;
    let startOpacityNext = parseFloat(nextSlide.style.opacity) || 0;

    const fadeStart = performance.now();

    function fadeStep() {
      if (isPaused) {
        fadeRAF = requestAnimationFrame(fadeStep);
        return;
      }

      const elapsed = performance.now() - fadeStart;
      const progress = Math.min(elapsed / fadeDuration, 1);

      prevSlide.style.opacity = Math.max(startOpacityPrev * (1 - progress), 0);
      nextSlide.style.opacity = Math.min(startOpacityNext + progress * (1 - startOpacityNext), 1);

      if (progress < 1) {
        fadeRAF = requestAnimationFrame(fadeStep);
      } else {
        slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? 1 : 0;
          slide.style.zIndex = i === index ? 2 : 0;
        });
        currentIndex = index;
        indicators.forEach((dot, i) =>
          dot.classList.toggle("active", i === currentIndex)
        );
        resetProgress();
      }
    }

    fadeRAF = requestAnimationFrame(fadeStep);
  }

  // --- Прогресс-бар ---
  function resetProgress() {
    startTime = performance.now();
    pausedTime = 0;
    cancelAnimationFrame(progressRAF);
    updateProgress();
  }

  function updateProgress() {
    if (isPaused) return;

    const elapsed = performance.now() - startTime - pausedTime;
    let progress = Math.min((elapsed / slideInterval) * 100, 100);

    indicatorsBlock.style.setProperty("--progress-width", `${progress}%`);
    indicatorsBlock.style.setProperty("--progress-opacity", 1 - progress / 100);

    if (progress < 100) {
      progressRAF = requestAnimationFrame(updateProgress);
    } else {
      showSlide((currentIndex + 1) % slides.length);
    }
  }

  // --- Пауза и возобновление ---
  function pauseCarousel() {
    if (isPaused) return;
    isPaused = true;
    pauseStart = performance.now();
    cancelAnimationFrame(progressRAF);
    cancelAnimationFrame(fadeRAF);
  }

  function resumeCarousel() {
    if (!isPaused) return;
    isPaused = false;
    pausedTime += performance.now() - pauseStart;
    updateProgress();
    fadeRAF = requestAnimationFrame(() => {}); // продолжение fade
  }

  // --- Пауза при скролле ---
  window.addEventListener("scroll", () => {
    pauseCarousel();
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      resumeCarousel();
    }, 200);
  });

  // --- Клик по индикатору ---
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // --- CSS для прогресс-бара ---
  const style = document.createElement("style");
  style.innerHTML = `
    .hero-image-indicators::after {
      content: "";
      display: block;
      height: 1px;
      background: var(--main-color-light-add);
      width: var(--progress-width, 0%);
      opacity: var(--progress-opacity, 1);
      transition: none;
    }
  `;
  document.head.appendChild(style);

  // --- Инициализация ---
  slides.forEach((s, i) => {
    s.style.opacity = i === 0 ? 1 : 0;
    s.style.transition = "none"; // отключаем CSS-переходы
  });

  showSlide(currentIndex);
});
