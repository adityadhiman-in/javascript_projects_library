let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control = document.getElementById("control");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

// Sample songs list
const songs = [
    { title: 'Until I Found You', artist: 'Stephen Sanchez', src: './until.mp3' },
    // Add more songs here
];

let currentSongIndex = 0;

// Load the current song
function loadSong(index) {
    song.src = songs[index].src;
    song.load();
    document.querySelector('h1').textContent = songs[index].title;
    document.querySelector('p').textContent = songs[index].artist;
    song.play();
    control.classList.remove("ri-play-circle-line");
    control.classList.add("ri-pause-circle-line");
}

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Update progress bar as song plays
song.ontimeupdate = () => {
    progress.value = song.currentTime;
}

// Handle progress bar change
progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

control.addEventListener("click", () => {
    if (control.classList.contains("ri-play-circle-line")) {
        song.play();
        control.classList.remove("ri-play-circle-line");
        control.classList.add("ri-pause-circle-line");
    } else {
        song.pause();
        control.classList.remove("ri-pause-circle-line");
        control.classList.add("ri-play-circle-line");
    }
});

// Handle next song
next.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Handle previous song
prev.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Initialize player with first song
loadSong(currentSongIndex);
