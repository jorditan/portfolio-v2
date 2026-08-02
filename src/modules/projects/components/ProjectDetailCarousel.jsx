import React, { useState, useRef } from "react";

export default function ProjectDetailCarousel({ images = [], title = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!images || images.length === 0) return null;

  const total = images.length;

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative flex w-full flex-col gap-3">
      {/* Frame de la Imagen Principal */}
      <div
        className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-gray-100 shadow-md shadow-slate-300/40 backdrop-blur-sm transition-all duration-300 dark:border-white/10 dark:bg-gray-800 dark:shadow-black/30"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => {
          const src = typeof img === "string" ? img : img.src;
          const alt =
            typeof img === "string"
              ? `${title} - imagen ${index + 1}`
              : img.alt || title;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`absolute md:p-4 inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${isActive
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
                }`}
            >
              <img
                src={src}
                alt={alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full rounded-md shadow-md w-full object-cover object-top"
              />
            </div>
          );
        })}
      </div>

      {/* Bar de Controles Inferiores (idéntica a ReviewsCarousel) */}
      {total > 1 && (
        <div className="flex items-center justify-between gap-4 px-1">
          {/* Indicadores de Diapositiva (Pills) */}
          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <div
                key={`indicator-${index}`}
                aria-label={`Ir a imagen ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "w-8 bg-sky-500 dark:bg-sky-300"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                  }`}
              />
            ))}
          </div>

          {/* Botones de Navegación Previo / Siguiente */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Ver imagen anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-gray-100 text-slate-700 transition hover:bg-slate-200 hover:text-sky-600 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Ver siguiente imagen"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-gray-100 text-slate-700 transition hover:bg-slate-200 hover:text-sky-600 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
