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

      {/* Controles: dots izq · flechas der */}
      <div className="flex items-center justify-between gap-4 mt-3">
        {/* Indicadores */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al proyecto ${idx + 1}`}
              aria-current={idx === current}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-sky-500 dark:bg-sky-300"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Flechas */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Proyecto anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Proyecto siguiente"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
