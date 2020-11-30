
// Open Signup Modalbox

var body = document.body;
var modalBox = document.getElementById("signUpModal");
var password = document.getElementById("password");
var innerModel = document.getElementById("modal-box");
var modalHeader = document.getElementById("modal-header");
var modalFooter = document.getElementById("modal-footer");
var modalBody = document.getElementById("modal-body");
var modalPadding = 120;

function openModal() {
    if (getComputedStyle(modalBox).display === "none") {
        modalBox.style.display = "block";
        body.style.overflow = "hidden";
        document.getElementById("name").focus();
        modalBody.style.maxHeight = innerModel.offsetHeight - (modalHeader.offsetHeight + modalFooter.offsetHeight + modalPadding) + "px";
        modalBody.style.overflow = "auto";
    } else {
        modalBox.style.display = "none";
    }
}



// close Signup Modalbox

function closeModal() {
    modalBox.style.display = "none";
    body.style.overflow = "auto";
}
window.onclick = function (event) {
    if (event.target === modalBox) {
        modalBox.style.display = "none";
        body.style.overflow = "auto";
    }
}
window.onkeyup = function (event) {
    if (event.key === 'Escape') {
        modalBox.style.display = 'none'
        body.style.overflow = "auto";
    }
}

