document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const elements = document.querySelectorAll('.feature-image');

    // Función para actualizar los fondos de las secciones
    function updateBackground() {
        sections.forEach(section => {
            const background = section.getAttribute('data-background');
            section.style.backgroundImage = `url(${background})`;
        });
    }

    function animateImage(img) {
        img.style.left = '450px'; // Cambia la posición de 'left'
    }

    // Función para verificar si un elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación en scroll
    function animateOnScroll() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    // Llamada inicial para establecer el fondo correcto y animaciones en scroll
    updateBackground();
    animateOnScroll();

    // Escuchar eventos de desplazamiento y redimensionamiento
    window.addEventListener('scroll', updateBackground);
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
    window.addEventListener('DOMContentLoaded', animateOnScroll);

    // Animar la imagen al hacer clic
    const image = document.querySelector('#productos .movimiento');
    if (image) {
        image.addEventListener('click', function() {
            animateImage(this);
        });
    }

    
});
