document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const otpSection = document.getElementById("otp-section");
    const errorMessage = document.getElementById("error-message");
    const otpInput = document.getElementById("otp");
    const verifyOtpBtn = document.getElementById("verifyOTP"); // Fixed ID ✅

    let generatedOTP = ""; // Store OTP globally

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "password123") {
                generatedOTP = generateOTP();
                alert(`Your OTP is: ${generatedOTP}`); // Simulating OTP sent to email

                // Show OTP input section
                otpSection.style.display = "block";
                loginForm.style.display = "none"; // Hide login form
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        });
    }

    // OTP Verification Event Listener
    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener("click", function () {
            const userOTP = otpInput.value.trim();
            
            console.log("Generated OTP:", generatedOTP);
            console.log("User-entered OTP:", userOTP);

            if (userOTP === generatedOTP) {
                alert("OTP verified! Redirecting..."); // Debugging alert
                window.location.href = "index.html"; // Redirect on success
            } else {
                errorMessage.textContent = "Invalid OTP. Try again.";
            }
        });
    }
});

// Generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
