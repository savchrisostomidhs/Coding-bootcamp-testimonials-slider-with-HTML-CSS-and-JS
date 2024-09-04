const bio = document.querySelectorAll(".js-bio");
const slides = document.querySelectorAll(".js-slide");

const buttonPrev = document.querySelector(".js-prev");
const buttonNext = document.querySelector(".js-next");

let currentSlide = 0;

function change() {
    bio.forEach(element => {
        element.style.display = "none";
        element.classList.remove("fade");
    });

    slides.forEach(element => {
        element.style.display = "none";
        element.classList.remove("fade");
    });

    bio[currentSlide].style.display = "flex";
    bio[currentSlide].classList.add("fade");

    slides[currentSlide].style.display = "block";
    slides[currentSlide].classList.add("fade");
}

buttonPrev.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = bio.length - 1;
    } else {
        currentSlide--;
    }

    change();
});

buttonNext.addEventListener("click", () => {
    if (currentSlide === bio.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    change();
});