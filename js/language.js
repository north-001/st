
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
        },
        lv: {
          title: "Ielūgums",
          langActive: "Latviski",
        },
      };

      // 1️⃣ Получаем язык из ссылки (например ?lang=lv)
      const params = new URLSearchParams(window.location.search);
      const langFromUrl = params.get("lang");

      // 2️⃣ Если есть в localStorage — используем его
      const savedLang = localStorage.getItem("lang");

      // 3️⃣ Определяем текущий язык
      let currentLang = langFromUrl || savedLang || "ru";

      // 4️⃣ Функция обновления текста
      function updateLanguage(lang) {
        if (!translations[lang]) return; // если язык не найден — ничего не делаем
        currentLang = lang;
        document.getElementById("nav-Invitation").textContent =
          translations[lang].title;
        document.getElementById("nav-langActive").textContent =
          translations[lang].langActive;
        localStorage.setItem("lang", lang); // сохраняем язык
      }

      // 5️⃣ Навешиваем обработчики на кнопки
      ruBut.addEventListener("click", () => {
        updateLanguage("ru");
        history.replaceState(null, "", "?lang=ru"); // меняем URL без перезагрузки
      });

      lvBut.addEventListener("click", () => {
        updateLanguage("lv");
        history.replaceState(null, "", "?lang=lv");
      });

      // 6️⃣ Применяем язык при загрузке страницы
      updateLanguage(currentLang);
