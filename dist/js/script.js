function openMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function switchTabs(evt) {
    var planTabs = document.getElementsByClassName("plan-tab");
    for (i = 0; i < planTabs.length; i++) {
        planTabs[i].className = planTabs[i].className.replace(" active-tab", "");
    }
    evt.currentTarget.className += " active-tab";
}

var monthlyTab = document.getElementById("monthlyTab");
var yearlyTab = document.getElementById("yearlyTab");
var planList = document.getElementById("planDetails");

monthlyTab.addEventListener("click", function () {
    planList.classList.add("selected-plan");
});

yearlyTab.addEventListener("click", function () {
    planList.classList.remove("selected-plan");
});

function activeIndicator(evt, tabIndex) {
    var testimonialIndicator = document.querySelectorAll("#testimonial-dots");
    var testimonialSlides = document.getElementsByClassName("testimonial-card");
    for (var i = 0; i < testimonialIndicator.length; i++) {
        testimonialIndicator[i].className = testimonialIndicator[i].className.replace(" active", "");
        testimonialSlides[i].className = testimonialSlides[i].className.replace(" active", "")
    }
    testimonialSlides[tabIndex].classList.add("active");
    evt.currentTarget.className += " active";
}

var slideIndex = 1;
showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var slides = document.querySelectorAll("#content-slides");
    var indicationNumber = document.querySelectorAll("#indicator")
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    for (var i = 0; i < indicationNumber.length; i++) {
        indicationNumber[i].className = indicationNumber[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.opacity = 1;
    indicationNumber[slideIndex - 1].className += " active";
}

var modalBox = document.getElementById("signUpModal");
var password = document.getElementById("password");
var body = document.body;
function openModal() {
    if (modalBox.style.display === "none") {
        modalBox.style.display = "block";
        window.onscroll = "none";
        body.style.position = "fixed";
        document.getElementById("name").focus();
    } else {
        modalBox.style.display = "none";
    }
}
function closeModal() {
    modalBox.style.display = "none";
    body.style.position = "";
}
window.onclick = function (event) {
    if (event.target === modalBox) {
        modalBox.style.display = "none";
        body.style.position = "";
    }
}
window.onkeyup = function (event) {
    if (event.key === 'Escape') {
        modalBox.style.display = 'none'
        body.style.position = "";
    }
}
function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

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