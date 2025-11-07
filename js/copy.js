const copyBtn = document.getElementById("copyLocation");
const textToCopy = document.getElementById("textCopyLocation");

copyBtn.addEventListener("click", () => {
  const text = textToCopy.textContent.trim(); // берём текст из <p>
  navigator.clipboard
    .writeText(text)
    .then(() => {
      //console.log("Скопировано:", text);
    })
    .catch((err) => {
      //console.error("Ошибка копирования:", err);
    });
});
