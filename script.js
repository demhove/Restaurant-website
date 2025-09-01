 
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Reservation form handler
        function handleReservation(event) {
            event.preventDefault();
            alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
        }

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(44, 62, 80, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #2c3e50, #34495e)';
            }
        });

        // Animate menu items on scroll
        function animateOnScroll() {
            const menuItems = document.querySelectorAll('.menu-item');
            const triggerBottom = window.innerHeight / 5 * 4;

            menuItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < triggerBottom) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }
            });
        }

        window.addEventListener('scroll', animateOnScroll);
    
