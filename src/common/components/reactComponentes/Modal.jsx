import { useState, useEffect } from "react";
import GifIcon from "@/assets/icons/GifIcon";

function Modal({ buttonText, title, text, video }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-700 dark:bg-gray-900 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-950"
        type="button"
      >
        <GifIcon />
        {buttonText}
      </button>

      {isOpen && (
        <div className="h-[100%] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center bg-[#282828c6] items-center w-full md:inset-0 max-h-full flex shadow-lg">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative rounded-lg shadow-sm bg-[#fafafa] border border-gray-700 dark:bg-gray-900">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-[#fafafa]  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center border border-gray-700  dark:bg-gray-800 hover:bg-gray-800 bg-gray-700 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed dark:text-gray-300 text-gray-800">
                  {text}
                </p>
                {video}
              </div>
              <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-800 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="border gap-2 text-[12px] sm:text-sm border-gray-700 dark:bg-gray-800  inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 bg-gray-700 hover:bg-gray-800"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
