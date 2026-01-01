import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { updateLanguage } from "../language-full.js";
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
  // window
  const formConteiner = document.getElementById("form-send-status");
  const formSendInfo = document.querySelector(".form-send-status-text");

  // показываем контейнер
  formConteiner.classList.remove("form-send-status-hidden");

  // сразу меняем id
  formSendInfo.id = "form-send-info-s";

  // анимация
  requestAnimationFrame(() => {
    formConteiner.style.opacity = "1";
    formSendInfo.style.transform = "scale(1)";
  });
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

      // показываем контейнер
      formConteiner.classList.remove("form-send-status-hidden");

      // сразу меняем id
      formSendInfo.id = "form-send-info-f";
      updateLanguage(currentLang);
      // анимация
      requestAnimationFrame(() => {
        formConteiner.style.opacity = "1";
        formSendInfo.style.transform = "scale(1)";
      });

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

    // показываем контейнер
    formConteiner.classList.remove("form-send-status-hidden");

    // сразу меняем id
    formSendInfo.id = "form-send-info-s";
    updateLanguage(currentLang);
    // анимация
    requestAnimationFrame(() => {
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    });

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
    // window
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");

    // показываем контейнер
    formConteiner.classList.remove("form-send-status-hidden");

    // сразу меняем id
    formSendInfo.id = "form-send-info-e";
    updateLanguage(currentLang);
    // анимация
    requestAnimationFrame(() => {
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    });
  }
});
