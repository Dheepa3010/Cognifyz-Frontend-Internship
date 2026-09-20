const colorButtons = document.querySelectorAll(".color-btn");
const body = document.body;

const resetButton = document.getElementById("resetTheme");
const glowButton = document.getElementById("toggleGlow");

const aiCircle = document.querySelector(".ai-circle");
const exploreButton = document.getElementById("exploreBtn");


// Change Background Color

colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedColor = button.getAttribute("data-color");

        body.style.backgroundColor = selectedColor;

    });

});


// Reset Background

resetButton.addEventListener("click", function () {

    body.style.backgroundColor = "#090b16";

});


// Toggle AI Glow

let glowActive = true;

glowButton.addEventListener("click", function () {

    if (glowActive) {

        aiCircle.style.boxShadow = "none";

        glowButton.textContent = "Enable AI Glow";

        glowActive = false;

    } else {

        aiCircle.style.boxShadow =
            "0 0 50px rgba(139, 92, 246, 0.7)";

        glowButton.textContent = "Toggle AI Glow";

        glowActive = true;

    }

});


// Explore Button Scroll

exploreButton.addEventListener("click", function () {

    document.getElementById("technology").scrollIntoView({

        behavior: "smooth"

    });

});