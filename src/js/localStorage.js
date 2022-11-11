export { setLocalStorage, getLocalStorage };
import { langEn, langBy, langRu, language, getTranslate } from "./translate.js";
const userName = document.querySelector(".name");
const city = document.querySelector(".city");

const setLocalStorage = () => {
  localStorage.setItem("lang", language);
  localStorage.setItem("name", userName.value);
  localStorage.setItem("city", city.value);
};
window.addEventListener("beforeunload", setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem("lang")) {
    let language = localStorage.getItem("lang");
    if (language === "en") {
      getTranslate("en");
    }
    if (language === "by") {
      getTranslate("by");
      let selectLanguage = (document.getElementById("language").selectedIndex =
        "1");
      selectLanguage.setAttribute("selected", true);
    }
    if (language === "ru") {
      getTranslate("ru");
      let selectLanguage = (document.getElementById("language").selectedIndex =
        "2");
      selectLanguage.setAttribute("selected", true);
    }
  }

  if (localStorage.getItem("name")) {
    userName.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
};
window.addEventListener("load", getLocalStorage);
