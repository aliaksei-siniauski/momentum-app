export { getWeather, setCity };

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");

const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&APPID=4508bd0f84c3aa95e58c44e6913bf3a8&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.cod !== "404" && data.cod !== "400") {
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed}m/s`;
    humidity.textContent = `${data.main.humidity}%`;
  } else if (city.value === " ") {
    weatherIcon.className = "weather-icon owf";
    temperature.textContent = " ";
    weatherDescription.textContent = " ";
    wind.textContent = " ";
    humidity.textContent = " ";
    weatherError.textContent = "City is n't found";
  }
}

const setCity = (event) => {
  if (event.code === "Enter") {
    getWeather();
    city.blur();
  }
};

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
