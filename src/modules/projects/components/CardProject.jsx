import GithubIcon from "../../../assets/icons/GithubIcon.jsx";
import ProjectIcon from "../../../assets/icons/ProyectIcon.jsx";
import Modal from "../../../common/components/reactComponentes/Modal.jsx";

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
    <div className="max-w-sm dark:bg-[#28282830] dark:bg-opacity-50 transparent border border-gray-700 rounded-lg shadow dark:bg-gray-800">
      <div className="h-[185px]">
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={image}
          alt={altImage}
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h5 className="text-xl font-bold tracking-tight text-[#141a28] dark:text-[#fafafa]">
          {title}
        </h5>
        <p className="font-normal dark:text-gray-300 text-gray-800">
          {content}
        </p>

        <div className="flex flex-wrap">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 py-1 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <span className="mr-1">{tag.icon}</span>
              <span className="text-[12px]">{tag.text}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full gap-4" id="buttons">
          <a
            href={links[0].url}
            target="_blank"
            className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-600"
          >
            <GithubIcon />
            {links[0].label}
          </a>

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
            <a
              aria-label="Ver proyecto"
              href={links[1].url}
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 hover:bg-gray-600"
            >
              <ProjectIcon />
              {links[1].label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardProject;
