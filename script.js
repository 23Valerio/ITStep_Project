// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        const slidesContainer = slider.querySelector('.slides');
        const slides = slider.querySelectorAll('.slide');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        let slideWidth;
        let currentIndex = 0;

        function updateSlideWidth() {
            if (slider.classList.contains('slider-one')) {
                slideWidth = 100; // Один слайд виден
            } else if (slider.classList.contains('slider-three')) {
                if (window.innerWidth <= 320) {
                    slideWidth = 100; // Один слайд виден при ширине экрана до 320px
                } else {
                    slideWidth = 100 / 3; // Три слайда видны
                }
            }
        }

        function updateSlidePosition() {
            const offset = -currentIndex * slideWidth;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        function goToNextSlide() {
            if (slider.classList.contains('slider-one')) {
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
            } else if (slider.classList.contains('slider-three')) {
                if (window.innerWidth <= 320) {
                    if (currentIndex < slides.length - 1) {
                        currentIndex++;
                    } else {
                        currentIndex = 0;
                    }
                } else {
                    if (currentIndex < slides.length - 3) {
                        currentIndex++;
                    } else {
                        currentIndex = 0;
                    }
                }
            }
            updateSlidePosition();
        }

        function goToPrevSlide() {
            if (slider.classList.contains('slider-one')) {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = slides.length - 1;
                }
            } else if (slider.classList.contains('slider-three')) {
                if (window.innerWidth <= 320) {
                    if (currentIndex > 0) {
                        currentIndex--;
                    } else {
                        currentIndex = slides.length - 1;
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                    } else {
                        currentIndex = slides.length - 3;
                    }
                }
            }
            updateSlidePosition();
        }

        nextButton.addEventListener('click', goToNextSlide);
        prevButton.addEventListener('click', goToPrevSlide);
        window.addEventListener('resize', () => {
            updateSlideWidth();
            updateSlidePosition();
        });

        // Initial setup
        updateSlideWidth();
        updateSlidePosition();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
})