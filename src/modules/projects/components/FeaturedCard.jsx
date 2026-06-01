import { ArrowUpRight } from "lucide-react";

function FeaturedCard({ project, motionDelay = 140 }) {
  return (
    <a
      href={project.link}
      aria-label={`Ver proyecto: ${project.title}`}
      className="group h-full flex flex-col border-2 border-gray-200 dark:border-gray-600
          rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800
          shadow-lg shadow-slate-300/70 dark:shadow-black/40
          hover:border-sky-300 dark:hover:border-gray-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-300/80 dark:hover:shadow-black/50
          transition-all duration-300 cursor-pointer
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
          className="w-full aspect-video object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50
                         group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight
            className="w-5 h-5 shrink-0 text-gray-400 dark:text-gray-500
                       group-hover:text-sky-500 dark:group-hover:text-sky-300
                       transition-colors mt-1"
          />
        </div>

        {/* <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.shortDescription}
        </p>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap mt-auto pt-2 gap-2">
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

export default FeaturedCard;
