// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Hero Section Image Slider
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

    if (dotsContainer) {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

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

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}, 4000);

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.05
    });

    revealElements.forEach(el => observer.observe(el));
});

// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your quotation request has been sent successfully.');
        quoteForm.reset();
    });
}
