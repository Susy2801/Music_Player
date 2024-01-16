document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play-button");
  const audioPlayer = document.getElementById("audio-player");
  const progressBar = document.getElementById("progress-bar");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("current-time");
  const totalTime = document.getElementById("total-time");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-stop");
    } else {
      audioPlayer.pause();
      playButton.classList.add("fa-play");
      playButton.classList.remove("fa-stop");
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
