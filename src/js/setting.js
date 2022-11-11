export { showSetting };

const setting = document.querySelector(".setting");
console.log(setting);

const showSetting = () => {
  document.querySelector(".setting-icon").addEventListener("click", () => {
    setting.classList.toggle("show");
  });
};
showSetting();

/* Close seeting widgets */

const audioInputChecked = document.querySelector(".audio-input");
const weatherInputChecked = document.querySelector(".weather-input");
const timeInputChecked = document.querySelector(".time-input");
const dataInputChecked = document.querySelector(".data-input");
const greetingInputChecked = document.querySelector(".greeting-input");
const quoteInputChecked = document.querySelector(".quote-input");
const todoInputChecked = document.querySelector(".todo-input");

audioInputChecked.addEventListener("change", (e) => {
  const player = document.querySelector(".player");
  if (e.target.checked === false) {
    player.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    player.style.visibility = "visible";
  }
});

weatherInputChecked.addEventListener("change", (e) => {
  const weather = document.querySelector(".weather");
  if (e.target.checked === false) {
    weather.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    weather.style.visibility = "visible";
  }
});

timeInputChecked.addEventListener("change", (e) => {
  const time = document.querySelector(".time");
  if (e.target.checked === false) {
    time.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    time.style.visibility = "visible";
  }
});

dataInputChecked.addEventListener("change", (e) => {
  const data = document.querySelector(".date");
  if (e.target.checked === false) {
    data.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    data.style.visibility = "visible";
  }
});

greetingInputChecked.addEventListener("change", (e) => {
  const greeting = document.querySelector(".greeting-container");
  if (e.target.checked === false) {
    greeting.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    greeting.style.visibility = "visible";
  }
});

quoteInputChecked.addEventListener("change", (e) => {
  const quote = document.querySelector(".quote-block");
  const buttonQuote = document.querySelector(".change-quote ");
  if (e.target.checked === false) {
    buttonQuote.style.visibility = "hidden";
    quote.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    buttonQuote.style.visibility = "visible";
    quote.style.visibility = "visible";
  }
});

todoInputChecked.addEventListener("change", (e) => {
  const toDoList = document.querySelector(".to-do-list");
  if (e.target.checked === false) {
    toDoList.style.visibility = "hidden";
    toDoList.style.visibility = "hidden";
  }
  if (e.target.checked === true) {
    toDoList.style.visibility = "visible";
    toDoList.style.visibility = "visible";
  }
});
