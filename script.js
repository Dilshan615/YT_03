
//  scrollReveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal("", { origin: "top" });
ScrollReveal().reveal("", { origin: "bottom" });
ScrollReveal().reveal("", { origin: "left" });

// typed.js

const typed = new Typed('.text', {
    strings: ['', '', ''],
    typeSpeed: 90,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});