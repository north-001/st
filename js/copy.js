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
