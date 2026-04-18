import { useState, useRef } from "react";

/**
 * MyCarousel — carrusel de fotos con controles Flowbite.
 * Navegación manejada con React state (no Flowbite JS) para funcionar
 * correctamente con fotos dinámicas pasadas por props.
 *
 * @param {{ photos: { src: string; alt: string }[]; id: string }} props
 */
function MyCarousel({ photos = /** @type {{ src: string; alt: string }[]} */ ([]), id = "my-carousel" }) {
  const [current, setCurrent] = useState(0);
  const total = photos.length;
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="dark:shadow-gray-800 transition-transform duration-300 hover:rotate-2 ring-2 ring-gray-800 dark:ring-gray-50 p-2 rounded-lg">
      <div id={id} className="relative w-full">
        <div className="relative overflow-hidden  w-64 h-64 rounded-md">
          {photos.map((photo, idx) => (
            <div
              key={photo.src}
              className={`${reducedMotion.current ? "" : "duration-700 ease-in-out"} h-full ${idx === current ? "block" : "hidden"}`}
            >
              <img
                className="rounded-md object-cover object-top w-full h-full"
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100/30 dark:bg-gray-900/40 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-3 h-3 text-white dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path suppressHydrationWarning stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Anterior</span>
          </span>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Foto siguiente"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100/30 dark:bg-gray-900/40 group-hover:bg-gray-100/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-3 h-3 text-white dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path suppressHydrationWarning stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Siguiente</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default MyCarousel;
