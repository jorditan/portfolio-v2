import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getCurrentTheme, toggleTheme } from "@/theme/theme";

function ThemeSelector() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const handleToggle = () => {
    toggleTheme();
    if (theme != "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const classIcon =
    "icon transition-all stroke-slate-900 dark:stroke-slate-50 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";

  return (
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
  );
}

export default ThemeSelector;
