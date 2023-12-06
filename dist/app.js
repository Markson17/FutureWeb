const images = document.querySelectorAll('.ad-image');

let currentIndex = 0;

function showNextImage() {
// Remove the 'active' class from the current image
images[currentIndex].classList.remove('active');

// Increment index, or reset to 0 if it exceeds the array length
currentIndex = (currentIndex + 1) % images.length;

// Add the 'active' class to the next image
images[currentIndex].classList.add('active');
}

// Initial setup
images[currentIndex].classList.add('active');

// Set interval to switch images every 3 seconds
setInterval(showNextImage, 5000);


const getStartedBtn = document.querySelectorAll('.get-started');

getStartedBtn.forEach(function(getStartedBtn){
    getStartedBtn.addEventListener('click', function(){
        window.location.href = "dashboard.html";
    })
})
    