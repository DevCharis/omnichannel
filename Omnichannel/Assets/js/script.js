document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger) {
        burger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Login functionality
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            // Dummy user authentication
            if (username === "admin" && password === "password123") {
                window.location.assign("index.html"); // Redirect to main page
            } else {
                errorMessage.textContent = "Invalid username or password.";
                errorMessage.style.color = "red";
            }
        });
    }
});

// Make togglePassword globally accessible
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
