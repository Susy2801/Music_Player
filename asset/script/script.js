document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play-button");
  const audioPlayer = document.getElementById("audio-player");
  const progressBar = document.getElementById("progress-bar");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("current-time");
  const totalTime = document.getElementById("total-time");
  const songLogo = document.getElementById("song-img");
  const songBox = document.getElementById("song-img-out");
  const volumeControl = document.getElementById("volume");

  volumeControl.addEventListener("input", function () {
    const volumeValue = volumeControl.value;
    audioPlayer.volume = volumeValue / 100;
  });

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-stop");
      songLogo.style.borderRadius = "50%";
      songLogo.style.animation = "rotate 5s linear infinite";
      songBox.style.borderRadius = "60%";
    } else {
      audioPlayer.pause();
      playButton.classList.add("fa-play");
      playButton.classList.remove("fa-stop");
      songLogo.style.borderRadius = "30px";
      songBox.style.borderRadius = "40px";
      songLogo.style.animation = "none";
    }
  });

  audioPlayer.addEventListener("timeupdate", function () {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percent + "%";
    currentTime.textContent = formatTime(audioPlayer.currentTime);
  });

  audioPlayer.addEventListener("durationchange", function () {
    totalTime.textContent = formatTime(audioPlayer.duration);
  });

  progressBar.addEventListener("click", function (event) {
    const percent = (event.offsetX / progressBar.offsetWidth) * 100;
    audioPlayer.currentTime = (percent / 100) * audioPlayer.duration;
  });

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
});

function playlist() {
  var musicPlayer = document.getElementById("music-player");
  var musicPlaylist = document.getElementById("music-playlist");

  musicPlayer.classList.toggle("mp-hidden");
  musicPlaylist.classList.toggle("mpl-show");
}

function musicPlayer() {
  var musicPlayer = document.getElementById("music-player");
  var musicPlaylist = document.getElementById("music-playlist");

  musicPlayer.classList.remove("mp-hidden");
  musicPlaylist.classList.remove("mpl-show");
}
