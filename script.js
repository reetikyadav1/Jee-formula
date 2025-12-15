// script.js - Handles interactivity for the homepage

// Hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class for smooth animation
});

// Smooth scrolling for navbar links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking
        navMenu.classList.remove('active');
    });
});

// Button navigation
const startPracticeBtn = document.getElementById('start-practice');
const freeMockTestBtn = document.getElementById('free-mock-test');
const startPracticingNowBtn = document.getElementById('start-practicing-now');

startPracticeBtn.addEventListener('click', () => {
    window.location.href = 'practice.html'; // Navigate to practice.html
});

freeMockTestBtn.addEventListener('click', () => {
    window.location.href = 'mocktest.html'; // Navigate to mocktest.html
});

startPracticingNowBtn.addEventListener('click', () => {
    window.location.href = 'practice.html'; // Navigate to practice.html
});

// Practice categories navigation
const mechanicsCard = document.getElementById('mechanics');
const electrodynamicsCard = document.getElementById('electrodynamics');
const modernPhysicsCard = document.getElementById('modern-physics');
const thermodynamicsCard = document.getElementById('thermodynamics');

mechanicsCard.addEventListener('click', () => {
    window.location.href = 'mechanics.html'; // Navigate to mechanics.html
});

electrodynamicsCard.addEventListener('click', () => {
    window.location.href = 'electrodynamics.html'; // Navigate to electrodynamics.html
});

modernPhysicsCard.addEventListener('click', () => {
    window.location.href = 'modern.html'; // Navigate to modern.html
});

thermodynamicsCard.addEventListener('click', () => {
    window.location.href = 'thermodynamics.html'; // Navigate to thermodynamics.html
});