import DesignWork from "../components/DesignWork";
import FrontWork from "../components/FrontWork";
import { useState } from "react";

function MyProjects() {
  const [actualView, setActualView] = useState("front");

  const handleView = (view) => {
    setActualView(view);
  };

  return (
    <section
      className="sm:mx-auto py-6 mx-4 max-w-[32rem] md:max-w-[42rem] lg:max-w-4xl transition-all"
      id="proyectos"
      aria-label="Mis proyectos"
    >
      <h2 className="pb-4 title md:text-2xl text-1xl md:text-[3xl] font-semibold w-fit text-[#0f172a] dark:text-[#fafafa]">
        🏗️ Proyectos
      </h2>
      <div className="flex flex-col pb-4 gap-5 justify-center">
        <div className="text-sm flex font-medium text-center border-b border-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2" onClick={() => handleView("front")}>
              <span
                data-view="front"
                className={`front cursor-pointer transition-all inline-block  dark:text-gray-400 text-gray-700 p-4 border-b-1 rounded-t-lg ${
                  actualView === "front"
                    ? "dark:text-sky-300  text-sky-600 border-b-2 dark:border-[#71d1fa] border-sky-500"
                    : ""
                }`}
              >
                Front-End
              </span>
            </li>
            <li className="me-2">
              <span
                data-view="design"
                onClick={() => handleView("design")}
                className={`front cursor-pointer transition-all inline-block dark:text-gray-400 text-gray-700 p-4 border-b-1 rounded-t-lg ${
                  actualView === "design"
                    ? "dark:text-sky-300  text-sky-600 border-b-2 dark:border-[#71d1fa] border-sky-500"
                    : ""
                }`}
              >
                Diseño UX/UI
              </span>
            </li>
          </ul>
        </div>
      </div>
      {actualView === "front" ? <FrontWork /> : <DesignWork />}
    </section>
  );
}

export default MyProjects;
