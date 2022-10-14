export { showSetting };

const setting = document.querySelector(".setting");
console.log(setting);

const showSetting = () => {
  document.querySelector(".setting-icon").addEventListener("click", () => {
    setting.classList.toggle("show");
  });
};
showSetting();
