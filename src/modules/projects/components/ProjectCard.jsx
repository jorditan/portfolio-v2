import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, compact = false, motionDelay = 220 }) {
  return (
    <a
      href={project.link}
      aria-label={`Ver proyecto: ${project.title}`}
      className="group flex flex-col border-2 border-gray-200 dark:border-gray-600
                 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800
                 shadow-md shadow-slate-300/60 dark:shadow-black/30
                 hover:border-sky-300 dark:hover:border-gray-300
                 hover:rotate-1 hover:scale-[1.02] hover:shadow-lg hover:shadow-slate-300/70 dark:hover:shadow-black/40
                 transition-all duration-300 cursor-pointer h-full
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      target="_blank"
      data-reveal-item
      style={{
        "--motion-delay": `${motionDelay}ms`,
        "--motion-duration": "var(--motion-duration-base)",
        "--motion-distance": "18px",
        "--motion-blur": "4px",
      }}
    >
      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={project.heroImage}
          alt={`${project.title} - ${project.shortDescription}`}
          loading="lazy"
          className={`w-full object-cover object-top
                      group-hover:scale-[1.03] transition-transform duration-500
                      ${compact ? "aspect-video" : "aspect-[4/3]"}`}
        />
      </div>

      {/* Contenido */}
      <div className={`flex flex-col gap-2 flex-1 ${compact ? "p-3" : "p-4"}`}>
        <div className="flex items-start justify-between gap-1">
          <h3
            className={`font-semibold text-slate-900 dark:text-slate-50
                        group-hover:text-sky-600 dark:group-hover:text-sky-300
                        transition-colors leading-tight
                        ${compact ? "text-sm" : "text-base"}`}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            className={`shrink-0 text-gray-400 dark:text-gray-500
                        group-hover:text-sky-500 dark:group-hover:text-sky-300
                        transition-colors mt-0.5
                        ${compact ? "w-3.5 h-3.5" : "w-4 h-4"}`}
          />
        </div>

        {/* {!compact && (
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        )} */}

        {/* {project.tags.length > 0 && (
          <div className="flex flex-wrap mt-auto pt-1 gap-2">
            {project.tags.map((tag) => (
              <TechBadge
                key={tag.text}
                icon={tag.iconType ? iconMap[tag.iconType] ?? null : null}
                text={tag.text}
              />
            ))}
          </div>
        )} */}
      </div>
    </a>
  );
}

export default ProjectCard;
