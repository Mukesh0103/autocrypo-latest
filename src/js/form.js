
// Show/Hide Password

function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}


// Form validation

function validateForm() {
    var name = document.getElementById("name");
    if (name.value === "") {
        document.getElementById("name-error").innerHTML = "Name should not be empty!";
        name.focus();
        return false;
    } else {
        document.getElementById("name-error").innerHTML = "";
    }
    var email = document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value === "" || email.value === null) {
        document.getElementById("email-error").innerHTML = "Email should not be empty!";
        email.focus();
        return false;
    } else if (!email.value.match(mailformat)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address!";
        email.focus();
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
    }
    var password = document.getElementById("password");
    if (password.value === "") {
        document.getElementById("pass-error").innerHTML = "Password should not be empty!";
        password.focus();
        return false;
    } else if (password.value.length < 6) {
        document.getElementById("pass-error").innerHTML = "Minimum length should be 6 characters long!";
        password.focus();
        return false;
    } else if (password.value.length > 16) {
        document.getElementById("pass-error").innerHTML = "Maximum length should not exceed 16 characters!";
        password.focus();
        return false;
    } else {
        document.getElementById("pass-error").innerHTML = "";
    }
}