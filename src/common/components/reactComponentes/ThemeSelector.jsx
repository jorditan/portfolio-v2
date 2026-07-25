import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentTheme, toggleTheme } from "@/theme/theme";

function ThemeSelector() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setTheme((prev) => (prev !== "dark" ? "dark" : "light"));
  };

  const classIcon =
    "icon transition-all stroke-slate-900 dark:stroke-slate-50 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";

  return (
    <div className="group relative flex items-center justify-center">
      <button
        onClick={handleToggle}
        aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        {theme === "dark" ? (
          <SunIcon className={`transition-all hover:scale-110 ${classIcon}`} />
        ) : (
          <MoonIcon className={`transition-all hover:scale-110 ${classIcon}`} />
        )}
      </button>
      <span
        role="tooltip"
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 px-2.5 py-1 text-xs font-medium text-slate-50 dark:text-gray-900 bg-slate-900 dark:bg-gray-100 border dark:border-gray-200 rounded-md shadow-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
      >
        Cambiar a modo {theme === "dark" ? "claro" : "oscuro"}
      </span>
    </div>
  );
}

export default ThemeSelector;
