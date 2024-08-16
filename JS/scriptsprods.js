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


    // // Código para la animación de mosaico
    var tileContainer = document.querySelector('.tileContainer');
    // var imgSrc = "images/background3.jpg"; // Ruta de tu imagen de fondo
    var tileWidth = 80;
    var tileHeight = 80;
    var numTiles = 0;

    function init() {
        var image = new Image();
        image.src = imgSrc;
        image.onload = function() {
            createTiles(image.width, image.height);
        };
    }

    function createTiles(imgWidth, imgHeight) {
        var cols = Math.ceil(tileContainer.offsetWidth / tileWidth);
        var rows = Math.ceil(tileContainer.offsetHeight / tileHeight);
        numTiles = cols * rows;

        for (var i = 0; i < numTiles; i++) {
            var tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.width = tileWidth + 'px';
            tile.style.height = tileHeight + 'px';
            tile.style.left = (i % cols) * tileWidth + 'px';
            tile.style.top = Math.floor(i / cols) * tileHeight + 'px';
            tile.style.backgroundImage = 'url(' + imgSrc + ')';
            tile.style.backgroundSize = (cols * tileWidth) + 'px ' + (rows * tileHeight) + 'px';
            tile.style.backgroundPosition = 
                '-' + tile.style.left + ' -' + tile.style.top;

            tileContainer.appendChild(tile);
            tile.addEventListener('mouseover', moveTile);
        }
    }

    function moveTile(e) {
        var offset = 50;
        var left = parseInt(e.target.style.backgroundPositionX) + (Math.random() * offset - offset / 2);
        var top = parseInt(e.target.style.backgroundPositionY) + (Math.random() * offset - offset / 2);
        
        gsap.to(e.target, {duration: 1, backgroundPositionX: left, backgroundPositionY: top, ease: "power1.out"});
    }

    init();
});