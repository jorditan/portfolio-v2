import MyDesigns from './projects/desing';
import MyFront from './projects/frontEnd';
import { useEffect, useState } from 'react';


function MyProjects() {
  const [actualView, setActualView] = useState("front");

  const handleView = (view) => {
    setActualView(view);
  }

  return (
    <section className="mx-auto pb-10 max-w-4xl" id="proyectos" aria-label="Mis proyectos">
      <h2 className="pb-4 title text-3xl font-semibold w-fit text-[#fafafa]">Proyectos</h2>
      <div className="flex flex-col pb-4 gap-5 justify-center">
        <div className="text-sm flex font-medium text-center text-gray-400 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2" onClick={() => handleView("front")}>
              <span data-view="front"
                className={`front cursor-pointer transition-all inline-block p-4 border-b-1 rounded-t-lg ${
                  actualView === "front" ? "text-[#71d1fa] border-b-2 border-[#71d1fa]" : ""
                }`}
              >
                Front-End
              </span>
            </li>
            <li className="me-2">
              <span data-view="design" onClick={() => handleView("design")}
                className={`front cursor-pointer transition-all inline-block p-4 border-b-1 rounded-t-lg ${
                  actualView === "design" ? "text-[#71d1fa] border-b-2 border-[#71d1fa]" : ""
                }`}
              >
                Diseño UX/UI
              </span>
            </li>
          </ul>
        </div>
      </div>
      {
        actualView === "front" ? <MyFront /> : <MyDesigns />
      }
    </section>
  );
}

export default MyProjects;