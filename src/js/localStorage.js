export { setLocalStorage, getLocalStorage };

const userName = document.querySelector(".name");
const city = document.querySelector(".city");

const setLocalStorage = () => {
  localStorage.setItem("name", userName.value);
  localStorage.setItem("city", city.value);
};
window.addEventListener("beforeunload", setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem("name")) {
    userName.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
};
window.addEventListener("load", getLocalStorage);
