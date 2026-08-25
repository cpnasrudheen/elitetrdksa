// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Hero Section Image Slider data
const slides = [
    { src: 'assets/dry-food.jpg', label: 'DRY FOOD SUPPLY', title: 'Quality supply for business.' },
    { src: 'assets/packing.jpg', label: 'PACKING & PLASTIC', title: 'Practical packaging essentials.' },
    { src: 'assets/safety.jpg', label: 'SAFETY ITEMS', title: 'Professional workplace protection.' },
    { src: 'assets/technology.jpg', label: 'TECHNOLOGY & CONNECTIVITY', title: 'Modern business connectivity.' },
    { src: 'assets/frozen.jpg', label: 'FROZEN ITEMS', title: 'Quality frozen food products.' }
];

let currentSlide = 0;
const heroImage = document.getElementById('heroImage');
const heroLabel = document.getElementById('heroLabel');
const dotsContainer = document.getElementById('dots');

// Create slider dots dynamically
if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateSlide() {
    if (!heroImage) return;
    heroImage.style.opacity = 0;
    setTimeout(() => {
        heroImage.src = slides[currentSlide].src;
        if(heroLabel) heroLabel.textContent = slides[currentSlide].label;
        heroImage.style.opacity = 1;
    }, 250);

    // Update dots
    if (dotsContainer) {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

// Next / Prev buttons
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });
}

// Auto Slide every 4 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}, 4000);

// Scroll Reveal Animation with Safety Fallback
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-item');
    revealElements.forEach(el => observer.observe(el));

    // Safety fallback: makes everything visible automatically if observer takes time
    setTimeout(() => {
        revealElements.forEach(el => {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
        });
    }, 1200);
});

// Quote Form Submission Handling
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your quotation request has been sent successfully.');
        quoteForm.reset();
    });
}
