document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const isAuthenticated = sessionStorage.getItem("authenticated") === "true";

    // Redirect to login if not authenticated and not already on login page
    if (!isAuthenticated && currentPage !== "login.html") {
        window.location.href = "login.html";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const otpSection = document.getElementById("otp-section");
    const errorMessage = document.getElementById("error-message");
    const otpInput = document.getElementById("otp");
    const verifyOtpBtn = document.getElementById("verifyOTP");
    const logoutBtn = document.getElementById("logout-btn");

    let generatedOTP = sessionStorage.getItem("otp") || "";

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "password123") {
                generatedOTP = generateOTP();
                alert(`Your OTP is: ${generatedOTP}`);
                sessionStorage.setItem("otp", generatedOTP);

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
            const storedOTP = sessionStorage.getItem("otp");

            if (userOTP === storedOTP) {
                sessionStorage.setItem("authenticated", "true");
                sessionStorage.removeItem("otp");
                alert("OTP verified! Login Successful...");
                window.location.href = "index.html";
            } else {
                errorMessage.textContent = "Invalid OTP. Try again.";
            }
        });
    }

    // Handle logout
//     if (logoutBtn) {
//         logoutBtn.addEventListener("click", function () {
//             sessionStorage.clear(); // Clear session data
//             alert("You have been logged out.");
//             window.location.href = "login.html";
//         });
//     }
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

