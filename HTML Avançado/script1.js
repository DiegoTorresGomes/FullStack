
function mouse(){
    let m = document.getElementById("controle1")

    m.addEventListener("mouseout", mouseout)
}

function mouseout() {
    this.innerHTML = " sem controle "
}

let video = document.getElementById("video");

function retroceder() {
    video.currentTime -=15;
}

function acelerar() {
    video.currentTime +=15;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function aumentar_vel() {
    video.playbackRate +=0.1;
}
function diminuir_vel() {
    video.playbackRate -=0.1;
}


   