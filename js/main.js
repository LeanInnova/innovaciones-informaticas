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
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
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
    
    // Mostrar estado de carga
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';
    submitSpinner.classList.remove('d-none');
    
    try {
        // Enviar formulario
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        // Verificar respuesta
        if (response.ok) {
            // Redirigir a página de gracias
            window.location.href = form.querySelector('input[name="_next"]').value;
        } else {
            const errorData = await response.json();
            console.error('Error del servidor:', errorData);
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        
        // Mostrar mensaje de error temporal
        const errorAlert = document.createElement('div');
        errorAlert.className = 'alert alert-danger mt-3';
        errorAlert.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente o contáctanos por WhatsApp.';
        form.appendChild(errorAlert);
        
        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
            errorAlert.remove();
        }, 5000);
    } finally {
        // Restaurar estado del botón
        submitBtn.disabled = false;
        submitText.textContent = 'Enviar Mensaje';
        submitSpinner.classList.add('d-none');
    }
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
