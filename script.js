// In js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Basic form validation for the contact page
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the form from submitting normally

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.className = 'error';
            } else {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.className = 'success';
                contactForm.reset();
            }
        });
    }

    // Example of another interactive element: A button click action
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Button clicked! This is a simple interactive element.');
        });
    }
});