// Animate numbers when they come into view
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const value = target.innerText;
            anime({
                targets: target,
                innerHTML: [0, value],
                round: 1,
                duration: 2000,
                easing: 'easeInOutExpo'
            });
            observer.unobserve(target);
        }
    });
});

counters.forEach(counter => observer.observe(counter));
