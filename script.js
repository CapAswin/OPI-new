// Opulent Prime - Main JavaScript File
// Initialize interactive components and event handlers

document.addEventListener('DOMContentLoaded', function() {
    // Add your interactive features here
    console.log('Opulent Prime initialized');
});

// Smooth scroll behavior for navigation links
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
