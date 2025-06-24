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

    