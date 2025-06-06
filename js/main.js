document.addEventListener('DOMContentLoaded', function() {
    // Inicializar carrusel
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        speed: 1000,
    });

    // Efecto al hacer clic en el botón (opcional)
    const button = document.querySelector('.floating-button');
    button.addEventListener('click', () => {
        alert('¡Aquí irían tus servicios!');
        // O redirigir a otra sección: window.location.href = "#servicios";
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces del navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                alert('Por favor complete todos los campos requeridos.');
                return;
            }
            
            // Simular envío
            alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
            contactForm.reset();
        });
    }
    
    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .card, .animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate__fadeInUp');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página
});
