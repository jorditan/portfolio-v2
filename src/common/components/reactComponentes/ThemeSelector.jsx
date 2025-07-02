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
    "icon transition-all stroke-[#141a28] dark:stroke-[#fafafa] h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]";

  return (
    <>
      <div
        id="themeButton"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#fafafa] dark:text-gray-900 bg-[#0f172a] dark:bg-white border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Cambiar tema
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        onClick={handleToggle}
        data-tooltip-target="themeButton"
        className="rounded-full"
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
