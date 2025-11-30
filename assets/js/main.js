/* ============================================
   Main JavaScript - Navigation & Utilities
   ============================================ */

// Add js-enabled class immediately to enable reveal animations
document.documentElement.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initRevealAnimations();
    initParticles();
});

/* ============================================
   Navigation
   ============================================ */

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

/* ============================================
   Reveal Animations (Fallback without ScrollMagic)
   ============================================ */

function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
}

/* ============================================
   Particle Background
   ============================================ */

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.5 + 0.1;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: ${Math.random() > 0.5 ? 'var(--accent-cyan)' : 'var(--accent-purple)'};
        border-radius: 50%;
        opacity: ${opacity};
        animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
        }
        25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.5;
        }
        50% {
            transform: translate(-10px, -50px) scale(0.8);
            opacity: 0.2;
        }
        75% {
            transform: translate(15px, -20px) scale(1.1);
            opacity: 0.4;
        }
    }
`;
document.head.appendChild(particleStyle);

/* ============================================
   Smooth Scroll
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   Typed Effect (Simple)
   ============================================ */

function initTypedEffect() {
    const typedElement = document.querySelector('.typed-text');
    if (!typedElement) return;
    
    const text = typedElement.textContent;
    typedElement.textContent = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            typedElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Initialize typed effect
initTypedEffect();
