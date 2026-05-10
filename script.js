// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeBtn = document.querySelector('.close');
const modalBtn = document.querySelector('.modal-btn');

// Handle form submission
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        address: document.getElementById('address').value,
        message: document.getElementById('message').value
    };

    // Log to console (in production, send to backend)
    console.log('Booking Request:', formData);
    
    // Save to localStorage for demonstration
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({
        ...formData,
        submittedAt: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Show confirmation modal
    showConfirmationModal();
    
    // Reset form
    bookingForm.reset();
});

// Modal Controls
function showConfirmationModal() {
    confirmationModal.style.display = 'block';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
}

closeBtn.addEventListener('click', closeConfirmationModal);
modalBtn.addEventListener('click', closeConfirmationModal);

// Close modal when clicking outside of it
window.addEventListener('click', function(e) {
    if (e.target === confirmationModal) {
        closeConfirmationModal();
    }
});

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Smooth scroll for navigation links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
        }
    });
});

// Mobile menu toggle (optional for future mobile navigation)
function initMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth <= 768) {
        // Add mobile menu functionality here
    }
}

window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);

// Contact info - Update with your details
function updateContactInfo(phone, email, location) {
    const phoneLink = document.querySelector('.contact-item:nth-child(1) p a');
    const emailLink = document.querySelector('.contact-item:nth-child(2) p a');
    const locationText = document.querySelector('.contact-item:nth-child(3) p');

    if (phoneLink) phoneLink.textContent = phone;
    if (emailLink) emailLink.textContent = email;
    if (locationText) locationText.textContent = location;
}

// You can call this function with your actual details:
// updateContactInfo('+1 (555) 123-4567', 'info@back2life.com', 'Your City, State')

console.log('Back 2 Life website initialized successfully!');