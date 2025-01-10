import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import {getCurrentTheme, toggleTheme} from '../theme/theme'
import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, [])

  const handleToggle = () => {
    toggleTheme()
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  };

  const classIcon = "icon transition-all stroke-[#141a28] dark:stroke-[#fafafa] h-[16px] w-[16px] sm:h-[24px] sm:w-[24px]"

  return (
    <>
      <div
        id="tooltip-light"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#fafafa] dark:text-gray-900 bg-[#0f172a]  dark:bg-white border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Cambiar tema
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div
        id="tooltip-cv"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#fafafa] dark:text-gray-900 bg-[#0f172a]  dark:bg-white border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
      >
        Descargar CV
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <button
        onClick={handleToggle}
        name="ThemeButton"
        data-tooltip-target="tooltip-light"
        className="rounded-full"
        id="themeButton"
      >
        {
          theme === 'dark' ?  <SunIcon className={classIcon}/> : <MoonIcon className={classIcon} />
        }
      </button>
    </>
  );
}

export default ThemeSelector;