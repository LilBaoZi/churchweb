let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides');
function showSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000);
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-0');
    mobileMenu.classList.remove('-translate-x-full');
});
closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('-translate-x-full');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
