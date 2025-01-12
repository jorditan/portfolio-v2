export function getCurrentTheme():string | null {
  const store:string | null = localStorage.getItem("theme")
  if (store != null) {
    return localStorage.getItem('theme')
  } else {
    return 'dark';
  }
}

export function toggleTheme():void {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  if (isDark) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

