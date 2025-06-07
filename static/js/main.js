// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle the active class on both the button and nav
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = mobileMenuToggle.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking on a nav link (for single-page scrolling)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.header-content')) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}); 