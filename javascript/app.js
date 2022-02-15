// hamburger menu
const mobileNav = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-open');
});



// elements fading in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions= {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// home page carousel/slider

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = 3;

document.getElementById('carousel__btn-next').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('carousel__btn-prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('carousel__item-visible');
        slide.classList.add('carousel__item-hidden');
    }

    slides[slidePosition].classList.add('carousel__item-visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0; 
    } else {
        slidePosition++;
    }

    updateSlidePosition();
};

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1; 
    } else {
        slidePosition--;
    }

    updateSlidePosition();
};