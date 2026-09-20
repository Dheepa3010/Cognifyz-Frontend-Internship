const button = document.getElementById("activateButton");

const page = document.getElementById("page");

const message = document.getElementById("message");

const status = document.getElementById("status");

const dot = document.querySelector(".dot");


button.addEventListener("click", function () {

    /* Required Task 4 functionality:
       Change the background colour */

    page.style.background = "#170b2d";


    /* Extra NEXORA interaction */

    button.textContent = "SYSTEM ACTIVE";

    status.textContent = "AI CORE ONLINE";

    dot.style.background = "#a78bfa";

    dot.style.boxShadow = "0 0 15px #a78bfa";

    message.textContent =
        "✦ AI Environment Activated — NEXORA is online.";

});