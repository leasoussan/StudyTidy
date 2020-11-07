function makeSwitchUserButtonClickable() {
    let switchUserButton = document.getElementById("switchUserButton");
    switchUserButton.addEventListener("click", goToLoginHTML);
};

function goToLoginHTML(event) {
    location.href = "login.html";
}