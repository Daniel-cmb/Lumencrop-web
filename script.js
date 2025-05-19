document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animación de las barras del menú
            const bars = this.querySelectorAll('.bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.click();
            }
        });
    });
    
    // Cambiar estilo de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        }
    });
    
    // Formulario de contacto - Ya no necesitamos este código porque ahora usamos FormSubmit
    // Pero mantenemos la alerta para pruebas locales
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Solo para pruebas locales, se eliminará cuando se implemente FormSubmit
        if (contactForm.getAttribute('action').includes('TU-EMAIL@AQUI.COM')) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value;
                alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
                contactForm.reset();
            });
        }
    }
    
    // Formulario de newsletter - Ya no necesitamos este código porque ahora usamos FormSubmit
    // Pero mantenemos la alerta para pruebas locales
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        // Solo para pruebas locales, se eliminará cuando se implemente FormSubmit
        if (newsletterForm.getAttribute('action').includes('TU-EMAIL@AQUI.COM')) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('¡Gracias por suscribirte a nuestro boletín!');
                newsletterForm.reset();
            });
        }
    }
    
    // Año actual en el footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Animación de elementos al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .tech-item, .case-card, .feature, .about-image, .tech-image');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Aplicar estilos iniciales para la animación
    const elementsToAnimate = document.querySelectorAll('.benefit-card, .tech-item, .case-card, .feature, .about-image, .tech-image');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Añadir clase para animar
    document.addEventListener('scroll', function() {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (position < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Ejecutar animación al cargar
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Efecto parallax en el hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });
    
    // Animación de las formas de fondo
    const animateShapes = () => {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            const randomDelay = Math.random() * 2;
            const randomTime = 3 + Math.random() * 2;
            
            shape.style.transition = `transform ${randomTime}s ease-in-out ${randomDelay}s`;
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
        
        setTimeout(animateShapes, 5000);
    };
    
    animateShapes();
});