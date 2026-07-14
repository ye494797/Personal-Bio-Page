// Toggles the page between the default design and Fun Mode.

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("fun-mode");

    if (document.body.classList.contains("fun-mode")) {
        themeButton.textContent = "Default Mode";
    } else {
        themeButton.textContent = "Fun Mode ✨";
    }

});