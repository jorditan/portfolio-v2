
export function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  console.log(root)
  if (isDark) {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

export function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  } else {
    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
  }
}
