function makeSwitchUserButtonClickable() {
    let switchUserButton = document.getElementById("switchUserButton");
    switchUserButton.addEventListener("click", goToUserHTML);
};

function goToUserHTML(event) {
    location.href = "index.html";
}