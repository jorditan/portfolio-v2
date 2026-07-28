import React from "react";

function ArrowUpRight({ className = "" }) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ProjectCard({ project, compact = false, motionDelay = 220 }) {
  return (
    <a
      href={project.link}
      aria-label={`Ver proyecto: ${project.title}`}
      className="group flex flex-col w-full border-2 border-gray-200 dark:border-gray-600
                 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-900
                 shadow-md shadow-slate-300/60 dark:shadow-black/30
                 hover:border-sky-300 dark:hover:border-gray-300
                 hover:rotate-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-300/70 dark:hover:shadow-black/40
                  transition-[transform,box-shadow,border-color] duration-300 cursor-pointer h-full
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      data-reveal-item
      style={{
        "--motion-delay": `${motionDelay}ms`,
        "--motion-duration": "var(--motion-duration-base)",
        "--motion-distance": "18px",
      }}
    >
      <div className="overflow-hidden">
        <img
          src={project.heroImage}
          alt={`${project.title} - ${project.shortDescription}`}
          loading="lazy"
          decoding="async"
          width="600"
          height={compact ? 338 : 450}
          className={`w-full object-cover object-top
                      group-hover:scale-[1.03] transition-transform duration-500
                      ${compact ? "aspect-video" : "aspect-[4/3]"}`}
        />
      </div>

      <div className={`flex flex-col gap-2 flex-1 ${compact ? "p-3" : "p-4"}`}>
        <div className="flex items-center justify-between gap-1">
          <h3
            className="font-semibold text-slate-900 dark:text-slate-50
                        group-hover:text-sky-600 dark:group-hover:text-sky-300
                        transition-colors leading-tight text-base"
          >
            {project.title}
          </h3>
          <span
            className="text-gray-400 dark:text-gray-200
                             group-hover:text-sky-500 dark:bg-gray-900 px-1 py-1 rounded-md border border-gray-700 dark:group-hover:text-sky-300
                             transition-colors mt-1 flex items-center justify-center text-sm"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>

        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>
      </div>
    </a>
  );
}

export default ProjectCard;
