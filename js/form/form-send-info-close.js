document.addEventListener("click", (e) => {
  if (e.target.id === "form-send-info-close-button") {
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");
    formConteiner.style.opacity = "0";
    formSendInfo.style.transform = "scale(0.96)";
    setTimeout(() => {
      formConteiner.classList.add("form-send-status-hidden");
    }, 300);
  }
});
