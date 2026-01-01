import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6q8LPU13Cwv34yWfhIUif2Gn-zuzA4G0",
  authDomain: "stweb-f096d.firebaseapp.com",
  projectId: "stweb-f096d",
  storageBucket: "stweb-f096d.firebasestorage.app",
  messagingSenderId: "323160494150",
  appId: "1:323160494150:web:9133f651e0c0cb558dfa47",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("s6-but").addEventListener("click", async () => {
  try {
    const name = document.getElementById("nameandlastname").value.trim();
    const allergy = document.getElementById("allergy").value.trim();

    const attendance = document.querySelector(
      'input[name="attendancestatus"]:checked'
    )?.value;

    const stayOvernight = document.querySelector(
      'input[name="stayovernight"]:checked'
    )?.value;

    const meat = document.querySelector(
      'input[name="typeofmeat"]:checked'
    )?.value;

    // алкоголь (checkbox)
    const alcohol = Array.from(
      document.querySelectorAll('input[name="alcohol"]:checked')
    ).map((input) => input.value);

    // свой вариант алкоголя
    const customAlcohol = document
      .getElementById("namespalkcoustom")
      .value.trim();
    if (customAlcohol) {
      alcohol.push(customAlcohol);
    }

    // минимальная валидация
    if (!name || !attendance) {
      //alert("Пожалуйста, заполните все поля");
      // window
      const formConteiner = document.getElementById("form-send-status");
      const formSendInfo = document.querySelector(".form-send-status-text");
      formConteiner.classList.remove("form-send-status-hidden");
      setTimeout(() => {
        formSendInfo.id = "form-send-info-f";
        formConteiner.style.opacity = "1";
        formSendInfo.style.transform = "scale(1)";
      }, 0);
      return;
    }

    await addDoc(collection(db, "banquet"), {
      name,
      attendance,
      stayOvernight: stayOvernight || null,
      meat: meat || null,
      allergy: allergy || null,
      alcohol,
      createdAt: new Date(),
    });

    //alert("Спасибо! Анкета отправлена ❤️");
    // window
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");
    formConteiner.classList.remove("form-send-status-hidden");
    setTimeout(() => {
      formSendInfo.id = "form-send-info-s";
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    }, 0);

    // очистка формы
    document.querySelectorAll("input").forEach((input) => {
      if (input.type === "radio" || input.type === "checkbox") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });
  } catch (e) {
    //console.error("Ошибка:", e);
    //alert("Ошибка отправки анкеты");
    // window
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");
    formConteiner.classList.remove("form-send-status-hidden");
    setTimeout(() => {
      formSendInfo.id = "form-send-info-e";
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    }, 0);
  }
});
