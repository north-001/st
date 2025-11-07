const ba = document.getElementById("BA");
const elementsddd = document.querySelectorAll(".dech");

ba.addEventListener("click", bab);

function bab() {
  elementsddd.forEach((el) => {
    el.classList.toggle("dech-hiden");
  });
}

const sMin = document.getElementById("smin");
const sPlus = document.getElementById("splus");
const sf1 = document.getElementById("sf1");
const sf2 = document.getElementById("sf2");
const sf3 = document.getElementById("sf3");
const sf4 = document.getElementById("sf4");
const sf5 = document.getElementById("sf5");

const date = document.getElementById("DateC");
let scaleDate = 1;

sMin.addEventListener("click", Min);
function Min() {
  scaleDate = scaleDate - 0.05;
  date.style.transform = `scale(${scaleDate})`;
}
sPlus.addEventListener("click", Plus);
function Plus() {
  scaleDate = scaleDate + 0.05;
  date.style.transform = `scale(${scaleDate})`;
}

sf1.addEventListener("click", sf1F);
function sf1F() {
  date.style.fontFamily = `"D", serif`;
}
sf2.addEventListener("click", sf2F);
function sf2F() {
  date.style.fontFamily = `"C", serif`;
}
sf3.addEventListener("click", sf3F);
function sf3F() {
  date.style.fontFamily = `"CI", serif`;
}
sf4.addEventListener("click", sf4F);
function sf4F() {
  date.style.fontFamily = `"G", serif`;
}
sf5.addEventListener("click", sf5F);
function sf5F() {
  date.style.fontFamily = `"A", serif`;
}

const imgH = document.querySelectorAll(".hero-logo");
const IJA = document.getElementById("IJA");

IJA.addEventListener("click", IJA1);
function IJA1() {
  imgH.forEach((el1) => {
    el1.classList.toggle("hin3");
  });
}
