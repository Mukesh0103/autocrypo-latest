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

monthlyTab.addEventListener("click", function () {
    planDetails.classList.add("active");
    monthlyTab.classList.add("active-tab");
    yearlyTab.classList.remove("active-tab");
});

yearlyTab.addEventListener("click", function () {
    planDetails.classList.remove("active");
    monthlyTab.classList.remove("active-tab");
    yearlyTab.classList.add("active-tab");
});
