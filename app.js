
const photo2 = document.getElementById('photo2');
function animerRotation() {
    photo2.style.transform += 'rotate(1deg)';
    requestAnimationFrame(animerRotation)
}
//Rotation logo by id= "photo2"

window.onload = function() {
    animerRotation();
};

// Zoomer photos by id = "images"
const images = document.getElementById('images');
function zoomer() {
    images.style.transform = 'scale(1.1)';
}

function resetzoomer() {
    images.style.transform = 'scale(1)';
}

images.addEventListener('mouseenter', zoomer)
images.addEventListener('mouseleave', resetzoomer)

// animation du titre d'acceuil
const title = document.getElementById('title');

let fontSize = 100;
let increasing = true;

function animateTitleText() {
    if (increasing) {
        fontSize += 1;
        if (fontSize >= 32) {
            increasing = false;
        }
    } else {
        fontSize -= 1;
        if (fontSize <= 24) {
            increasing = true;
        }
    }
    title.style.fontSize = fontSize + 'px';
}

animateTitleText();

setTimeout(function() {
    clearInterval(animationInterval);
    title.style.fontSize = ''; 
}, 5000);

const animationInterval = setInterval(animateTitleText, 110);


