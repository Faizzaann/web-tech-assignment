function updateText() {
    let userInput = prompt("Enter the new text:");
    
    // Check if the user entered something or canceled
    if (userInput) {
        document.getElementById("dynamicText").innerText = userInput;
    } else {
        document.getElementById("dynamicText").innerText = "Text changed successfully!";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let formMessage = document.getElementById("formMessage");

            if (name === "" || email === "" || message === "") {
                formMessage.innerText = "Please fill in all fields.";
                formMessage.style.color = "red";
            } else {
                formMessage.innerText = "Form submitted successfully!";
                formMessage.style.color = "green";
            }
        });
    }
});
