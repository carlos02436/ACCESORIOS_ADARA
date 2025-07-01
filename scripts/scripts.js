// Función para ocultar el menú cuando se hace clic en un enlace
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide(); // Oculta el menú
        });
    });
}); //Final de la función ocultar el menú

// Hace que todas las imágenes sean responsivas
select('img', true).forEach(img => {
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
});

// Hace que todos los videos sean responsivos
select('video', true).forEach(video => {
    video.style.maxWidth = '100%';
    video.style.height = 'auto';
    video.style.display = 'block';
});

// Opcional: para iframes de videos (YouTube, Vimeo, etc.)
select('iframe', true).forEach(iframe => {
    // Solo aplica a iframes de video
    if (/youtube|vimeo/.test(iframe.src)) {
        iframe.style.maxWidth = '100%';
        iframe.style.height = 'auto';
        iframe.style.display = 'block';
    }
});

// Hace que la imagen de fondo del body ocupe siempre el ancho y alto de la página
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center center';
document.body.style.minHeight = '100vh'; //Final de la función responsive

// Imágenes del carrusel tipo grid
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('#carruselAdaraCarousel .carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');
    // Mostrar todas las imágenes (remover active y ocultar)
    items.forEach(item => {
        item.classList.add('active');
        item.style.display = 'block';
    });

    // Los botones no cambian nada porque todas las imágenes están visibles
    document.getElementById('carruselPrevBtn').onclick = function (e) { e.preventDefault(); };
    document.getElementById('carruselNextBtn').onclick = function (e) { e.preventDefault(); };
});

// Pasar imágenes del carrusel una por una
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carruselAdaraCarousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Oculta todas las imágenes excepto la primera
    items.forEach((item, idx) => {
        item.classList.remove('active');
        item.style.display = idx === 0 ? 'block' : 'none';
    });
    items[0].classList.add('active');

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        items[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
        items[currentIndex].style.display = 'block';
    }, 3000); // Cambia cada 3 segundos
});