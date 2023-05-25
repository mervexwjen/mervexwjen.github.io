ScrollReveal().reveal('.image', {
    distance: '100px',
    duration: 500,
});

ScrollReveal().reveal('.text', {
    distance: '100px',
    delay: 250,
    duration: 500,
});

ScrollReveal().reveal('iframe', {
    delay: 250,
    duration: 500,
});

for (let i=1; i<=6; i++) {
    ScrollReveal().reveal(`.card:nth-of-type(${i})`, {
        delay: 250,
        duration: 1000,
        origin: i % 2 === 0 ? 'top' : 'bottom',
        distance: '100px'
    });
}