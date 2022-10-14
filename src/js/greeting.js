export {
  showTime,
  showDate,
  getTimeOfDay,
  showGreeting,
  getRandomNum,
  setBg,
  clickSlidePrev,
  clickSlideNext,
  getLinkToImage,
};

const pageTime = document.querySelector(".time");
const pageDate = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const body = document.querySelector("body");
const userName = document.querySelector(".user-name");
const name = document.querySelector(".name");

const showDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = date.toLocaleDateString("en-Br", options);
  pageDate.textContent = currentDate;
};

/*Get Hours */

const getHours = () => {
  const date = new Date();
  const hours = date.getHours();
  return hours;
};

/* get Time of Date */

const getTimeOfDay = () => {
  const hours = getHours();
  let timeOfDay;
  if (hours >= 6 && hours < 12) {
    timeOfDay = "morning";
  }
  if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon";
  }
  if (hours >= 18 && hours < 24) {
    timeOfDay = "evening";
  }
  if (hours < 6) {
    timeOfDay = "night";
  }
  return timeOfDay;
};

const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay},`;
  greeting.textContent = greetingText;
};

const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString("en-GB");
  pageTime.textContent = currentTime;
  showDate();
  getHours();
  showGreeting();
  setTimeout(showTime, 1000);
};
showTime();

/*Slider*/
let randomNum;

const getRandomNum = (min, max) => {
  const randomNum = Math.floor(Math.random() * 20) + 1;
  return randomNum;
};

const setBg = () => {
  let timeOfDay = getTimeOfDay();
  let bgNum = getRandomNum().toString().padStart(2, 0);
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/aliaksei-siniauski/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/aliaksei-siniauski/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  };
};
setBg();

/* Click Slide */

const getSlideNext = () => {
  if (randomNum < 20) {
    randomNum++;
  } else {
    randomNum = 1;
  }
  setBg();
};

const getSlidePrev = () => {
  if (randomNum > 1) {
    randomNum--;
  } else {
    randomNum = 20;
  }
  setBg();
};

const clickSlideNext = () => {
  document.querySelector(".slide-next").addEventListener("click", getSlideNext);
};
clickSlideNext();

const clickSlidePrev = () => {
  document.querySelector(".slide-prev").addEventListener("click", getSlidePrev);
};
clickSlidePrev();

/* Get img from APP */

async function getLinkToImage() {
  let timeOfDay = getTimeOfDay();
  const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=6Hf64z2amhE8iLHRAMHPvKww7BnhdBo2E0lEdSjvZ_o`;
  const res = await fetch(url);
  const data = await res.json();
}
getLinkToImage();

/* async function getLinkToImageFromFlickr() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=83a4dda2325699a419746aec0bcf4247
  tags=nature&extras=url_l&format=json&nojsoncallback=1`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular);
}
getLinkToImageFromFlickr() */

userName.textContent = name.value;
