let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
let slideInterval = setInterval(() => changeSlide(1), 5000);

function changeSlide(n) {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 5000);
    slides[slideIndex].classList.remove("active");
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].classList.add("active");
}