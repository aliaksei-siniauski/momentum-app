export { langEn, langBy, langRu, lang, getLocalStorageLang, selectLanguage };
const lang = {
  en: {
    town: "Minsk",
    localeDate: "en-EN",
    greetingTextMorning: "Good morning",
    greetingTextDay: "Good afternoon",
    greetingTextEvening: "Good evening",
    greetingTextNight: "Good night",
    nameInputPlaceholder: "[Tell me your name...]",
    cityInputPlaceholder: "[Enter city...]",
    settingsInputPlaceholder: "Select tag...",
    todoInputPlaceholder: "Add new task...",
    humidityText: "Humidity ",
    speedWindText: "SpeedWind ",
    errorText: "You not enter.",
    errorNotFoundText: "This city not found: ",
    quotes: "js/EN-quotes.json",
    setTitle: "Settings",
    setGeneralSetting: "General Setting",
    setLanguage: "Language",
    setImage: "Image Source",
    setImageTag: "Image Tag",
    setWidget: "Widgets",
    setLanguage: "Language",
    setAudio: "Audio Player",
    setWeather: "Weather",
    setTime: "Time",
    setDate: "Date",
    setGreeting: "Greeting",
    setQuote: "Quotes",
    setTodo: "Todo",
  },

  by: {
    town: "Меньск",
    localeDate: "by-By",
    greetingTextMorning: "Дабранак",
    greetingTextDay: "Дзень добры",
    greetingTextEvening: "Вечер добры",
    greetingTextNight: "Дабранач",
    nameInputPlaceholder: "[Увядзіце ваша імя...]",
    cityInputPlaceholder: "[Увядзіце горад...]",
    settingsInputPlaceholder: "Увядзіце тэг...",
    todoInputPlaceholder: "Дадаць заданне...",
    humidityText: "Вільготнасць",
    speedWindText: "Хуткасць ветру: ",
    errorText: "Вы нічога не ўвялі",
    errorNotFoundText: "Такі горад не знойдзены: ",
    quotes: "js/By-quotes.json",
    setTitle: "Налады",
    setGeneralSetting: "Агульныя налады",
    setLanguage: "Мова",
    setImage: "Крыніца выявы",
    setImageTag: "Тэг выявы",
    setWidget: "Віджэт",
    setLanguage: "Мова",
    setAudio: "Музыка",
    setWeather: "Надвор'е",
    setTime: "Час",
    setDate: "Дата",
    setGreeting: "Вітанне",
    setQuote: "Выцемкі",
    setBackground: "Фон",
    setTodo: "Спіс спраў",
  },

  ru: {
    town: "Минск",
    localeDate: "ru-RU",
    greetingTextMorning: "Доброе утро",
    greetingTextDay: "Добрый день",
    greetingTextEvening: "Добрый вечер",
    greetingTextNight: "Доброй ночи",
    nameInputPlaceholder: "[Введите ваше имя...]",
    cityInputPlaceholder: "[Введите город...]",
    settingsInputPlaceholder: "Введите тег...",
    todoInputPlaceholder: "Добавить задачу...",
    humidityText: "Влажность ",
    speedWindText: "Скорость ветра: ",
    errorText: "Вы ничего не ввели.",
    errorNotFoundText: "Такой город не найден: ",
    quotes: "js/RU-quotes.json",
    setTitle: "Настройки",
    setGeneralSetting: "Общие настройки",
    setLanguage: "Язык",
    setImage: "Источник изображения",
    setImageTag: "Тег изображения",
    setWidget: "Виджет",
    setLanguage: "Язык",
    setAudio: "Музыка",
    setWeather: "Погода",
    setTime: "Время",
    setDate: "Дата",
    setGreeting: "Приветствие",
    setQuote: "Цитаты",
    setBackground: "Фон",
    setTodo: "Cписок дел",
  },
};

let language;

const langEn = document.querySelector(".lang-en");
const langBy = document.querySelector(".lang-by");
const langRu = document.querySelector(".lang-ru");

const getTranslate = (language) => {
  const dataTranslate = document.querySelectorAll("[data-i18]");
  dataTranslate.forEach((el) => {
    let key = el.dataset.i18;
    el.textContent = lang[language][key];
  });
};

let selectLanguage = document.getElementById("language");

selectLanguage.addEventListener("change", () => {
  let selectLanguageOption =
    selectLanguage.options[selectLanguage.selectedIndex];
  if (selectLanguageOption.value === "by") {
    getTranslate((language = "by"));
  }
  if (selectLanguageOption.value === "en") {
    getTranslate((language = "en"));
  }
  if (selectLanguageOption.value === "ru") {
    getTranslate((language = "ru"));
  }
});

function getLocalStorageLang() {
  if (localStorage.getItem("langStorage")) {
    langKey = localStorage.getItem("langStorage");
  }
}

getLocalStorageLang();
