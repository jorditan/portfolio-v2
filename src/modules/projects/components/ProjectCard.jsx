import { ArrowUpRight } from "lucide-react";
import TechBadge from "../../../common/components/reactComponentes/TechBadge.jsx";
import ReactIcon from "../../../assets/icons/react/ReactIcon.jsx";
import VueIcon from "../../../assets/icons/react/VueIcon.jsx";
import TailwindIcon from "../../../assets/icons/react/TailwindIcon.jsx";
import ZustandIcon from "../../../assets/icons/react/ZustandIcon.jsx";
import PiniaIcon from "../../../assets/icons/react/PiniaIcon.jsx";
import UnahurIcon from "../../../assets/icons/react/UnahurIcon.jsx";
import WollokIcon from "../../../assets/icons/react/WollokIcon.jsx";
import TypeScriptIcon from "../../../assets/icons/react/TypeScriptIcon.jsx";

const FigmaIcon = () => (
  <svg width="10" height="14" viewBox="0 0 54 80" fill="none">
    <g clipPath="url(#figma-project-clip)">
      <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
      <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
      <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
      <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
      <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
    </g>
    <defs>
      <clipPath id="figma-project-clip">
        <rect width="53.3333" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const iconMap = {
  figma: <FigmaIcon />,
  react: <ReactIcon />,
  vue: <VueIcon />,
  tailwind: <TailwindIcon />,
  zustand: <ZustandIcon />,
  pinia: <PiniaIcon />,
  unahur: <UnahurIcon />,
  wollok: <WollokIcon />,
  typescript: <TypeScriptIcon />,
};

/**
 * ProjectCard — tarjeta secundaria para proyectos de diseño y frontend.
 *
 * Props:
 *   project     — objeto del data layer
 *   compact     — variante más compacta para la grilla de frontend
 *   motionDelay — delay de la animación de reveal en ms
 */
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

        {!compact && (
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        )}

        {project.tags.length > 0 && (
          <div className="flex flex-wrap mt-auto pt-1 gap-2">
            {project.tags.map((tag) => (
              <TechBadge
                key={tag.text}
                icon={tag.iconType ? iconMap[tag.iconType] ?? null : null}
                text={tag.text}
              />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default ProjectCard;
