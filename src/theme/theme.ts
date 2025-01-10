export function getCurrentTheme():string | null {
  const root = document.documentElement;
  const store:string | null = localStorage.getItem("theme")
  console.log(store)
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
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

