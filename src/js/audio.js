export { playList, buildPlayList, stylePlayItem };
const playList = [
  {
    title: "Aqua Caelestic",
    src: "../src/sounds/Aqua Caelestic.mp3",
    duration: "00:58",
  },
  {
    title: "River Flows In You",
    src: "../src/sounds/River Flows In You.mp3",
    duration: "01:50",
  },
  {
    title: "Ennio Morricone",
    src: "../src/sounds/Ennio Morricone.mp3",
    duration: "02:00",
  },
  {
    title: "Summer Wind",
    src: "../src/sounds/Summer Wind.mp3",
    duration: "01:50",
  },
];

const playButton = document.querySelector(".play");
const playPrevButton = document.querySelector(".play-prev");
const playNextButton = document.querySelector(".play-next");

let playNum = 0;
let isPlay = false;

const audio = new Audio();
audio.addEventListener("ended", () => {
  playNext();
});

const buildPlayList = () => {
  const playListContainer = document.querySelector(".play-list");
  playList.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("play-item");
    li.textContent = el.title;
    playListContainer.append(li);
  });
};
buildPlayList();

const stylePlayItem = (numSong) => {
  const playItems = document.querySelectorAll(".play-item");
  playItems.forEach((item) => {
    item.classList.remove("item-active");
    if (item.innerHTML === playList[numSong].title) {
      item.classList.add("item-active");
    }
  });
};

const playAudio = () => {
  audio.currentTime = 0;
  audio.src = playList[playNum].src;

  stylePlayItem(playNum);

  if (!isPlay) {
    audio.play();
    isPlay = true;
    playButton.classList.add("pause");
  } else {
    audio.pause();
    isPlay = false;
    playButton.classList.remove("pause");
  }
};

playButton.addEventListener("click", playAudio);

const playNext = () => {
  if (isPlay) {
    playAudio();
  }
  if (playNum < playList.length - 1) {
    playNum++;
  } else {
    playNum = 0;
  }
  playAudio();
};
playNextButton.addEventListener("click", playNext);

const playPrev = () => {
  if (isPlay) {
    playAudio();
  }
  if (playNum > 0) {
    playNum--;
  } else {
    playNum = playList.length - 1;
  }
  playAudio();
};

playPrevButton.addEventListener("click", playPrev);

/*Timeliner */

const timeline = document.querySelector(".timeline");
const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".current-time");
const durationtime = document.querySelector(".total-duration");
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}
/* Work with Progres bar */

const handleProgressBar = (el) => {
  const durationProgress = el.target.duration;
  const currentTimeProgressBar = el.target.currentTime;
  const progressBarPercent = (currentTimeProgressBar / durationProgress) * 100;
  progressBar.style.width = `${progressBarPercent}%`;
};
audio.addEventListener("timeupdate", handleProgressBar);

const rewindTimline = (el) => {
  const timlineWidth = el.target.offsetWidth;
  const clickOffSetX = el.offsetX;
  const durationAudioTrek = audio.duration;

  audio.currentTime = (clickOffSetX / timlineWidth) * durationAudioTrek;
};

timeline.addEventListener("click", rewindTimline);

/*Volume  */

const volumeIcon = document.querySelector(".volume-icon");

volumeIcon.addEventListener("click", () => {
  audio.muted = !audio.muted;
  if (!audio.muted) {
    volumeIcon.classList.add("mute");
  } else {
    volumeIcon.classList.remove("mute");
  }
});

const volumeRange = document.querySelector(".volume-range");

volumeRange.addEventListener("input", () => {
  audio.volume = Math.trunc(volumeRange.value) / 100;
  if (volumeRange.value == 0) {
    volumeIcon.classList.add("mute");
  } else {
    volumeIcon.classList.remove("mute");
  }
});

volumeRange.oninput = () => {
  let volumeProgress = document.querySelector(".volume-progress");
  volumeProgress.value = volumeRange.value;
};
