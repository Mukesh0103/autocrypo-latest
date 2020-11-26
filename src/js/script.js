// navmenu in mobile screen

function openMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
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
