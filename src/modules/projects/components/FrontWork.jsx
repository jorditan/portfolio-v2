import CardProject from "./CardProject.jsx";
import ReactIcon from "../../../assets/icons/ReactIcon.jsx";
import TailwindIcon from "../../../assets/icons/TailwindIcon.jsx";
import ZustandIcon from "../../../assets/icons/ZustandIcon.jsx";
import VueIcon from "../../../assets/icons/VueIcon.jsx";
import PiniaIcon from "../../../assets/icons/PiniaIcon.jsx";
import UnahurIcon from "../../../assets/icons/UnahurIcon.jsx";
import WollokIcon from "../../../assets/icons/WollokIcon.jsx";

function FrontWork() {
  return (
    <article className="flex flex-wrap justify-center w-full gap-10">
      <CardProject
        title="Gifs search app"
        content="Desarrollé una aplicación web en React para buscar y visualizar GIFs, integrando API, aplicando testing y gestionando el estado global con un store."
        image="/gifs-search-app.webp"
        altImage="Gifs Search app"
        links={[
          {
            label: "Ver repositorio",
            url: "https://github.com/jorditan/gifs-app-react",
          },
          { label: "Deployear", url: "https://gifs-search-app-react-five.vercel.app/" },
        ]}
        tags={[{ text: "React", icon: <ReactIcon /> }, { text: "Zustand", icon: <ZustandIcon /> }]}
        showGif={false}
      ></CardProject>

      <CardProject
        title="Wollolok"
        content="Proyecto integrador de la materia Programacion Orientada a Objetos I de la UNAHUR. Aplicación de polimorfismo, herencia y testing automático"
        image="/wollolok.webp"
        altImage="Wollolok"
        links={[
          {
            label: "Ver repositorio",
            url: "https://github.com/obj1-unahur-2024s2/TPGameIntegrador-thecoders",
          },
          { label: "Deployear", url: "https://retro-pomodoro.netlify.app/" },
        ]}
        tags={[
          { text: "UNAHUR", icon: <UnahurIcon /> },
          { text: "Wollok", icon: <WollokIcon /> },
        ]}
        showGif={true}
      ></CardProject>

      <CardProject
        title="Translate App"
        content="Aplicación de traducción de idiomas que utiliza Zustand para el control de estados y la API de Google Translate, ofreciendo traducciones rápidas y precisas"
        image="/translate.webp"
        altImage="Projecto de traducción"
        links={[
          {
            label: "Ver repositorio",
            url: "https://github.com/jorditan/translate-app",
          },
          {
            label: "Deployear",
            url: "https://translate-app-sable.vercel.app/",
          },
        ]}
        tags={[
          { text: "React", icon: <ReactIcon /> },
          { text: "Tailwind", icon: <TailwindIcon /> },
          { text: "Zustand", icon: <ZustandIcon /> },
        ]}
        showGif={false}
      ></CardProject>

      <CardProject
        title="PokeGame | Pokefinder"
        content="Mejora de un juego existente aplicando principios de UX/UI para optimizar la experiencia del usuario y aumentar la jugabilidad."
        image="/pokegame.webp"
        altImage="Pokegame | Pokefinder"
        links={[
          {
            label: "Ver repositorio",
            url: "https://github.com/jorditan/PokemonGame",
          },
          { label: "Deployear", url: "https://pokemonfinder-vue.netlify.app/" },
        ]}
        tags={[
          { text: "Vue", icon: <VueIcon /> },
          { text: "Pinia", icon: <PiniaIcon /> },
          { text: "Tailwind", icon: <TailwindIcon /> },
        ]}
        showGif={false}
      ></CardProject>
    </article>
  );
}

export default FrontWork;
