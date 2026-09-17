// Theme management
const THEME_KEY = 'appTheme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

function initializeTheme() {
    // Get saved theme from localStorage or default to light
    const savedTheme = localStorage.getItem(THEME_KEY) || LIGHT_THEME;
    
    // Apply the theme
    applyTheme(savedTheme);
    
    // Update toggle button state if it exists
    updateThemeToggleButton(savedTheme);
}

function applyTheme(theme) {
    const htmlElement = document.documentElement;
    
    if (theme === DARK_THEME) {
        htmlElement.setAttribute('data-theme', DARK_THEME);
    } else {
        htmlElement.setAttribute('data-theme', LIGHT_THEME);
    }
    
    // Save preference
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem(THEME_KEY) || LIGHT_THEME;
    const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    
    applyTheme(newTheme);
    updateThemeToggleButton(newTheme);
}

function updateThemeToggleButton(theme) {
    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('span');
        if (icon) {
            icon.textContent = theme === DARK_THEME ? '☀️' : '🌙';
        }
    }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
    initializeTheme();
}
