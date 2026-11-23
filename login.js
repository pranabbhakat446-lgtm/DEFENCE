
// Switch to registration form

function showRegister(event) {
    event.preventDefault();

    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");

    document.getElementById("formTitle").innerText = "Register";
    document.getElementById("message").innerText = "";
}

// Switch to login form

function showLogin(event) {
    event.preventDefault();

    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");

    document.getElementById("formTitle").innerText = "Login";
    document.getElementById("message").innerText = "";
}

// Show / Hide password

function togglePassword(id) {
    const password = document.getElementById(id);

    password.type =
        password.type === "password" ? "text" : "password";
}

// Registration demo

document.getElementById("registerForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    if (password !== confirm) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration successful! You can now login.";

    this.reset();
});

// Login demo with homepage redirect

document.getElementById("loginForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const message = document.getElementById("message");

    // Demo credentials

    if (email === "demo@gmail.com" && password === "Defence123") {

        message.style.color = "green";
        message.innerText = "Login successful! Redirecting to Home Page...";

        setTimeout(function() {
            window.location.href = "home.html";
        }, 1000);

    } else {

        message.style.color = "red";
        message.innerText = "Invalid demo email or password!";

    }

});

// Forgot password demo

function forgotPassword(event) {
    event.preventDefault();

    alert("Please contact the demo administrator for password assistance.");
}
