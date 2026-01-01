const nav = document.getElementById("nav");
const ruBut = document.getElementById("ruBut");
const lvBut = document.getElementById("lvBut");
let open = false;

// Открытие/закрытие кнопок выбора языка
nav.addEventListener("click", langChange);

function langChange() {
  ruBut.classList.toggle("ruBut_show");
  lvBut.classList.toggle("lvBut_show");
  open = !open;
}

// Объект переводов
const translations = {
  ru: {
    title: "Приглашение",
    langActive: "Русский",

    hSubtext: "приглашение на свадьбу",
    s1Title: "Дорогие родные и друзья!",
    s1Text:
      "Приближается важный и радостный для нас день - день нашей свадьбы. Мы будем счастливы разделить его с вами.",
    // section 4
    s4Title: "Программа дня",

    // ceremony
    s4P1Title: "Свадебная церемония",
    s4P1PTitle: "Место",
    s4P1PText: "Hotel Bergs Suites, Elizabetes iela 83/85, Rīga, Stikla zāle",
    s4P1PBut: "Открыть в Google Maps",

    s4P1T1Subtitle: "Сбор гостей",
    s4P1T1Text: "Приятная атмосфера, первые знакомства и поиск своего места",

    s4P1T2Subtitle: "Церемония",
    s4P1T2Text: "Торжественный момент соединения двух сердец в одну семью",

    s4P1T3Subtitle: "Фуршет",
    s4P1T3Text:
      "Шампанское, лёгкие угощения, общение и тёплые фотографии на память",

    s4P1T4Subtitle: "Завершение торжественной части",
    s4P1T4Text: "Спасибо, что разделили с нами этот особенный момент",

    // speech
    s4P2Title: "Речь",
    s4P2PTitle: "Место",
    s4P2PText: "Jehovas liecinieku valstības zāle, Miera iela 40, Rīgā",
    s4P2PBut: "Открыть в Google Maps",

    s4P2T1Subtitle: "Начало",
    s4P2T1Text: "Свадебная речь",

    // banquet
    s4P3Title: "Банкет",
    s4P3PTitle: "Место",
    s4P3PText: "Alberta Muiža, “Gavari”, Mārupe",
    s4P3PBut: "Открыть в Google Maps",

    s4P3T1Subtitle: "Начало",
    s4P3T1Text: "Время для вкусной еды, танцев и веселья",

    // Q
    c1Placeholder: "Вводить здесь",
    c1Placeholder2: "Свой вариант",
    // section 6
    s6Title: "Анкета",
    s6Text:
      "Этот день для нас особенный, и нам важно знать, кто сможет разделить его с нами. Пожалуйста, отметьте своё присутствие до 01.02.2026.",

    s6L1Title: "Имя и Фамилия:",

    s6L2Title: "Вы:",
    s6L2A1: "Прийдете",
    s6L2A2: "Не прийдете",

    s6L3Title: "Хотели бы вы остаться на ночь в месте проведения банкета?",
    s6L3A1: "Да",
    s6L3A2: "Нет",

    s6L4Title:
      "Пожалуйста, выберите предпочитаемый вариант мяса для банкетного меню:",
    s6L4A1: "Курица",
    s6L4A2: "Свинина",
    s6L4A3: "Рыба",

    s6L5Title:
      "Есть ли у вас пищевые аллергии или продукты, которые вы не едите?",

    s6L6Title:
      "Пожалуйста, укажите предпочитаемые алкогольные напитки (можно выбрать несколько):",
    s6L6A1: "Шампанское",
    s6L6A2: "Вино",
    s6L6A3: "Виски",
    s6L6A4: "Коньяк",
    s6L6A5: "Водка",

    s6But: "Отправить",

    // dresscode
    s5Title: "Дресс-код",
    s5Text:
      "Нам будет очень приятно, если вы поддержите цветовую гамму нашего праздника и станете частью его атмосферы.",
    s5Add: "+ ахроматические цвета",

    s7Title: "Контакты",
    s7Text:
      "Если вы планируете сюрприз или у вас есть вопросы, пожалуйста, свяжитесь с Мартой Годлевской,",
    s7Text2: "тел. 25855499",

    fTitle: "до торжества осталось...",
    fTitleW1: "Дни",
    fTitleW2: "Часы",
    fTitleW3: "Минуты",
    fTitleW4: "Секунды",

    formSendInfoS: "Анкета успешно отправлена, спасибо за ваше участие.",
    formSendInfoE:
      "Форма не отправилась успешно попробуйте еще раз и проверте подключение к интернету.",
    formSendInfoF: "Пожалуйта заполните все необходимые поля.",
    formSendInfoCB: "закрыть",
  },
  lv: {
    title: "Ielūgums",
    langActive: "LATVIEŠU",

    hSubtext: "kāzu ielūgums",

    s1Title: "Mīļie radi un draugi!",
    s1Text:
      "Mūsu dzīvē tuvojas svarīga un priecīga diena — mūsu kāzu diena. Mēs būsim ļoti priecīgi to pavadīt kopā ar jums.",

    // section 4
    s4Title: "Dienas programma",

    // ceremony
    s4P1Title: "Kāzu ceremonija",
    s4P1PTitle: "Vieta",
    s4P1PText: "Hotel Bergs Suites, Elizabetes iela 83/85, Rīga, Stikla zāle",
    s4P1PBut: "Atvērt Google Maps",

    s4P1T1Subtitle: "Viesu ierašanās",
    s4P1T1Text:
      "Patīkama atmosfēra, pirmās iepazīšanās un savas vietas atrašana",

    s4P1T2Subtitle: "Ceremonija",
    s4P1T2Text: "Svinīgs brīdis, kad divas sirdis apvienojas vienā ģimenē",

    s4P1T3Subtitle: "Furšets",
    s4P1T3Text:
      "Šampanietis, vieglas uzkodas, sarunas un siltas piemiņas fotogrāfijas",

    s4P1T4Subtitle: "Svinīgās daļas noslēgums",
    s4P1T4Text: "Paldies, ka pavadījāt šo īpašo mirkli kopā ar mums",

    // speech
    s4P2Title: "Runa",
    s4P2PTitle: "Vieta",
    s4P2PText: "Jehovas liecinieku Valstības zāle, Miera iela 40, Rīga",
    s4P2PBut: "Atvērt Google Maps",

    s4P2T1Subtitle: "Sākums",
    s4P2T1Text: "Kāzu runa",

    // banquet
    s4P3Title: "Bankets",
    s4P3PTitle: "Vieta",
    s4P3PText: "Alberta Muiža, “Gavari”, Mārupe",
    s4P3PBut: "Atvērt Google Maps",

    s4P3T1Subtitle: "Sākums",
    s4P3T1Text: "Laiks gardai ēdienreizei, dejām un jautrībai",
    // Q
    c1Placeholder: "Ievadīt šeit",
    c1Placeholder2: "Savs variants",
    s6Title: "Anketa",
    s6Text:
      "Šī diena mums ir īpaša, un mums ir svarīgi zināt, kuri varēs to pavadīt kopā ar mums. Lūdzu, apstipriniet savu dalību līdz 01.02.2026.",

    s6L1Title: "Vārds un uzvārds:",

    s6L2Title: "Jūs:",
    s6L2A1: "Būsiet",
    s6L2A2: "Nebūsiet",

    s6L3Title: "Vai vēlētos palikt uz nakti banketa norises vietā?",
    s6L3A1: "Jā",
    s6L3A2: "Nē",

    s6L4Title: "Lūdzu, izvēlieties vēlamo gaļas veidu banketa ēdienkartē:",
    s6L4A1: "Vistas gaļa",
    s6L4A2: "Cūkgaļa",
    s6L4A3: "Zivs",

    s6L5Title: "Vai Jums ir kādas pārtikas alerģijas vai produkti, ko neēdat?",

    s6L6Title:
      "Lūdzu, norādiet vēlamos alkoholiskos dzērienus (var izvēlēties vairākus):",
    s6L6A1: "Šampanietis",
    s6L6A2: "Vīns",
    s6L6A3: "Viskijs",
    s6L6A4: "Konjaks",
    s6L6A5: "Degvīns",
    s6L6A6: "Savs variants",

    s6But: "Nosūtīt",

    // dresscode
    s5Title: "Dress-kods",
    s5Text:
      "Mums būs ļoti patīkami, ja jūs atbalstīsiet mūsu svētku krāsu gammu un kļūsiet par daļu no to atmosfēras.",
    s5Add: "+ ahromatiskās krāsas",

    s7Title: "Kontakti",
    s7Text:
      "Ja plānojat pārsteigumu vai jums ir jautājumi, lūdzu, sazinieties ar Martu Godļevsku,",
    s7Text2: "tālr. 25855499",

    fTitle: "līdz svinīgajam notikumam atlicis…",
    fTitleW1: "Dienas",
    fTitleW2: "Stundas",
    fTitleW3: "Minūtes",
    fTitleW4: "Sekundes",

    formSendInfoS:
      "Pieteikuma veidlapa ir veiksmīgi iesniegta, paldies par piedalīšanos.",
    formSendInfoE:
      "Veidlapa netika veiksmīgi iesniegta, lūdzu, mēģiniet vēlreiz un pārbaudiet interneta savienojumu.",
    formSendInfoF: "Lūdzu, aizpildiet visus obligātos laukus.",
    formSendInfoCB: "aizvērt",
  },
};

// 1️⃣ Получаем язык из хэша (#ru или #lv)
const langFromHash = window.location.hash.substring(1);
const savedLang = localStorage.getItem("lang");
let currentLang = langFromHash || savedLang || "ru";

// 4️⃣ Функция обновления текста

// IMPORTANT
function updateLanguage(lang) {
  if (!translations[lang]) return; // если язык не найден — ничего не делаем
  currentLang = lang;

  document.getElementById("nav-Invitation").textContent =
    translations[lang].title;

  document.getElementById("nav-langActive").textContent =
    translations[lang].langActive;

  document.getElementById("h-subtext").textContent =
    translations[lang].hSubtext;
  // section title
  document.getElementById("s1-title").textContent = translations[lang].s1Title;
  document.getElementById("s1-text").textContent = translations[lang].s1Text;

  // section title
  document.getElementById("s4-title").textContent = translations[lang].s4Title;

  // --- PART 1 : CEREMONY ---
  document.getElementById("s4-p1-title").textContent =
    translations[lang].s4P1Title;

  document.getElementById("s4-p1-p-title").textContent =
    translations[lang].s4P1PTitle;

  document.getElementById("s4-p1-p-text").textContent =
    translations[lang].s4P1PText;

  document.getElementById("s4-p1-p-but").textContent =
    translations[lang].s4P1PBut;

  document.getElementById("s4-p1-t1-subtitle").textContent =
    translations[lang].s4P1T1Subtitle;

  document.getElementById("s4-p1-t1-text").textContent =
    translations[lang].s4P1T1Text;

  document.getElementById("s4-p1-t2-subtitle").textContent =
    translations[lang].s4P1T2Subtitle;

  document.getElementById("s4-p1-t2-text").textContent =
    translations[lang].s4P1T2Text;

  document.getElementById("s4-p1-t3-subtitle").textContent =
    translations[lang].s4P1T3Subtitle;

  document.getElementById("s4-p1-t3-text").textContent =
    translations[lang].s4P1T3Text;

  document.getElementById("s4-p1-t4-subtitle").textContent =
    translations[lang].s4P1T4Subtitle;

  document.getElementById("s4-p1-t4-text").textContent =
    translations[lang].s4P1T4Text;

  // --- PART 2 : SPEECH ---
  document.getElementById("s4-p2-title").textContent =
    translations[lang].s4P2Title;

  document.getElementById("s4-p2-p-title").textContent =
    translations[lang].s4P2PTitle;

  document.getElementById("s4-p2-p-text").textContent =
    translations[lang].s4P2PText;

  document.getElementById("s4-p2-p-but").textContent =
    translations[lang].s4P2PBut;

  document.getElementById("s4-p2-t1-subtitle").textContent =
    translations[lang].s4P2T1Subtitle;

  document.getElementById("s4-p2-t1-text").textContent =
    translations[lang].s4P2T1Text;

  // --- PART 3 : BANQUET ---
  document.getElementById("s4-p3-title").textContent =
    translations[lang].s4P3Title;

  document.getElementById("s4-p3-p-title").textContent =
    translations[lang].s4P3PTitle;

  document.getElementById("s4-p3-p-text").textContent =
    translations[lang].s4P3PText;

  document.getElementById("s4-p3-p-but").textContent =
    translations[lang].s4P3PBut;

  document.getElementById("s4-p3-t1-subtitle").textContent =
    translations[lang].s4P3T1Subtitle;

  document.getElementById("s4-p3-t1-text").textContent =
    translations[lang].s4P3T1Text;
  // section Q
  const guestInput = document.querySelector(".placeholder-change-1");
  if (guestInput) {
    guestInput.setAttribute("placeholder", translations[lang].c1Placeholder);
  }
  const guestInput2 = document.querySelector(".placeholder-change-2");
  if (guestInput2) {
    guestInput2.setAttribute("placeholder", translations[lang].c1Placeholder);
  }
  const guestInput3 = document.querySelector(".placeholder-change-3");
  if (guestInput3) {
    guestInput3.setAttribute("placeholder", translations[lang].c1Placeholder2);
  }
  // section
  document.getElementById("s6-title").textContent = translations[lang].s6Title;

  document.getElementById("s6-text").textContent = translations[lang].s6Text;

  // label 1
  document.getElementById("s6-l1-title").textContent =
    translations[lang].s6L1Title;

  // label 2
  document.getElementById("s6-l2-title").textContent =
    translations[lang].s6L2Title;

  document.querySelector("#s6-l2-a1").lastChild.textContent =
    translations[lang].s6L2A1;

  document.querySelector("#s6-l2-a2").lastChild.textContent =
    translations[lang].s6L2A2;

  // label 3
  document.getElementById("s6-l3-title").textContent =
    translations[lang].s6L3Title;

  document.querySelector("#s6-l3-a1").lastChild.textContent =
    translations[lang].s6L3A1;

  document.querySelector("#s6-l3-a2").lastChild.textContent =
    translations[lang].s6L3A2;

  // label 4
  document.getElementById("s6-l4-title").textContent =
    translations[lang].s6L4Title;

  document.querySelector("#s6-l4-a1").lastChild.textContent =
    translations[lang].s6L4A1;

  document.querySelector("#s6-l4-a2").lastChild.textContent =
    translations[lang].s6L4A2;

  document.querySelector("#s6-l4-a3").lastChild.textContent =
    translations[lang].s6L4A3;

  // label 5
  document.getElementById("s6-l5-title").textContent =
    translations[lang].s6L5Title;

  // label 6
  document.getElementById("s6-l6-title").textContent =
    translations[lang].s6L6Title;

  document.querySelector("#s6-l6-a1").lastChild.textContent =
    translations[lang].s6L6A1;

  document.querySelector("#s6-l6-a2").lastChild.textContent =
    translations[lang].s6L6A2;

  document.querySelector("#s6-l6-a3").lastChild.textContent =
    translations[lang].s6L6A3;

  document.querySelector("#s6-l6-a4").lastChild.textContent =
    translations[lang].s6L6A4;

  document.querySelector("#s6-l6-a5").lastChild.textContent =
    translations[lang].s6L6A5;

  // button
  document.getElementById("s6-but").textContent = translations[lang].s6But;

  // section dresscode
  document.getElementById("s5-title").textContent = translations[lang].s5Title;
  document.getElementById("s5-text").textContent = translations[lang].s5Text;
  document.getElementById("s5-add").textContent = translations[lang].s5Add;
  // section contacts
  document.getElementById("s7-title").textContent = translations[lang].s7Title;
  document.getElementById("s7-text").textContent = translations[lang].s7Text;
  document.getElementById("s7-text-2").textContent = translations[lang].s7Text2;
  // section fotter
  document.getElementById("f-title").textContent = translations[lang].fTitle;
  document.getElementById("f-title-w1").textContent =
    translations[lang].fTitleW1;
  document.getElementById("f-title-w2").textContent =
    translations[lang].fTitleW2;
  document.getElementById("f-title-w3").textContent =
    translations[lang].fTitleW3;
  document.getElementById("f-title-w4").textContent =
    translations[lang].fTitleW4;

  // form send info
  const formS = document.getElementById("form-send-info-s");
  if (formS) {
    formS.textContent = translations[lang].formSendInfoS;
  }
  const formE = document.getElementById("form-send-info-e");
  if (formE) {
    formE.textContent = translations[lang].formSendInfoE;
  }
  const formF = document.getElementById("form-send-info-f");
  if (formF) {
    formF.textContent = translations[lang].formSendInfoF;
  }
  document.getElementById("form-send-info-close-button").textContent =
    translations[lang].formSendInfoCB;

  localStorage.setItem("lang", lang); // сохраняем язык
}

// --- Обработчики кнопок ---
ruBut.addEventListener("click", () => {
  updateLanguage("ru");
  history.replaceState(null, "", "#ru");
});

lvBut.addEventListener("click", () => {
  updateLanguage("lv");
  history.replaceState(null, "", "#lv");
});
document.getElementById("s6-but").addEventListener("click", async () => {
  updateLanguage(currentLang);
});

// --- Применяем язык при загрузке страницы ---
updateLanguage(currentLang);
