import { Palette } from "lucide-react";
import FeaturedCard from "../components/FeaturedCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectCarousel from "../components/ProjectCarousel.jsx";
import { getDesignProjects, getFrontendProjects } from "../../../lib/projects.js";

const designProjects = getDesignProjects();
const frontendProjects = getFrontendProjects();

const designFeatured = designProjects.find((p) => p.featured);
const designSecondary = designProjects.filter((p) => !p.featured);

const frontendFeatured = frontendProjects.find((p) => p.featured);
const frontendSecondary = frontendProjects.filter((p) => !p.featured);

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-medium text-sky-500 dark:text-sky-300 shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
    </div>
  );
}

function MyProjects() {
  return (
    <section
      className="sm:mx-auto py-8 mx-4 max-w-[32rem] md:max-w-[42rem] lg:max-w-4xl transition-all"
      id="proyectos"
      aria-label="Mis proyectos"
    >
      {/* Encabezado */}
      <div
        className="flex gap-2 justify-start items-center mb-6"
        data-reveal-item
        style={{
          "--motion-delay": "0ms",
          "--motion-duration": "var(--motion-duration-fast)",
          "--motion-distance": "12px",
        }}
      >
        <Palette className="text-sky-500 dark:text-sky-300 w-8 h-8" />
        <h2 className="title md:text-2xl text-xl font-semibold w-fit text-slate-900 dark:text-slate-50">
          Proyectos
        </h2>
      </div>

      {/* ── Diseño UX/UI ────────────────────────────────────── */}
      <div
        className="mb-10"
        data-reveal-item
        style={{
          "--motion-delay": "60ms",
          "--motion-duration": "var(--motion-duration-fast)",
          "--motion-distance": "12px",
        }}
      >
        <SectionLabel>Diseño UX/UI</SectionLabel>

        {/* Featured a ancho completo */}
        {designFeatured && (
          <FeaturedCard project={designFeatured} motionDelay={120} />
        )}

        {/* Secundarios — carrusel en mobile, grid en desktop */}
        {designSecondary.length > 0 && (
          <>
            <ProjectCarousel projects={designSecondary} compact={false} baseMotionDelay={200} />
            <div className="hidden sm:grid sm:grid-cols-3 gap-4 mt-4">
              {designSecondary.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  compact={false}
                  motionDelay={200 + idx * 80}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Desarrollo Front-End ─────────────────────────────── */}
      <div
        data-reveal-item
        style={{
          "--motion-delay": "100ms",
          "--motion-duration": "var(--motion-duration-fast)",
          "--motion-distance": "12px",
        }}
      >
        <SectionLabel>Desarrollo Front-End</SectionLabel>

        {/* La 12 Digital — proyecto featured a ancho completo */}
        {frontendFeatured && (
          <div className="mb-4">
            <FeaturedCard project={frontendFeatured} motionDelay={160} />
          </div>
        )}

        {/* Secundarios — carrusel en mobile, grid en desktop */}
        {frontendSecondary.length > 0 && (
          <>
            <ProjectCarousel projects={frontendSecondary} compact baseMotionDelay={220} />
            <div className="hidden sm:grid sm:grid-cols-3 gap-4">
              {frontendSecondary.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  compact
                  motionDelay={220 + idx * 70}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MyProjects;
