const songs = [
  "music/td-up.mp3",
  "music/double-back.mp3",
  "music/5k.mp3",
  "music/mad-asf.mp3",
  "music/lost-ray.mp3",
  "music/maneuver.mp3",
  "music/all-roads.mp3"
];

const names = [
  "T'D UP",
  "DOUBLE BACK",
  "5K",
  "MAD ASF",
  "LOST RAY",
  "MANEUVER",
  "ALL ROADS"
];

let current = 0;

const audio = new Audio();
audio.src = songs[current];

const play = document.getElementById("play");
const song = document.getElementById("songName");

play.onclick = () => {
  audio.play();
};

audio.onended = () => {
  current++;

  if(current >= songs.length){
    current = 0;
  }

  audio.src = songs[current];
  song.innerText = names[current];
  audio.play();
};
