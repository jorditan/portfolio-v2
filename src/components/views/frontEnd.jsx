import CardProject from "../ui/reactComponentes/cardProject.jsx";
import Modal from "../ui/astroComponentes/Modal.astro";
import ReactIcon from "@/assets/icons/ReactIcon.jsx";
import TailwindIcon from "@/assets/icons/TailwindIcon.jsx";
import ZustandIcon from "@/assets/icons/ZustandIcon.jsx";
import VueIcon from "@/assets/icons/VueIcon.jsx";
import PiniaIcon from "@/assets/icons/PiniaIcon.jsx";
import UnahurIcon from "@/assets/icons/UnahurIcon.jsx";
import WollokIcon from "@/assets/icons/WollokIcon.jsx";
import TypeScriptIcon from "@/assets/icons/TypeScriptIcon.jsx";

function MyFront() {
  return (
    <article className="flex flex-wrap justify-center w-full gap-10">
      <CardProject
        title="Translate App"
        content=" Proyecto personal de una aplicación de traducción de idiomas. Se
        utiliza Zustand para el control de estados y la API de Google
        Translate."
        image="/translate.webp"
        altImage="Projecto de traducción"
        links={[
          { label: "Ver en GitHub", url: "https://github.com/jorditan/translate-app" },
          { label: "Deployear", url: "https://translate-app-sable.vercel.app/" },
        ]}
        tags={[
          {text: "React", icon: <ReactIcon/>},
          {text: "Tailwind", icon: <TailwindIcon/>},
          {text: "Zustand", icon: <ZustandIcon/>},
        ]}
        showGif={false}
      >
      </CardProject>

      <CardProject
        title="PokeGame | Pokefinder"
        content="Proyecto realizado gracias al curso de Fernando Herrera. Se toman las bases iniciales y se aplican mejoras en la UI, UX y jugabilidad."
        image="/pokegame.webp"
        altImage="Pokegame | Pokefinder"
        links={[
          { label: "Ver en GitHub", url: "https://github.com/jorditan/PokemonGame" },
          { label: "Deployear", url: "https://pokemonfinder-vue.netlify.app/" },
        ]}
        tags={[
          {text: "Vue", icon: <VueIcon/>},
          {text: "Pinia", icon: <PiniaIcon/>},
          {text: "Tailwind", icon: <TailwindIcon/>},
        ]}
        showGif={false}
      >
      </CardProject>

      <CardProject
        title="I Love Pomodoro"
        content="Proyecto personal realizado para practicar y utilizar la comunicación entre componentes de Vue. Se usa la API nativa de Javascript para reproducir música."
        image="/i_love_pomodoro.webp"
        altImage="I Love Pomodoro"
        links={[
          { label: "Ver en GitHub", url: "https://github.com/jorditan/MyPomodoroClock" },
          { label: "Deployear", url: "https://retro-pomodoro.netlify.app/" },
        ]}
        tags={[
          {text: "Vue", icon: <VueIcon/>},
        ]}
        showGif={false}
      >
      </CardProject>

      <CardProject
        title="Wollolok"
        content="Proyecto integrador de la materia Programacion Orientada a Objetos I de la UNAHUR. Basado en el Age of Empires II con funcionaliadades de estrategias."
        image="/wollolok.webp"
        altImage="Wollolok"
        links={[
          { label: "Ver en GitHub", url: "https://github.com/jorditan/MyPomodoroClock" },
          { label: "Deployear", url: "https://retro-pomodoro.netlify.app/" },
        ]}
        tags={[
          {text: "UNAHUR", icon: <UnahurIcon/>},
          {text: "Wollok", icon: <WollokIcon/>},
        ]}
        showGif={true}
      >
      </CardProject>
    
      
    </article>
  );
}

export default MyFront;
