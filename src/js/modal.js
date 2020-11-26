
// Open Signup Modalbox

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


// close Signup Modalbox

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

