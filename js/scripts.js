// Example JavaScript for enhanced functionality

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded and ready.');

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('nav a[href^="#"]');
    internalLinks.forEach(link => {
	link.addEventListener('click', function(e) {
	    e.preventDefault();
	    const targetId = this.getAttribute('href').substring(1);
	    const targetElement = document.getElementById(targetId);
	    if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	    }
	});
    });

    // Form validation for contact form
    const contactForm = document.querySelector('form[action^="mailto:"]');
    if (contactForm) {
	contactForm.addEventListener('submit', function(event) {
	    const name = document.getElementById('name').value;
	    const email = document.getElementById('email').value;
	    const message = document.getElementById('message').value;

	    if (!name || !email || !message) {
		alert('Please fill in all fields.');
		event.preventDefault();
	    } else {
		// Simple email format validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
		    alert('Please enter a valid email address.');
		    event.preventDefault();
		} else {
		    console.log('Form submitted:', { name, email, message });
		}
	    }
	});
    }

    // Image gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
	img.addEventListener('click', function() {
	    const src = this.src;
	    const lightbox = document.createElement('div');
	    lightbox.classList.add('lightbox');
	    lightbox.innerHTML = `
		<div class="lightbox-content">
		    <img src="${src}" alt="Lightbox Image">
		    <button class="close-lightbox">Close</button>
		</div>
	    `;
	    document.body.appendChild(lightbox);

	    const closeButton = document.querySelector('.close-lightbox');
	    closeButton.addEventListener('click', function() {
		document.body.removeChild(lightbox);
	    });

	    // Close lightbox when clicking outside the image
	    lightbox.addEventListener('click', function(e) {
		if (e.target === lightbox) {
		    document.body.removeChild(lightbox);
		}
	    });
	});
    });

    // Toggle mobile menu visibility
    const menuToggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    if (menuToggleButton && navMenu) {
	menuToggleButton.addEventListener('click', function() {
	    navMenu.classList.toggle('active');
	});
    }
});

function openModal(src) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImage.src = src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
