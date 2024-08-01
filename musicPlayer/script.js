let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control = document.getElementById("control");

song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
}

control.addEventListener("click", ()=>{
    if(control.classList.contains("ri-play-circle-line")){
        song.pause();
        control.classList.remove("ri-play-circle-line");
        control.classList.add("ri-pause-circle-line");
    }
    else{
        song.play();
        control.classList.remove("ri-pause-circle-line");
        control.classList.add("ri-play-circle-line");
    }
})