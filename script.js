const audio = new Audio("music/all-roads.mp3");

const play = document.getElementById("play");

let isPlaying = false;

play.onclick = () => {
  if (!isPlaying) {
    audio.play();
    play.innerText = "⏸ Pause";
  } else {
    audio.pause();
    play.innerText = "▶ Play";
  }
  isPlaying = !isPlaying;
};
