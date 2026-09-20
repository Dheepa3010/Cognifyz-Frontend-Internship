const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Clear previous errors */

    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    successMessage.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    subjectInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");


    let isValid = true;


    /* Name Validation */

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your full name.";

        nameInput.classList.add("input-error");

        isValid = false;
    }


    /* Email Validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email address.";

        emailInput.classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("input-error");

        isValid = false;
    }


    /* Subject Validation */

    if (subjectInput.value.trim() === "") {

        subjectError.textContent =
            "Please enter a subject.";

        subjectInput.classList.add("input-error");

        isValid = false;
    }


    /* Message Validation */

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        messageInput.classList.add("input-error");

        isValid = false;
    }


    /* Success */

    if (isValid) {

        successMessage.textContent =
            "✓ Transmission sent successfully! NEXORA has received your message.";

        form.reset();
    }

});