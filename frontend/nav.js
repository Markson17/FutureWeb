// Button Navigation
document.addEventListener('DOMContentLoaded', function () {
    const FirstNextBtn = document.querySelector('.firstNext-onboarding');
    const secondNextBtn = document.querySelector('.secondNext-onboarding');
    const landingBtn = document.querySelector('.landing');
    const getstartedBtn = document.querySelector('.getStarted');
    const signupBtn = document.querySelector('.signup1');

    // Check if FirstNextBtn exists and add event listener
    if (FirstNextBtn) {
        FirstNextBtn.addEventListener('click', function () {
            window.location.href = "onboarding2.html";
        });
    }

    // Check if seondNextBtn exists and add event listener
    if (secondNextBtn) {
        secondNextBtn.addEventListener('click', function () {
            window.location.href = "onboarding3.html";
        });
    }

    // Check if getstartedBtn exists and add event listener
    if (getstartedBtn) {
        getstartedBtn.addEventListener('click', function () {
            window.location.href = "onboarding1.html";
        });
    }

    // Check if signupBtn exists and add event listener
    if (signupBtn) {
        signupBtn.addEventListener('click', function () {
            window.location.href = "signup1.html";
        });
    }

    // Check if landingBtn exists and add event listener
    if (landingBtn) {
        landingBtn.addEventListener('click', function () {
            window.location.href = "../index.html";
        });
    }
});