function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registered!");
    window.location.href = "index.html";
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Login Success");
        window.location.href = "gallery.html";
    } else {
        alert("Invalid login");
    }
}
function forgotPassword() {
    let email = prompt("Enter your email:");

    if (email === localStorage.getItem("email")) {
        alert("Your password is: " + localStorage.getItem("password"));
    } else {
        alert("Email not found");
    }
}