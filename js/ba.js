//const ba = document.getElementById("BA");
const elementsddd = document.querySelectorAll(".section-title");

//ba.addEventListener("click", bab);

//function bab() {
//  elementsddd.forEach((el) => {
//    el.classList.toggle("dech-hiden");
//  });
//}

const sMin = document.getElementById("smin");
const sPlus = document.getElementById("splus");

let scaleDate = 600;

sMin.addEventListener("click", Min);
function Min() {
  elementsddd.forEach((el) => {
    scaleDate = scaleDate - 100;
    el.style.fontWeight = `${scaleDate}`;
  });
}
sPlus.addEventListener("click", Plus);
function Plus() {
  elementsddd.forEach((el) => {
    scaleDate = scaleDate + 100;
    el.style.fontWeight = `${scaleDate}`;
  });
}
