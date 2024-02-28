let loadCount = 50;
let audioPlayed = false; 
const audio = document.querySelector('audio');
const body = document.querySelector('body');
const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    let currentWidth = 0;
    let currentLeft = 0;

    const timer = setInterval(() => {
        currentWidth+=0.5;
        loading.style.width = `${currentWidth}%`;

        if(currentWidth >= 100){
            currentLeft+=0.5;
            loading.style.left = `${currentLeft}%`;

            if(currentLeft >= 100){
                clearTimeout(timer);
                loading.remove();
            }
        }
    }, 10);
});

body.addEventListener('click', (e) => {
    if (!audioPlayed) {
      audio.play();
      audioPlayed = true;
    }
});

