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
    <g clipPath="url(#figma-featured-clip)">
      <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
      <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
      <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
      <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
      <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
    </g>
    <defs>
      <clipPath id="figma-featured-clip">
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

function FeaturedCard({ project, motionDelay = 140 }) {
  return (
    <a
      href={`/proyectos/${project.slug}`}
      className="group h-full flex flex-col border-2 border-gray-300 dark:border-gray-600
                 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800
                 hover:border-gray-400 dark:hover:border-gray-300
                 hover:rotate-1
                 transition-all duration-300 cursor-pointer"
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
          alt={project.title}
          className="w-full aspect-video object-cover object-top
                     group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-sky-500 dark:text-sky-300">
            {project.role}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{project.year}</span>
        </div>

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

        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
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
        )}
      </div>
    </a>
  );
}

export default FeaturedCard;
