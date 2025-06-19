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
   // Reemplaza la función de validación del formulario con este código
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    
    // Validación de campos
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    
    // Mostrar feedback al usuario
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';
    submitSpinner.classList.remove('d-none');
    
    // Enviar datos a FormSubmit
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirigir a la página de gracias si todo va bien
            window.location.href = form.querySelector('input[name="_next"]').value;
        } else {
            throw new Error('Error en el servidor');
        }
    })
    .catch(error => {
        // Mostrar mensaje de error
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente o contáctanos directamente por WhatsApp.');
        console.error('Error en el formulario:', error);
        
        // Restaurar botón
        submitBtn.disabled = false;
        submitText.textContent = 'Enviar Mensaje';
        submitSpinner.classList.add('d-none');
    });
});

// Validación en tiempo real
document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
        } else {
            this.classList.remove('is-valid');
        }
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
