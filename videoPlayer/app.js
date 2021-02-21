const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',toggleVideoStatus);
video.addEventListener('play',toggleVideoStatus);
video.addEventListener('timeupdate',toggleVideoStatus);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);


//
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        
    }
};

function updatePlayIcon(){
    return true;
};

function updateProgress(){
    return true
};

function setVideoProgress(){
    return true;
};

function stopVideo(){
    video.pause();
    console.log("paused")
};