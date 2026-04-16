import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";

/**
 * ProjectCarousel — carrusel mobile-only para tarjetas secundarias.
 * Usa la estructura visual de Flowbite Carousel + React state para la navegación.
 * Se oculta en sm+ (el grid de desktop lo reemplaza desde MyProjects).
 *
 * Props:
 *   projects        — array de proyectos secundarios
 *   compact         — variante compacta de ProjectCard (para proyectos frontend)
 *   baseMotionDelay — delay base en ms para las animaciones de reveal
 */
function ProjectCarousel({ projects, compact = false, baseMotionDelay = 200 }) {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full mt-4 sm:hidden">
      {/* Slides — estructura Flowbite: relative overflow-hidden rounded-lg */}
      <div className="relative overflow-hidden rounded-xl">
        {projects.map((project, idx) => (
          <div
            key={project.slug}
            className={`duration-700 ease-in-out ${idx === current ? "block" : "hidden"}`}
          >
            <ProjectCard
              project={project}
              compact={compact}
              motionDelay={baseMotionDelay + idx * 80}
            />
          </div>
        ))}
      </div>

      {/* Controles: flecha izq · dots · flecha der */}
      <div className="flex items-center justify-center gap-4 mt-3">
        {/* Botón anterior — estilo Flowbite */}
        <button
          onClick={prev}
          aria-label="Proyecto anterior"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full
                     bg-gray-200 dark:bg-gray-700
                     hover:bg-gray-300 dark:hover:bg-gray-600
                     focus:outline-none focus:ring-2 focus:ring-sky-500
                     transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Indicadores — estilo Flowbite */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al proyecto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none
                ${idx === current
                  ? "w-4 bg-sky-500 dark:bg-sky-300"
                  : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
            />
          ))}
        </div>

        {/* Botón siguiente — estilo Flowbite */}
        <button
          onClick={next}
          aria-label="Proyecto siguiente"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full
                     bg-gray-200 dark:bg-gray-700
                     hover:bg-gray-300 dark:hover:bg-gray-600
                     focus:outline-none focus:ring-2 focus:ring-sky-500
                     transition-colors duration-200"
        >
          <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
