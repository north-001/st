window.onload = () => {
  const cards = document.querySelectorAll(".access-error__card");
  let maxHeight = 0;

  cards.forEach((card) => {
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });

  cards.forEach((card) => {
    card.style.height = maxHeight + "px";
  });
};
