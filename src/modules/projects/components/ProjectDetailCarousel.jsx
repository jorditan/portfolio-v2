import React from "react";
import ReactDOM from "react-dom";
import { useProjectDetailCarousel } from "../hooks/useProjectDetailCarousel";

export default function ProjectDetailCarousel({ images = [], title = "" }) {
  const total = images ? images.length : 0;
  const {
    activeIndex,
    goToNext,
    goToPrevious,
    goToIndex,
    handleTouchStart,
    handleTouchEnd,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    mounted,
  } = useProjectDetailCarousel(total);

  if (!images || total === 0) return null;

  const activeImg = images[activeIndex];
  const activeSrc = typeof activeImg === "string" ? activeImg : activeImg?.src;
  const activeAlt =
    typeof activeImg === "string"
      ? `${title} - imagen ${activeIndex + 1}`
      : activeImg?.alt || title;

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
              <button
                type="button"
                onClick={openLightbox}
                aria-label={`Ver ${alt} a pantalla completa`}
                className="h-full w-full block overflow-hidden rounded-md text-left cursor-zoom-in group border-0 bg-transparent p-0"
              >
                <img
                  src={src}
                  alt={alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover object-top rounded-md shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bar de Controles Inferiores */}
      {total > 1 && (
        <div className="flex items-center justify-between gap-4 px-1">
          {/* Indicadores de Diapositiva (Pills) */}
          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={`indicator-${index}`}
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`Ir a imagen ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "w-8 bg-sky-500 dark:bg-sky-300"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                  }`}
              />
            ))}
          </div>

          {/* Botones de Navegación Previo / Siguiente al extremo derecho */}
          <div className="flex items-center gap-2 ml-auto">
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

      {/* Modal / Lightbox Renderizado via React Portal a document.body */}
      {isLightboxOpen &&
        mounted &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-md backdrop-saturate-150 p-4 sm:p-8 transition-all duration-300 select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Header del Modal (Contador de Diapositiva) */}
            <div className="absolute top-4 left-4 z-[10000] text-sm font-medium text-slate-200 bg-slate-900/90 border border-white/15 px-3 py-1.5 rounded-lg shadow-md">
              {activeIndex + 1} / {total}
            </div>

            {/* Botón de Cierre */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[10000] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-slate-900/90 text-slate-200 shadow-lg transition hover:bg-slate-800 hover:text-white"
              aria-label="Cerrar vista a pantalla completa"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Botón Navegación Anterior */}
            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-slate-900/90 text-slate-200 shadow-xl transition hover:bg-slate-800 hover:text-white"
                aria-label="Imagen anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Imagen Ampliada SIN bordes redondeados (rounded-none) */}
            <img
              src={activeSrc}
              alt={activeAlt}
              className="max-h-[88vh] max-w-[88vw] object-contain rounded-none shadow-2xl transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Botón Navegación Siguiente */}
            {total > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-slate-900/90 text-slate-200 shadow-xl transition hover:bg-slate-800 hover:text-white"
                aria-label="Siguiente imagen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
