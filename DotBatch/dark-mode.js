// Get the dark mode toggle button and the theme stylesheet
const darkModeToggle = document.getElementById('dark-mode-toggle');
const themeStyle = document.getElementById('theme-style');

// Check if a theme preference is stored in local storage
const isDarkMode = localStorage.getItem('dark-mode') === 'true';

// Apply the appropriate theme based on the user's preference
function setTheme() {
    if (isDarkMode) {
        themeStyle.href = 'style-dark.css';
    } else {
        themeStyle.href = 'style-light.css';
    }
}

// Toggle dark mode and update the theme
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('dark-mode', isDarkMode);
    setTheme();
}

// Initial theme setup
setTheme();

// Attach a click event to the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);
