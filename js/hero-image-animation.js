   document.addEventListener("DOMContentLoaded", () => {
        const slides = document.querySelectorAll(".hero-image-main img");
        const indicators = document.querySelectorAll(".indicator");
        const indicatorsBlock = document.querySelector(
          ".hero-image-indicators"
        );

        const slideInterval = 5000; // длительность одного слайда
        let currentIndex = 0;

        let slideTimer;
        let progressRAF;
        let startTime;

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
          cancelAnimationFrame(progressRAF);
          updateProgress();
        }

        function updateProgress() {
          const elapsed = performance.now() - startTime;
          let progress = Math.min((elapsed / slideInterval) * 100, 100);

          // Ширина прогресса
          indicatorsBlock.style.setProperty("--progress-width", `${progress}%`);

          // Плавное уменьшение opacity к концу
          let opacity = 1 - progress / 100; // 1 -> 0
          indicatorsBlock.style.setProperty("--progress-opacity", opacity);

          if (progress < 100) {
            progressRAF = requestAnimationFrame(updateProgress);
          }
        }

        function startCarousel() {
          slideTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
          }, slideInterval);
        }

        function stopCarousel() {
          clearInterval(slideTimer);
          cancelAnimationFrame(progressRAF);
        }

        indicators.forEach((dot, i) => {
          dot.addEventListener("click", () => {
            stopCarousel();
            currentIndex = i;
            showSlide(currentIndex);
            startCarousel();
          });
        });

        // Динамический CSS для ::after с поддержкой opacity
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

        // Старт
        showSlide(currentIndex);
        startCarousel();
      });