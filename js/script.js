const playOrPause = document.querySelector(`#playOrPause`);
const playprev = document.querySelector(`#playprev`);
const playnext = document.querySelector(`#playnext`);
const playlistEle = document.querySelector(`#playlists`);
const playlist = [
  `./audio/10 Adele - Lovesong.mp3`,
  `/Users/samikshyakc/Desktop/audio-player/audio/All You Need Is Love - Remastered 2009.mp3`,
  `/Users/samikshyakc/Desktop/audio-player/audio/Ticket To Ride - Remastered 2009.mp3`,
  `/Users/samikshyakc/Desktop/audio-player/audio/With A Little Help From My Friends - Remastered 2009.mp3`,
];
let playlistIndex = 0;
const song = new Audio();
song.src = playlist[playlistIndex];

playlist.forEach(function (item, index) {
  playlistEle.innerHTML += `<li data-index="${index}">${item}</li>`;
});
playlistEle.addEventListener(`click`, function (event) {
  const songToPlay = event.target;
  if (event.target.matches(`li`)) {
    playlistIndex = Number(songToPlay.dataset.index);
    song.src = playlist[playlistIndex];

    song.play();
    playOrPause.textContent = `⏸`;
  }
});
playOrPause.addEventListener(`click`, function (event) {
  if (song.paused) {
    song.play();
    playOrPause.textContent = `⏸`;
  } else {
    song.pause();
    playOrPause.textContent = `▶️`;
  }
});

playnext.addEventListener(`click`, function (event) {
  console.log(`next btn clicked`);
  playOrPause.textContent = `⏸`;
  console.log("before condition", playlistIndex);
  playlistIndex =
    playlistIndex + 1 > playlist.length - 1 ? 0 : playlistIndex + 1;
  console.log(playlistIndex);
  song.src = playlist[playlistIndex];
  song.play(`${playlist[playlistIndex]}`);
});
playprev.addEventListener(`click`, function (event) {
  playOrPause.textContent = `⏸`;
  console.log(`prev btn clicked`);
  console.log("before condition", playlistIndex);
  playlistIndex =
    playlistIndex - 1 < 0 ? playlist.length - 1 : playlistIndex - 1;
  console.log(playlistIndex);
  song.src = playlist[playlistIndex];
  song.play(`${playlist[playlistIndex]}`);
});
