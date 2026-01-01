import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { updateLanguageForm } from "../language.js";

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

// обработка формы
document.getElementById("s6-but").addEventListener("click", async () => {
  const name = document.getElementById("nameandlastname").value.trim();
  const status = document.querySelector(
    'input[name="attendancestatus"]:checked'
  )?.value;

  if (!name || !status) {
    // window
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");

    // показываем контейнер
    formConteiner.classList.remove("form-send-status-hidden");

    // сразу меняем id
    formSendInfo.id = "form-send-info-f";
    updateLanguageForm();
    // анимация
    requestAnimationFrame(() => {
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    });
    return;
  }

  try {
    await addDoc(collection(db, "ceremony"), {
      name: name,
      attendance: status,
      createdAt: new Date(),
    });

    //alert("Спасибо! Ответ отправлен ❤️");
    // window

    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");

    // показываем контейнер
    formConteiner.classList.remove("form-send-status-hidden");

    // сразу меняем id
    formSendInfo.id = "form-send-info-s";
    updateLanguageForm();
    // анимация
    requestAnimationFrame(() => {
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    });

    // очистка формы
    document.getElementById("nameandlastname").value = "";
    document
      .querySelectorAll('input[name="attendancestatus"]')
      .forEach((i) => (i.checked = false));
  } catch (e) {
    // window
    const formConteiner = document.getElementById("form-send-status");
    const formSendInfo = document.querySelector(".form-send-status-text");

    // показываем контейнер
    formConteiner.classList.remove("form-send-status-hidden");

    // сразу меняем id
    formSendInfo.id = "form-send-info-e";
    updateLanguageForm();
    // анимация
    requestAnimationFrame(() => {
      formConteiner.style.opacity = "1";
      formSendInfo.style.transform = "scale(1)";
    });
  }
});

//  Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//  TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyC6q8LPU13Cwv34yWfhIUif2Gn-zuzA4G0",
//  authDomain: "stweb-f096d.firebaseapp.com",
//  projectId: "stweb-f096d",
//  storageBucket: "stweb-f096d.firebasestorage.app",
//  messagingSenderId: "323160494150",
//  appId: "1:323160494150:web:9133f651e0c0cb558dfa47"
//};

//  Initialize Firebase
//const app = initializeApp(firebaseConfig);
//-->
