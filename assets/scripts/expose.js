// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelector = document.getElementById("horn-select");
  const hornImage = document.getElementsByTagName("img")[0];
  const hornAudio = document.getElementsByTagName("audio")[0];
  const volume = document.getElementById("volume");
  const volumeImage = document.getElementsByTagName("img")[1];
  const playBtn = document.getElementsByTagName("button")[0];
  const jsConfetti = new JSConfetti();
  hornAudio.volume = 0.5;

  hornSelector.onchange = function () {
    let hornValue = hornSelector.value;
    if (hornValue == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
      hornImage.alt = "Air Horn Image";
      hornAudio.alt = "Air Horn Audio";
    } else if (hornValue == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
      hornImage.alt = "Car Horn Image";
      hornAudio.alt = "Car Horn Audio";
    } else if (hornValue == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
      hornImage.alt = "Party Horn Image";
      hornAudio.alt = "Party Horn Audio";
    }
  };

  volume.onchange = function () {
    let volLevel = volume.value;
    if (volLevel == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Muted";
    } else if (volLevel < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    } else if (volLevel < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
    hornAudio.volume = volLevel / 100;
  };

  playBtn.addEventListener("click", () => {
    if (hornAudio.getAttribute("src")) {
      if (hornAudio.paused) {
        hornAudio.play();
      } else {
        hornAudio.pause();
        hornAudio.currentTime = 0;
        hornAudio.play();
      }
      console.log(hornAudio.volume);
    }
    let hornValue = hornSelector.value;
    if (hornValue == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
