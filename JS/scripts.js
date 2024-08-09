// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const background = section.getAttribute('data-background');
        section.style.backgroundImage = `url(${background})`;
    });

    function animateImage(img) {
        img.style.left = '450px'; // Cambia la posición de 'left'
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-image');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    // Llamada inicial para establecer el fondo correcto
    function updateBackground() {
        sections.forEach(section => {
            const background = section.getAttribute('data-background');
            section.style.backgroundImage = `url(${background})`;
        });
    }

    updateBackground();

    // Escuchar el evento de desplazamiento
    window.addEventListener('scroll', updateBackground);
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
    animateOnScroll();
    window.addEventListener('DOMContentLoaded', animateOnScroll);

    const image = document.querySelector('#productos .movimiento');
    if (image) {
        image.addEventListener('click', function() {
            animateImage(this);
        });
    }
});
