let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");
const ctrlIcon = document.getElementById("ctrlIcon");
const progressBar = document.getElementById("progress");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const songImage = document.getElementById("songImage");
const playlistElement = document.getElementById("playlist");
const addSongModal = document.getElementById("addSongModal");
const albumsGrid = document.getElementById("albumsGrid");

const songs = [
  {
    title: "Energy",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    image: "https://www.bensound.com/bensound-img/energy.jpg",
  },
  {
    title: "Sunny",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    image: "https://www.bensound.com/bensound-img/sunny.jpg",
  },
  {
    title: "Jazzy Frenchy",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    image: "https://www.bensound.com/bensound-img/jazzyfrenchy.jpg",
  },
  {
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    image: "https://www.bensound.com/bensound-img/acousticbreeze.jpg",
  },
  {
    title: "Tenderness",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
    image: "https://www.bensound.com/bensound-img/tenderness.jpg",
  },
  {
    title: "Once Again",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
    image: "https://www.bensound.com/bensound-img/onceagain.jpg",
  },
  {
    title: "Memories",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    image: "https://www.bensound.com/bensound-img/memories.jpg",
  },
  {
    title: "Cute",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-cute.mp3",
    image: "https://www.bensound.com/bensound-img/cute.jpg",
  },
  {
    title: "Funky Suspense",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-funkysuspense.mp3",
    image: "https://www.bensound.com/bensound-img/funkysuspense.jpg",
  },
  {
    title: "Slow Motion",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
    image: "https://www.bensound.com/bensound-img/slowmotion.jpg",
  },
  {
    title: "A New Beginning",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3",
    image: "https://www.bensound.com/bensound-img/anewbeginning.jpg",
  },
  {
    title: "The Lounge",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-thelounge.mp3",
    image: "https://www.bensound.com/bensound-img/thelounge.jpg",
  },
  {
    title: "Buddy",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-buddy.mp3",
    image: "https://www.bensound.com/bensound-img/buddy.jpg",
  },
  {
    title: "Epic",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    image: "https://www.bensound.com/bensound-img/epic.jpg",
  },
  {
    title: "Summer",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
    image: "https://www.bensound.com/bensound-img/summer.jpg",
  },
  {
    title: "Cinematic",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-cinematic.mp3",
    image: "https://www.bensound.com/bensound-img/cinematic.jpg",
  },
  {
    title: "Dramatic",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-dramatic.mp3",
    image: "https://www.bensound.com/bensound-img/dramatic.jpg",
  },
  {
    title: "Inspire",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-inspire.mp3",
    image: "https://www.bensound.com/bensound-img/inspire.jpg",
  },
  {
    title: "Uplifting",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-uplifting.mp3",
    image: "https://www.bensound.com/bensound-img/uplifting.jpg",
  },
  {
    title: "Beyond",
    artist: "Benjamin Tissot",
    src: "https://www.bensound.com/bensound-music/bensound-beyond.mp3",
    image: "https://www.bensound.com/bensound-img/beyond.jpg",
  },
];

function loadSong(index) {
  const song = songs[index];
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songImage.src = song.image;
  audioPlayer.src = song.src;
  audioPlayer.load();
  highlightPlaylistItem();
  highlightAlbumCard();
}

function playSong() {
  audioPlayer.play();
  ctrlIcon.classList.remove("fa-play");
  ctrlIcon.classList.add("fa-pause");
}

function pauseSong() {
  audioPlayer.pause();
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
}

function playPause() {
  if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  playSong();
}

audioPlayer.addEventListener("timeupdate", () => {
  progressBar.max = audioPlayer.duration;
  progressBar.value = audioPlayer.currentTime;
});
progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
});
audioPlayer.addEventListener("ended", nextSong);

function updatePlaylistUI() {
  playlistElement.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
    playlistElement.appendChild(li);
  });
  highlightPlaylistItem();
}

function highlightPlaylistItem() {
  const items = playlistElement.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
    if (i === currentSongIndex) {
      items[i].classList.add("active");
    }
  }
}

function updateAlbumsGrid() {
  albumsGrid.innerHTML = "";
  songs.forEach((song, index) => {
    const albumCard = document.createElement("div");
    albumCard.className = "album-card";
    albumCard.innerHTML = `
          <img src="${song.image}" alt="album-cover" />
          <div class="album-info">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
          </div>
        `;
    albumCard.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
    albumsGrid.appendChild(albumCard);
  });
  highlightAlbumCard();
}

function highlightAlbumCard() {
  const albumCards = albumsGrid.getElementsByClassName("album-card");
  for (let i = 0; i < albumCards.length; i++) {
    albumCards[i].style.outline = "none";
    if (i === currentSongIndex) {
      albumCards[i].style.outline = "2px solid #555";
    }
  }
}

function autoScrollAlbums() {
  const container = document.getElementById("albumsGrid");
  let speed = 0.5; // adjust for faster or slower scrolling
  function scrollStep() {
    container.scrollLeft += speed;
    // Reset scroll when reaching the end for seamless looping
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
    requestAnimationFrame(scrollStep);
  }
  requestAnimationFrame(scrollStep);
}

function showAddSongForm() {
  addSongModal.style.display = "flex";
}
function closeAddSongForm() {
  addSongModal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target === addSongModal) {
    closeAddSongForm();
  }
};

function handleAddSong(event) {
  event.preventDefault();
  const title = document.getElementById("newSongTitle").value;
  const artist = document.getElementById("newSongArtist").value;
  const urlInput = document.getElementById("newSongURL").value;
  const fileInput = document.getElementById("newSongFile");
  const image = document.getElementById("newSongImage").value;

  let src = "";
  if (fileInput.files && fileInput.files[0]) {
    src = URL.createObjectURL(fileInput.files[0]);
  } else if (urlInput.trim() !== "") {
    src = urlInput.trim();
  } else {
    alert("Please provide either a song URL or select a local file.");
    return;
  }

  const newSong = { title, artist, src, image };
  songs.push(newSong);
  updatePlaylistUI();
  updateAlbumsGrid();
  closeAddSongForm();
}

function initPlayer() {
  updatePlaylistUI();
  updateAlbumsGrid();
  loadSong(currentSongIndex);
  autoScrollAlbums(); 
}
initPlayer();
