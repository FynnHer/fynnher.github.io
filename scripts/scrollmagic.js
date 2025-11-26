/* ============================================
   ScrollMagic Configuration with GSAP
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, using fallback animations');
        return;
    }
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    /* ============================================
       Hero Parallax Effect
       ============================================ */
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Parallax background
        gsap.to('.hero-bg', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 200,
            opacity: 0.3
        });
        
        // Hero content fade out on scroll
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'center top',
                scrub: true
            },
            y: -100,
            opacity: 0
        });
        
        // Scroll indicator fade
        gsap.to('.scroll-indicator', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '20% top',
                scrub: true
            },
            opacity: 0
        });
    }
    
    /* ============================================
       Section Reveal Animations
       ============================================ */
    
    // Intro section animations
    const introElements = document.querySelectorAll('.intro-section .reveal');
    introElements.forEach((el, index) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2
        });
    });
    
    /* ============================================
       Project Cards Animation
       ============================================ */
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            y: 80,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power2.out'
        });
        
        // Hover effect enhancement
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    /* ============================================
       Blog Cards Animation
       ============================================ */
    
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    /* ============================================
       Stats Cards Animation
       ============================================ */
    
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    /* ============================================
       Section Headers Animation
       ============================================ */
    
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
        
        // Animate underline
        const underline = header.querySelector('.title-underline');
        if (underline) {
            gsap.from(underline, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                scaleX: 0,
                duration: 0.8,
                delay: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    /* ============================================
       Contact CTA Animation
       ============================================ */
    
    const ctaSection = document.querySelector('.contact-cta');
    if (ctaSection) {
        gsap.from('.cta-content', {
            scrollTrigger: {
                trigger: ctaSection,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    }
    
    /* ============================================
       Timeline Animation (About Page)
       ============================================ */
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.2,
            ease: 'power2.out'
        });
    });
    
    /* ============================================
       Skill Cards Animation (About Page)
       ============================================ */
    
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            rotation: -5,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    /* ============================================
       ScrollMagic Scenes (Alternative/Additional Effects)
       ============================================ */
    
    // Pin hero section (optional)
    // Uncomment if you want a pinned hero effect
    /*
    new ScrollMagic.Scene({
        triggerElement: '.hero',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('.hero', { pushFollowers: true })
    .addTo(controller);
    */
    
    /* ============================================
       Smooth Scroll with ScrollMagic
       ============================================ */
    
    // Add smooth scrolling behavior enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    /* ============================================
       Reveal on Scroll (Fallback Enhancement)
       ============================================ */
    
    const reveals = document.querySelectorAll('.reveal:not(.animated)');
    reveals.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            onComplete: () => el.classList.add('active')
        });
    });
    
    console.log('ScrollMagic initialized successfully');
});
