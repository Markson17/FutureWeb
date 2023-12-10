function showWalletSection() {
    var nameInput = document.getElementById("name");

    if (nameInput.checkValidity()) {
        document.getElementById("registerSection").classList.add("hidden");
        document.getElementById("walletSection").classList.remove("hidden");
    } else {
        alert("Please enter a valid name.");
    }
}