export { playList, buildPlayList, stylePlayItem };
const playList = [
  {
    title: "Game Of Thrones",
    src: "../src/sounds/Game Of Thrones.mp3",
    duration: "00:25",
  },
  {
    title: "Lord Of The Rings ",
    src: "../src/sounds/Lord Of The Rings.mp3",
    duration: "00:35",
  },
  {
    title: "Peaky Blinders",
    src: "../src/sounds/Peaky Blinders.mp3",
    duration: "00:35",
  },
  {
    title: "Sherlock Holmes",
    src: "../src/sounds/Sherlock Holmes.mp3",
    duration: "00:35",
  },
];

const playButton = document.querySelector(".play");
const playPrevButton = document.querySelector(".play-prev");
const playNextButton = document.querySelector(".play-next");

let playNum = 0;
let currentTime = 0;
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

const stylePlayItem = (playNum) => {
  const playItems = document.querySelectorAll(".play-item");
  playItems.forEach((item) => {
    item.classList.remove("item-active");
    if (item.innerHTML === playList[playNum].title) {
      item.classList.add("item-active");
    }
  });
};

const showSongTitle = () => {
  const songTitle = document.querySelector(".track-name .track-name__item");
  songTitle.textContent = playList[playNum].title;
};

const playAudio = () => {
  audio.src = playList[playNum].src;
  stylePlayItem(playNum);
  showSongTitle();
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

//click on timeline to skip around

const timeline = document.querySelector(".timeline");
const rewindTimline = (el) => {
  const timlineWidth = el.target.offsetWidth;
  const clickOffSetX = el.offsetX;
  const durationAudioTrek = audio.duration;
  audio.currentTime = (clickOffSetX / timlineWidth) * durationAudioTrek;
};
timeline.addEventListener("click", rewindTimline);

//check audio percentage and update time accordingly

const getTimeCodeFromNum = (currentTime) => {
  let currentSeconds = parseInt(currentTime);
  let currentMinutes = parseInt(currentSeconds / 60);
  currentSeconds -= currentMinutes * 60;
  const currentHours = parseInt(currentMinutes / 60);
  currentMinutes -= currentHours * 60;

  if (currentHours === 0)
    return `${currentMinutes}:${String(currentSeconds % 60).padStart(2, 0)}`;
  return `${String(currentHours).padStart(2, 0)}:${currentMinutes}:${String(
    currentSeconds % 60
  ).padStart(2, 0)}`;
};

setInterval(() => {
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  document.querySelector(".current-time").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
  getTimeCodeFromNum(currentTime);
}, 500);

//click volume slider to change volume


const volumeIcon = document.querySelector(".volume-icon");
volumeIcon.addEventListener("click", () => {
  audioBird.muted = !audioBird.muted;
  if (!audioBird.muted) {
    volumeIcon.classList.remove("mute");

  } else {
    volumeIcon.classList.add("mute");
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
