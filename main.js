document.addEventListener('DOMContentLoaded', () => {

    /* --- Hamburger Menu Logic --- */
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menuOverlay.classList.toggle('active');

        // Disable body scroll when menu is open
        if (menuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /* --- Custom Cursor Logic --- */
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Small delay for follower
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effect for Interactive Elements
    const interactiveElements = document.querySelectorAll('a, button, .menu-toggle, .timeline-item');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering');
        });
    });

    /* --- Scroll Animations (Intersection Observer) --- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.timeline-item, .about-card, .section-title, .contact-info');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Add class for active state handling
    document.addEventListener('scroll', () => {
        animatedElements.forEach(el => {
            if (el.classList.contains('in-view')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    /* --- Endless Marquee Logic (Duplication) --- */
    const marqueeContent = document.getElementById('marquee-content');
    // Clone content to ensure seamless loop
    if (marqueeContent) {
        const clone = marqueeContent.innerHTML;
        marqueeContent.innerHTML += clone;
    }

    /* --- Menu Hint Logic --- */
    const menuHint = document.getElementById('menu-hint');
    if (menuHint) {
        // Show after 3 seconds
        setTimeout(() => {
            menuHint.style.opacity = '1';
        }, 3000);

        // Hide on any interaction
        const hideHint = () => {
            menuHint.style.opacity = '0';
            // Remove listeners after hiding to save performance
            window.removeEventListener('click', hideHint);
            window.removeEventListener('scroll', hideHint);
            window.removeEventListener('mousemove', hideHint);
        };

        window.addEventListener('click', hideHint);
        window.addEventListener('scroll', hideHint);
        // Optional: hide on mouse move if strict "interaction" includes movement
        // window.addEventListener('mousemove', hideHint); 
    }

});
