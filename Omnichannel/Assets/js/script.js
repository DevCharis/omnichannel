document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const otpSection = document.getElementById("otp-section");
    const errorMessage = document.getElementById("error-message");
    const otpInput = document.getElementById("otp");
    const verifyOtpBtn = document.getElementById("verifyOTP");
    const logoutBtn = document.getElementById("logout-btn");

    let generatedOTP = sessionStorage.getItem("otp") || ""; // Retrieve OTP from session storage

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "password123") {
                generatedOTP = generateOTP();
                alert(`Your OTP is: ${generatedOTP}`); // Simulating OTP sent to email
                sessionStorage.setItem("otp", generatedOTP); // Store OTP in session storage

                // Show OTP input section
                otpSection.style.display = "block";
                loginForm.style.display = "none";
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        });
    }

    // Handle OTP verification
    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener("click", function () {
            const userOTP = otpInput.value.trim();
            const storedOTP = sessionStorage.getItem("otp"); // Retrieve OTP from session storage

            if (userOTP === storedOTP) {
                sessionStorage.setItem("authenticated", "true"); // Mark user as logged in
                sessionStorage.removeItem("otp"); // Clear OTP after successful login
                alert("OTP verified! Redirecting...");
                window.location.href = "index.html"; // Redirect to dashboard
            } else {
                errorMessage.textContent = "Invalid OTP. Try again.";
            }
        });
    }


});

// Generate a 6-digit OTP and store it in session storage
function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem("otp", otp);
    return otp;
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
