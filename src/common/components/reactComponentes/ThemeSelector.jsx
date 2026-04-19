import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { getCurrentTheme, toggleTheme } from "@/theme/theme";

function ThemeSelector() {
  const [theme, setTheme] = useState(null);
  const uid = useId().replace(/:/g, "");
  const tooltipId = `tooltip-theme-${uid}`;

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  useEffect(() => {
    if (theme && typeof window !== "undefined" && window.initTooltips) {
      window.initTooltips();
    }
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
    setTheme((prev) => (prev !== "dark" ? "dark" : "light"));
  };

  const classIcon =
    "icon transition-all stroke-slate-900 dark:stroke-slate-50 h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";

  return (
    <>
      <div
        id={tooltipId}
        data-tooltip-placement="top"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-slate-50 dark:text-gray-900 bg-slate-900 dark:bg-gray-100 border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Cambiar a modo {theme === "dark" ? "claro" : "oscuro"}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        data-tooltip-target={tooltipId}
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
    </>
  );
}

export default ThemeSelector;
