// slideshow.js
const images = ["movie1.jpg", "movie2.jpg", "movie3.jpg"];
let currentIndex = 0;

function showNextImage() {
  const img = document.getElementById('slide-image');
  currentIndex = (currentIndex + 1) % images.length;
  img.src = images[currentIndex];
}

setInterval(showNextImage, 3000);
