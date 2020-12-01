// testimonial

function activeIndicator(evt, tabIndex) {
    var testimonialIndicator = document.getElementsByClassName("manual-btn");
    var testimonialSlides = document.getElementsByClassName("testimonial-card");
    for (var i = 0; i < testimonialIndicator.length; i++) {
        testimonialIndicator[i].className = testimonialIndicator[i].className.replace(" active", "");
        testimonialSlides[i].className = testimonialSlides[i].className.replace(" active", "")
    }
    testimonialSlides[tabIndex].classList.add("active");
    evt.currentTarget.className += " active";
}


// Investors Slider

var slideIndex = 1;
showSlide(slideIndex);

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("working-guide__slide");
    var indicationNumber = document.getElementsByClassName("working-guide__index");
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

prevBtn.addEventListener("click", function () {
    prevBtn.classList.add("active");
    nextBtn.classList.remove("active");
})

nextBtn.addEventListener("click", function () {
    nextBtn.classList.add("active");
    prevBtn.classList.remove("active");
})