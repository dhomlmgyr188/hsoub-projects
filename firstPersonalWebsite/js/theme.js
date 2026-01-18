const modeToggle = document.getElementById('modeToggle');

function toggleMode() {
  const body = document.body;

  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    modeToggle.textContent = '☀️';
    localStorage.setItem('mode', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.textContent = '🌙';
    localStorage.setItem('mode', 'light');
  }
}

modeToggle.addEventListener('click', toggleMode);

const themes = [
  'theme-blue',
  'theme-green',
  'theme-red',
  'theme-yellow'
];

function setTheme(theme) {
  const body = document.body;

  themes.forEach(t => body.classList.remove(t));
  body.classList.add(theme);

  localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const savedMode = localStorage.getItem('mode');

  if (savedTheme) {
    setTheme(savedTheme);
  }

  if (savedMode === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    modeToggle.textContent = '☀️';
  }
});
