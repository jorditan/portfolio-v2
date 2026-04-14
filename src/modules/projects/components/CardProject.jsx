import GithubIcon from "../../../assets/icons/GithubIcon.jsx";
import ProjectIcon from "../../../assets/icons/ProyectIcon.jsx";
import Modal from "../../../common/components/reactComponentes/Modal.jsx";
import TechBadge from "../../../common/components/reactComponentes/TechBadge.jsx";
import LinkButton from "../../../common/components/reactComponentes/LinkButton.jsx";

function CardProject({
  title,
  content,
  image,
  altImage,
  links,
  tags,
  showGif,
}) {
  return (
    <div className="p-3 border-solid bg-gray-200 shadow-sm bg-transparent backdrop-blur-md hover:rotate-2 transition-all rounded-lg border-2 isolate aspect-video dark:bg-white/10 ring-1 ring-black/ dark:border-gray-500 hover:dark:border-gray-300 border-gray-500 hover:border-gray-900 hover:backdrop-blur-lg">
      <div className="max-w-sm dark:border bg-gray-200 border-2 border-gray-700 rounded-md shadow-md dark:bg-gray-800">
        <div className="h-[185px]">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src={image}
            alt={altImage}
          />
        </div>
        <div className="p-5 flex flex-col gap-4">
          <h5 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h5>
          <p className="font-normal dark:text-gray-300 text-gray-800">
            {content}
          </p>

          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <TechBadge key={i} icon={tag.icon} text={tag.text} />
            ))}
          </div>

          <div className="flex justify-between w-full gap-4" id="buttons">
            <LinkButton href={links[0].url} className="w-full">
              <GithubIcon />
              {links[0].label}
            </LinkButton>

            {showGif ? (
              <Modal
                buttonText={"Ver GIF"}
                title={title}
                text={
                  <>
                    Este proyecto no puedo ser deployeado porque fue desarrollado
                    en{" "}
                    <a
                      href="https://www.wollok.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Wollok
                    </a>
                    , un lenguaje de programación y entorno de desarrollo
                    integrado para ser utilizado en el dictado de materias
                    iniciales de programación.
                    <br />
                    <br />
                    Por mi parte, fue utilizando en la materia{" "}
                    <strong>Programación Orientada a Objetos I</strong> de la{" "}
                    <strong>UNAHUR</strong>.
                  </>
                }
                video={
                  <img
                    src="/gif-wollolok.gif"
                    alt="GIF del juego Wollolok"
                    className="rounded-sm"
                  ></img>
                }
              />
            ) : (
              <LinkButton
                aria-label="Ver proyecto"
                href={links[1].url}
                className="w-full"
              >
                <ProjectIcon />
                {links[1].label}
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
