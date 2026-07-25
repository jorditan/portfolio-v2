import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";

function ChevronLeft({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ProjectCarousel({ projects, compact = false, baseMotionDelay = 200 }) {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const prev = () => setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full mt-4 sm:hidden">
      <div className="relative overflow-hidden rounded-xl">
        {projects.map((project, idx) => (
          <div
            key={project.slug}
            className={`${reducedMotion.current ? "" : "duration-700 ease-in-out"} ${idx === current ? "block" : "hidden"}`}
          >
            <ProjectCard
              project={project}
              compact={compact}
              motionDelay={baseMotionDelay + idx * 80}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4 mt-3">
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              aria-hidden="true"
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-sky-500 dark:bg-sky-300"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Proyecto anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-gray-100 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Proyecto siguiente"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-gray-100 text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
