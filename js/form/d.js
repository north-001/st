import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6q8LPU13Cwv34yWfhIUif2Gn-zuzA4G0",
  authDomain: "stweb-f096d.firebaseapp.com",
  projectId: "stweb-f096d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const collections = ["banquet", "ceremony"];

document.getElementById("downloadTxt").addEventListener("click", async () => {
  try {
    let text = "АНКЕТЫ ГОСТЕЙ\n\n";

    for (const col of collections) {
      const snapshot = await getDocs(collection(db, col));

      text += `===== КОЛЛЕКЦИЯ: ${col.toUpperCase()} =====\n\n`;

      snapshot.forEach((doc) => {
        const d = doc.data();

        const createdAt = d.createdAt
          ? d.createdAt.toDate().toLocaleString("ru-RU")
          : "-";

        text += `Имя: ${d.name ?? "-"}\n`;
        text += `Присутствие: ${d.attendance ?? "-"}\n`;
        text += `Ночь: ${d.stayOvernight ?? "-"}\n`;
        text += `Мясо: ${d.meat ?? "-"}\n`;
        text += `Аллергии: ${d.allergy ?? "-"}\n`;
        text += `Алкоголь: ${
          Array.isArray(d.alcohol) ? d.alcohol.join(", ") : "-"
        }\n`;
        text += `Дата отправки: ${createdAt}\n\n`;

        text += "---------------------------\n\n";
      });
    }

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "answers_all.txt";
    a.click();

    URL.revokeObjectURL(url);
  } catch (e) {
    console.error(e);
    alert("Ошибка при скачивании");
  }
});
