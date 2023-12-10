// Function to show a specific step
function showStep(step) {
    const currentStep = document.querySelector('.onboarding:not(.hidden)');
    const nextStep = document.getElementById('step' + step);

    if (currentStep && nextStep) {
        currentStep.classList.add('hidden');
        nextStep.classList.remove('hidden');
    }
}

// Function to handle going to the next step
function nextStep() {
    const currentStepNumber = parseInt(document.querySelector('.onboarding:not(.hidden)').id.replace('step', ''), 10);
    const nextStepNumber = currentStepNumber + 1;

    showStep(nextStepNumber);
}

// Function to handle going to the previous step
function prevStep() {
    const currentStepNumber = parseInt(document.querySelector('.onboarding:not(.hidden)').id.replace('step', ''), 10);
    const prevStepNumber = currentStepNumber - 1;

    showStep(prevStepNumber);
}

// Event listener for the "Proceed" button
document.querySelector('.signup').addEventListener('click', function () {
    window.location.href = "signup.html";
});