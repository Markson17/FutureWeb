const moneyImage = document.querySelector('.ad-image-0');
const firstAdImage = document.querySelector('.ad-image-1');
const secondAdImage = document.querySelector('.ad-image-2');
const thirdAdImage = document.querySelector('.ad-image-3');

const adText = document.querySelector('.ad-text');

let currentIndex = 0;

function showNextImage() {
    // Increment index, or reset to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % 3;
  
    // Show/hide images based on the current index
    moneyImage.style.display = currentIndex === 0 ? 'block' : 'none';
    firstAdImage.style.display = currentIndex === 0 ? 'block' : 'none';
    secondAdImage.style.display = currentIndex === 1 ? 'block' : 'none';
    thirdAdImage.style.display = currentIndex === 2 ? 'block' : 'none';
  
    // Set text based on the current index
    switch (currentIndex) {
      case 0:
        adText.innerHTML = 'Spend <span class="text-spendecPurple">wiser.</span>';
        break;
      case 1:
        adText.innerHTML = 'Save <span class="text-spendecPurple">smarter.</span>';
        break;
      case 2:
        adText.innerHTML = 'Set <span class="text-spendecPurple">goals.</span>';
        break;
    }
  }
  
  showNextImage();
  
  setInterval(showNextImage, 5000);


const getStartedBtn = document.querySelectorAll('.get-started');

getStartedBtn.forEach(function(getStartedBtn){
    getStartedBtn.addEventListener('click', function(){
        window.location.href = "dashboard.html";
    })
})
    