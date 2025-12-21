document.querySelectorAll(".copy-location").forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn
      .closest("div")
      .querySelector(".text-copy-location")
      .textContent.trim();

    navigator.clipboard.writeText(text);
  });
});
