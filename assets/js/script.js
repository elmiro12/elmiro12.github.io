// Theme Toggle Logic
const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const iconSpan = toggleBtn.querySelector('span');

const logoImg = document.querySelector('.app-logo');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateTheme(currentTheme);

toggleBtn.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
});

function updateTheme(theme) {
    // Update Icon
    if (theme === 'dark') {
        iconSpan.textContent = 'light_mode';
        logoImg.src = 'assets/img/logo-w.png';
    } else {
        iconSpan.textContent = 'dark_mode';
        logoImg.src = 'assets/img/logo-b.png';
    }
}

// Sticky App Bar Elevation on Scroll
const appBar = document.querySelector('.top-app-bar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        appBar.classList.add('scrolled');
    } else {
        appBar.classList.remove('scrolled');
    }
});

// Ripple Effect Implementation
document.addEventListener('click', function (e) {
    // Check if the clicked element (or parent) has the 'ripple' class
    const target = e.target.closest('.ripple');

    if (target) {
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;

        const rect = target.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        // Remove existing ripple to avoid clutter if clicked rapidly? 
        // Better to just append and let it fade.
        const existingRipple = target.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove(); // Simple cleanup
        }

        target.appendChild(circle);
    }
});
