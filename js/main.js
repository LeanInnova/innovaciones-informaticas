document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (window.innerWidth < 992) {
                // Cerrar menú en móviles al hacer clic
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
            
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
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Enviando...';

        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                alert(result.message);
                this.reset();
            } else {
                alert(result.message || 'Error al enviar el formulario');
            }
        } catch (error) {
            alert('Error de conexión. Por favor intente más tarde.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
        }
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
