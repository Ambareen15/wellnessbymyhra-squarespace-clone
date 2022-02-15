// hamburger menu
const mobileNav = document.getElementById('mobile-nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('nav-open');
});

//login form

const loginPage = document.getElementById('login-page');
const loginButton = document.getElementById('desktop-login');
const overlay = document.getElementById('overlay');

loginButton.addEventListener('click', () => {
    loginPage.classList.toggle('login-open');
    overlay.classList.toggle('login-open');
})










// elements fading in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions= {
    threshold: 1,
    rootMargin: '0px 0px -30px 0px'
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