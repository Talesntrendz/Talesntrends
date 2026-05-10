# Back 2 Life: Revival Solutions - Website

## Overview

This is a professional website for **Back 2 Life: Revival Solutions**, a comprehensive cleaning service company offering:

- 🏠 House Cleaning
- 🚗 Car Cleaning & Detailing
- 🏢 Business & Commercial Cleaning
- 💨 Jet Wash Services

## Features

### ✨ Key Sections

1. **Navigation Bar** - Sticky navigation with company branding
2. **Hero Section** - Eye-catching introduction with call-to-action
3. **Services** - Overview of all cleaning services offered
4. **Before & After Gallery** - Showcase your work with before/after comparisons
   - Filterable by service type (Houses, Cars, Business, Outdoor)
   - Professional presentation of transformations
5. **Booking System** - Complete online booking form with:
   - Customer information collection
   - Service type selection
   - Date and time scheduling
   - Address verification
   - Additional details/notes
   - Booking confirmation modal
6. **Contact Information** - Phone, email, and location details
7. **Social Media Links** - Footer with social media integration

## Technology Stack

- **HTML5** - Structure and semantics
- **CSS3** - Responsive styling and animations
- **JavaScript** - Interactive features and form handling
- **LocalStorage** - Client-side booking data persistence

## File Structure

```
back-2-life-website/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript functionality
├── logo.png         # Company logo (to be added)
└── README.md        # This file
```

## Setup Instructions

### Quick Start

1. Clone or download this repository
2. Place your company logo as `logo.png` in the root directory
3. Update contact information in the HTML or use the `updateContactInfo()` function
4. Open `index.html` in your web browser

### Customization

#### Update Contact Information

Edit `script.js` and uncomment/modify this line:

```javascript
updateContactInfo('+1 (555) 123-4567', 'your-email@back2life.com', 'Your City, State')
```

#### Add Your Logo

1. Replace or add your `logo.png` file to the root directory
2. The logo displays in the navigation bar (50x50px)

#### Add Before & After Images

1. Replace placeholder images in the gallery section
2. Update image paths in `index.html`:

```html
<img src="your-image-path.jpg" alt="Before">
<img src="your-image-path.jpg" alt="After">
```

#### Update Company Details

Search and replace throughout the HTML:
- Phone number: `+1 (234) 567-8900`
- Email: `info@back2life.com`
- Location: `Your City, Your State`

## Features Explained

### Booking System

The booking form collects:
- Customer name, email, and phone
- Service type selection
- Preferred date and time
- Service address
- Additional details or special requests

Bookings are stored in browser's localStorage and can be exported for your records.

### Gallery Filtering

Click filter buttons to view:
- **All** - Display all before/after transformations
- **Houses** - Residential cleaning projects
- **Cars** - Vehicle detailing and cleaning
- **Business** - Commercial and shop cleaning
- **Outdoor** - Jet wash and exterior services

### Form Validation

- All required fields must be filled
- Email format is validated
- Date cannot be in the past
- Phone number field accepts various formats

## Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Backend Integration (Future)

To connect to a real backend:

1. Replace localStorage with an API call in `script.js`
2. Update the form submission handler:

```javascript
// Example using fetch API
fetch('/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    console.log('Booking confirmed:', data);
    showConfirmationModal();
})
.catch(error => console.error('Error:', error));
```

## Social Media Integration

Update social media links in the footer:

```html
<a href="https://facebook.com/back2life"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/back2life"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/back2life"><i class="fab fa-twitter"></i></a>
```

## Color Scheme

- **Primary Blue**: `#1e3c72`
- **Secondary Blue**: `#2a5298`
- **Accent Purple**: `#667eea` - `#764ba2`
- **Highlight Red**: `#ff6b6b`
- **Light Background**: `#f8f9fa`

## Tips for Success

1. **High-Quality Images**: Use clear before/after photos that show significant transformations
2. **Professional Descriptions**: Keep service descriptions concise but compelling
3. **Fast Loading**: Optimize images for web to ensure quick page loads
4. **Mobile First**: Test thoroughly on mobile devices
5. **SEO**: Add meta tags and descriptions for search engine optimization
6. **Analytics**: Integrate Google Analytics to track visitor behavior

## Support & Maintenance

- Regularly update before/after gallery with new projects
- Keep contact information current
- Test all forms periodically
- Monitor booking submissions
- Update services if offerings change

## License

This website template is provided for Back 2 Life: Revival Solutions.

## Contact

For questions or support regarding this website, contact your web developer.

---

**Last Updated**: May 10, 2026
**Version**: 1.0