export { selectImageSource, imageTag };
import { greeting, body, setBg } from "./greeting.js";

const selectImageSource = document.querySelector(".image-source-selected");
const imageTag = document.querySelector(".tag-name");

selectImageSource.addEventListener("change", () => {
  let selectImageSourceOption =
    selectImageSource.options[selectImageSource.selectedIndex];
  removeImageTagDisabled();
  if (selectImageSourceOption.value === "Flickr") {
    setBackgroundImgFromFlickr();
    imageTag.value = "";
  }
  if (selectImageSourceOption.value === "Unsplash") {
    setBackgroundImgFromUnsplash();
    imageTag.value = "";
  }
  if (selectImageSourceOption.value === "Github") {
    setBg();
    imageTag.value = "";
  }
});

imageTag.addEventListener("change", () => {
  let selectImageSourceOption =
    selectImageSource.options[selectImageSource.selectedIndex];
  if (selectImageSourceOption.value === "Unsplash") {
    setBackgroundImgFromUnsplash();
  }
  if (selectImageSourceOption.value === "Flickr") {
    setBackgroundImgFromFlickr();
  }
});

function removeImageTagDisabled() {
  let selectImageSourceOption =
    selectImageSource.options[selectImageSource.selectedIndex];
  if (selectImageSourceOption.value === "Github") {
    imageTag.setAttribute("disabled", true);
  } else {
    imageTag.removeAttribute("disabled");
  }
}

async function getLinkToUnsplashImg() {
  const img = new Image();
  let url;
  if (imageTag.value.length !== 0) {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${imageTag.value}&client_id=he6BQiYh-YZZDw1eeFIsgHjsiy0Krot1__vSyUWcBTM`;
  } else {
    url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${greeting}&client_id=he6BQiYh-YZZDw1eeFIsgHjsiy0Krot1__vSyUWcBTM`;
  }
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod !== "403" && data.cod !== "404" && data.cod !== "400") {
    img.src = `${data.urls.regular}`;
    img.onload = () => {
      body.style.backgroundImage = `url(${data.urls.regular})`;
    };
  }
  console.log(imageTag.value);
}

async function getLinkToFlickrImg() {
  const img = new Image();
  let url;
  if (imageTag.value.length !== 0) {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1e574bc7fa2b9216361a8cbbe3222ce4&tags=${imageTag.value}&extras=url_l&format=json&nojsoncallback=1&safe_search=1`;
  } else {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=1e574bc7fa2b9216361a8cbbe3222ce4&tags=$forest&extras=url_l&format=json&nojsoncallback=1&safe_search=1`;
  }
  const res = await fetch(url);
  const data = await res.json();
  let flickrNumber = getRandomNum(1, 99);

  if (data.cod !== "403" && data.cod !== "404" && data.cod !== "400") {
    img.src = `${data.photos.photo[flickrNumber].url_l}`;
    img.onload = () => {
      body.style.backgroundImage = `url(${data.photos.photo[flickrNumber].url_l})`;
    };
  }
}

function setBackgroundImgFromUnsplash() {
  let selectImageSourceOption =
    selectImageSource.options[selectImageSource.selectedIndex];
  if (selectImageSourceOption.value === "Unsplash") {
    getLinkToUnsplashImg();
  }
}

function setBackgroundImgFromFlickr() {
  let selectImageSourceOption =
    selectImageSource.options[selectImageSource.selectedIndex];
  if (selectImageSourceOption.value === "Flickr") {
    getLinkToFlickrImg();
  }
}

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  //console.log('0: random =', randomNum);
  return randomNum;
}
