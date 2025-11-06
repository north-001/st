      const copyBtn = document.getElementById("copyBtn");
      const textToCopy = document.getElementById("textToCopy");

      copyBtn.addEventListener("click", () => {
        // Используем современный API clipboard
        navigator.clipboard
          .writeText(textToCopy.textContent)
          .then(() => {})
          .catch((err) => {});
      });