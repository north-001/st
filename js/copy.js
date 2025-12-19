const copyBtn = document.getElementById("copyLocation");
const textToCopy = document.getElementById("textCopyLocation");

copyBtn.addEventListener("click", () => {
  const text = textToCopy.textContent.trim();
  navigator.clipboard
    .writeText(text)
    .then(() => {
      //console.log("--", text);
    })
    .catch((err) => {
      //console.error("--", err);
    });
});

document.querySelectorAll(".copy-location").forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn
      .closest("div")
      .querySelector(".text-copy-location")
      .textContent.trim();

    navigator.clipboard.writeText(text);
  });
});
