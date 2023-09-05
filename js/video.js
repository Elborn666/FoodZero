const playButton = document.querySelector('.video__play');
const wrapperTitle = document.querySelector(".video__wrapper-title");
const img = document.querySelector('.video__img');
const videoPlay = document.getElementById('videoPlayer')
// const video = document.querySelector('#video-player')

// let display;
// let video;

// video = document.querySelector('#video-player')

// document.querySelector('#play').onclick = play;

// function play(){
//     video.play()
// }



playButton.addEventListener('click', onHiddenTitle);

function onHiddenTitle (){
    console.log('click');
    wrapperTitle.classList.add('none')
    img.classList.add('none')
}