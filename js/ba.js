      const ba = document.getElementById("BA");
      const elementsddd = document.querySelectorAll(".dech");

      ba.addEventListener("click", bab);

      function bab() {
        elementsddd.forEach((el) => {
          el.classList.toggle("dech-hiden");
        });
      }