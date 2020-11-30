// navmenu in mobile screen

var mobileMenu = document.getElementById("mobile-menu");
function openMenu() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

// onscroll shadow 

var onScrollShadow = document.getElementById("header");
window.onscroll = function () {
    if (window.scrollY >= 100) {
        onScrollShadow.classList.add("onscroll-shadow");
    } else {
        onScrollShadow.classList.remove("onscroll-shadow");
    }
}

// subscription plans

function switchTabs(evt) {
    var planTabs = document.getElementsByClassName("plan-tab");
    for (i = 0; i < planTabs.length; i++) {
        planTabs[i].className = planTabs[i].className.replace(" active-tab", "");
    }
    evt.currentTarget.className += " active-tab";
}

var monthlyTab = document.getElementById("monthlyTab");
var yearlyTab = document.getElementById("yearlyTab");
var planDetails = document.getElementById("planDetails");

monthlyTab.addEventListener("click", function () {
    planDetails.classList.add("active");
});

yearlyTab.addEventListener("click", function () {
    planDetails.classList.remove("active");
});
