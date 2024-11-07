const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const ball = document.getElementById('ball');
const continueBtn = document.getElementById('continue-btn');

let ballsScreenHeightFits;
let ballsScreenWidthFits;
let size;

ball.classList.add('ball-bounce-in');
setTimeout(() => {
    ball.classList.add('screen-ball');
    ballsScreenHeightFits = screenHeight / 100;
    ballsScreenWidthFits = screenWidth / 100;
    size = (ballsScreenWidthFits > ballsScreenHeightFits ? ballsScreenWidthFits : ballsScreenHeightFits) * 200;
    ball.style.height = size + 'px';
    ball.style.width = size + 'px';
}, 1000);

setTimeout(() => {
    ball.style.top = 200 + 'px';
},2000);

setTimeout(() => {
    continueBtn.style.bottom= 60+'px';
    continueBtn.style.opacity = '1';
    ball.style.height = size/2 + 'px';
}, 2200);
