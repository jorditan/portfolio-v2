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
          transition-[transform,box-shadow,border-color] duration-300 cursor-pointer
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
          decoding="async"
          width="800"
          height="450"
          className="w-full aspect-video object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50
                         group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors leading-tight">
            {project.title}
          </h3>
          <button name="ver-mas" label="Ver más" className="text-gray-400 dark:text-gray-200
                             group-hover:text-sky-500 dark:bg-gray-900 px-1 py-1 rounded-md border border-gray-700 dark:group-hover:text-sky-300
                             transition-colors mt-1 flex items-center justify-center text-sm" aria-hidden="true">
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <p className="ui-text-body text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.shortDescription}
        </p>

      </div>
    </a>
  );
}

export default FeaturedCard;
