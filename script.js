const songs = [
  // Vanakkam Chennai
  { title: "Hey", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Hey.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  { title: "Osaka Osaka", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Osaka-Osaka.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  { title: "Engadi Porandha", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Engadi-Porandha.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  { title: "Chennai City Gangsta", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Chennai-City-Gangsta.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  { title: "Ailasa Ailasa", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Ailasa-Ailasa.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  { title: "Oh Penne", artist: "Vanakkam Chennai", movie: "Vanakkam Chennai", src: "Music/Vanakkam Chennai/Oh-Penne.mp3", cover: "Music/Vanakkam Chennai/Vanakkam Chennai.jpg" },
  // Vaaranam Aayiram
  { title: "Adiyae Kolluthey", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Adiyae-Kolluthey-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Annul Maelae", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Annul-Maelae-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Nenjukkul Peidhidum", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Nenjukkul-Peidhidum-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Ava Enna Enna", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Ava-Enna-Enna-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Oh Shanthi Shanthi", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Oh-Shanthi-Shanthi-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Ragasiyam", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Ragasiyam-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Yethi Yethi", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Yethi-Yethi-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  { title: "Mundhinam Parthene", artist: "Vaaranam Aayiram", movie: "Vaaranam Aayiram", src: "Music/Vaaranam Aayiram/Mundhinam-Parthene-MassTamilan.com.mp3", cover: "Music/Vaaranam Aayiram/Vaaranam Aayiram.jpg" },
  // Hridayam
  { title: "Thathaka Theithare", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Thathaka-Theithare.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Pottu Thotta Pournami", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Pottu-Thotta-Pournami.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Nagumo", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Nagumo.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Minnalkkodi", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Minnalkkodi.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Manasse Manasse", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Manasse-Manasse.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Hridayam Theme", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Hridayam---Theme.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Darshana", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Darshana.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  { title: "Arike Ninna", artist: "Hridayam", movie: "Hridayam", src: "Music/Hridayam/Arike-Ninna.mp3", cover: "Music/Hridayam/Hridayam.jpeg" },
  // Anjaan
  { title: "Kadhal Aasai", artist: "Anjaan", movie: "Anjaan", src: "Music/Anjaan/Kadhal-Aasai.mp3", cover: "Music/Anjaan/Anjaan.jpeg" },
  { title: "Ek Do Theen", artist: "Anjaan", movie: "Anjaan", src: "Music/Anjaan/Ek-Do-Theen.mp3", cover: "Music/Anjaan/Anjaan.jpeg" },
  { title: "Sirippu En", artist: "Anjaan", movie: "Anjaan", src: "Music/Anjaan/Sirippu-En.mp3", cover: "Music/Anjaan/Anjaan.jpeg" },
  { title: "Bang Bang Bang", artist: "Anjaan", movie: "Anjaan", src: "Music/Anjaan/Bang-Bang-Bang.mp3", cover: "Music/Anjaan/Anjaan.jpeg" },
  { title: "Oru Kan Jaadai", artist: "Anjaan", movie: "Anjaan", src: "Music/Anjaan/Oru-Kan-Jaadai.mp3", cover: "Music/Anjaan/Anjaan.jpeg" },
  // 3
  { title: "Come on Girls", artist: "3", movie: "3", src: "Music/3/Come-on-Girls.mp3", cover: "Music/3/3.jpg" },
  { title: "Kannazhaga", artist: "3", movie: "3", src: "Music/3/Kannazhaga.mp3", cover: "Music/3/3.jpg" },
  { title: "A life Full of love", artist: "3", movie: "3", src: "Music/3/A-life-Full-of-love.mp3", cover: "Music/3/3.jpg" },
  { title: "Poo Nee Poo", artist: "3", movie: "3", src: "Music/3/Poo-Nee-Poo.mp3", cover: "Music/3/3.jpg" },
  { title: "Nee Partha", artist: "3", movie: "3", src: "Music/3/Nee-Partha.mp3", cover: "Music/3/3.jpg" },
  { title: "The Rhythem of love", artist: "3", movie: "3", src: "Music/3/The-Rhythem-of-love.mp3", cover: "Music/3/3.jpg" },
  { title: "Theme of 3", artist: "3", movie: "3", src: "Music/3/Theme-of-3.mp3", cover: "Music/3/3.jpg" },
  { title: "Poo Nee Poo 2", artist: "3", movie: "3", src: "Music/3/Poo-Nee-Poo-2.mp3", cover: "Music/3/3.jpg" },
  { title: "Why this kolaveri di", artist: "3", movie: "3", src: "Music/3/Why-this-kolaveri-di.mp3", cover: "Music/3/3.jpg" },
  { title: "Idhazhin Oram", artist: "3", movie: "3", src: "Music/3/Idhazhin-Oram.mp3", cover: "Music/3/3.jpg" },
];

let filteredSongs = [...songs];
let currentSong = 0;
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songListDiv = document.getElementById('song-list');
const movieList = document.getElementById('movie-list');

function loadSong(index) {
  const song = filteredSongs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
  highlightSong(index);
}

function playSong() {
  audio.play();
  playBtn.innerHTML = '<span>&#10073;&#10073;</span>';
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<span>&#9654;</span>';
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + filteredSongs.length) % filteredSongs.length;
  loadSong(currentSong);
  playSong();
});

nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % filteredSongs.length;
  loadSong(currentSong);
  playSong();
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', updateProgress);
audio.addEventListener('ended', () => {
  nextBtn.click();
});

function updateProgress() {
  const { duration, currentTime } = audio;
  const percent = duration ? (currentTime / duration) * 100 : 0;
  progress.style.width = percent + '%';
  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
}

progressBar.addEventListener('click', (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

function formatTime(time) {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function renderSongList() {
  songListDiv.innerHTML = '';
  filteredSongs.forEach((song, idx) => {
    const div = document.createElement('div');
    div.className = 'song-item' + (idx === currentSong ? ' active' : '');
    div.innerHTML = `<span class="song-title">${song.title}</span> <span class="song-artist">${song.artist}</span>`;
    div.addEventListener('click', () => {
      currentSong = idx;
      loadSong(currentSong);
      playSong();
    });
    songListDiv.appendChild(div);
  });
}

function highlightSong(idx) {
  const items = songListDiv.querySelectorAll('.song-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === idx);
  });
}

if (movieList) {
  movieList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const movie = e.target.getAttribute('data-movie');
      document.querySelectorAll('#movie-list li').forEach(li => li.classList.remove('active'));
      e.target.classList.add('active');
      if (movie === 'All') {
        filteredSongs = [...songs];
      } else {
        filteredSongs = songs.filter(song => song.movie === movie);
      }
      currentSong = 0;
      loadSong(currentSong);
      renderSongList();
    }
  });
}

// Initial render
renderSongList();
loadSong(currentSong); 