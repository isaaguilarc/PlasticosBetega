document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const featureImages = document.querySelectorAll('.feature-image');
    const textoNosotros = document.querySelector("#nosotros .texto h2");
    const textoProductos = document.querySelector("#productos .texto h2");

    //imagenes rotantes
    let currentImageIndex = 0;
    const imageElement = document.querySelector('#productos .movimiento');
    const indicators = document.querySelectorAll('#productos .indicador');
    const images = [
        'images/productos.png',
        'images/bottles2.jpg',
        'images/caps1.jpg',
        'images/productos.png'
    ];


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
            rect.top >= -threshold && 
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight + threshold || document.documentElement.clientHeight + threshold) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación en scroll
    function animateOnScroll() {
        featureImages.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }

            // Deslizar titulo Nosotros
            if (isElementInViewport(textoNosotros)) {
                if (!textoNosotros.classList.contains('animate')) {
                    textoNosotros.classList.add('animate');
                }
            }

            // Deslizar titulo Productos
            if (isElementInViewport(textoProductos)) {
                if (!textoProductos.classList.contains('animate')) {
                    textoProductos.classList.add('animate');
                }
            }
        });
    }

 

    // Llamada inicial para establecer el fondo correcto y animaciones en scroll
    updateBackground();
    //animateOnScroll();

    // Escuchar eventos de desplazamiento y redimensionamiento
    window.addEventListener('scroll', updateBackground);
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll);
    //window.addEventListener('DOMContentLoaded', animateOnScroll);

    // Cambiar la imagen al hacer clic
    if (imageElement) {
        imageElement.addEventListener('click', function() {
            // Cambiar a la siguiente imagen
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageElement.style.opacity = 0; // Desaparece la imagen actual
    
            setTimeout(() => {
                imageElement.src = images[currentImageIndex]; // Cambia la imagen
                imageElement.style.opacity = 1; // Aparece la nueva imagen
    
                // Actualizar los indicadores
                indicators.forEach((indicator, index) => {
                    if (index === currentImageIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }, 500); // Tiempo para la transición de opacidad
        });
    }

    
});
