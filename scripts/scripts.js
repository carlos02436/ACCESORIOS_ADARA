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

