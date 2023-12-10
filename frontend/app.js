// Image Slideshow
const images = document.querySelectorAll('.ad-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

images[currentIndex].classList.add('active');
setInterval(showNextImage, 5000);

// Button Navigation
const getStartedBtn = document.querySelectorAll('.get-started');

getStartedBtn.forEach(function(getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
        window.location.href = "frontend/onboarding.html";
    });
});
