const left = document.querySelector('.left');
const right = document.querySelector('.right'); // Changed Right to right
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image'); // Changed 'image' to '.image' assuming images have a class 'image'

let slideNumber = 1; // Corrected slideNumer to slideNumber
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

const getFirstSlide = () => {
    slider.style.transform = 'translateX(0px)';
    slideNumber = 1;
};

right.addEventListener('click', () => { // Changed Right to right
    if (slideNumber < length) { // Use 'length' instead of 'images.length'
        nextSlide();
    } else {
        getFirstSlide();
    }
});
