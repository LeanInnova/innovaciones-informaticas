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
    // Agregar a main.js
const emailField = document.getElementById('email');
emailField.addEventListener('input', function() {
    this.setCustomValidity('');
    this.checkValidity();
});

emailField.addEventListener('invalid', function() {
    if (this.validity.typeMismatch) {
        this.setCustomValidity('Por favor ingresa un email válido');
    } else {
        this.setCustomValidity('Este campo es requerido');
    }
});
    
    // Validación del formulario
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }
    
    // Elementos de UI
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    
    // Estado de carga
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';
    submitSpinner.classList.remove('d-none');
    
    // Enviar con EmailJS
    emailjs.sendForm('Consulta_innovaciones', 'ehdixra', form)
        .then(function() {
            // Redirigir a página de gracias
            window.location.href = 'gracias.html';
        }, function(error) {
            // Mostrar error
            console.error('Error al enviar:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente o contáctanos por WhatsApp.');
            
            // Restaurar botón
            submitBtn.disabled = false;
            submitText.textContent = 'Enviar Mensaje';
            submitSpinner.classList.add('d-none');
        });
});
    
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
