
function MyFront() {
  return (
    <article className="flex flex-wrap justify-center w-full gap-10">
      <div className="max-w-sm dark:bg-[#28282830] dark:bg-opacity-50 transparent border border-gray-700 rounded-lg shadow dark:bg-gray-800">
        <div className="h-[185px]">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src="/translate.webp"
            alt="Translate App"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h5 className="text-xl font-bold tracking-tight text-[#141a28] dark:text-[#fafafa]">
            Translate App
          </h5>
          <p className="font-normal dark:text-gray-300 text-gray-800">
            Proyecto personal de una aplicación de traducción de idiomas. Se
            utiliza Zustand para el control de estados y la API de Google
            Translate.
          </p>
          <div className="flex flex-wrap">
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <svg
                viewBox="0 0 256 228"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              ><path
                d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                fill="#00D8FF"></path></svg
              >
              React
            </span>
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <svg
                viewBox="0 0 256 154"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <defs
                ><linearGradient
                  x1="-2.778%"
                  y1="32%"
                  x2="100%"
                  y2="67.556%"
                  id="gradient"
                >
                    <stop stopColor="#2298BD" offset="0%"></stop>
                    <stop stopColor="#0ED7B5" offset="100%"></stop>
                  </linearGradient></defs
                >
                <path
                  d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                  fill="url(#gradient)"></path></svg
              >

              TailwindCSS
            </span>
          </div>
          <div className="flex justify-between w-full gap-4">
            <a
              href="https://github.com/jorditan/translate-app"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-600"
            >
              <svg
                viewBox="0 0 256 250"
                width="20"
                height="20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                ></path>
              </svg>
              Ver repositorio
            </a>
            <a
              aria-label="Ver proyecto"
              href="https://translate-app-sable.vercel.app/"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-code"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path
                  d="M14 4l-4 16"></path></svg
              >
              Ver proyecto
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-sm w-full dark:bg-[#28282830] dark:bg-opacity-50 transparent border border-gray-700 rounded-lg shadow dark:bg-gray-800"
      >
        <div className="h-[185px]">
          <img
            className="rounded-t-lg object-fill h-full"
            src="/pokegame.webp"
            alt="Pokegame | Pokefinder"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h5 className="text-xl font-bold tracking-tight text-[#141a28] dark:text-[#fafafa]">
            PokeGame
          </h5>
          <p className="font-normal dark:text-gray-300 text-gray-800">
            Proyecto realizado gracias al curso de Fernando Herrera. Se toman las bases iniciales y se aplican mejoras en la UI, UX y jugabilidad.
          </p>
          <div className="flex flex-wrap">
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <svg
                viewBox="0 0 256 221"
                width="14"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              ><path
                d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"
                fill="#41B883"></path><path
                  d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"
                  fill="#41B883"></path><path
                    d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"
                    fill="#35495E"></path></svg
              >
              Vue
            </span>
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <svg
                viewBox="0 0 256 154"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <defs
                ><linearGradient
                  x1="-2.778%"
                  y1="32%"
                  x2="100%"
                  y2="67.556%"
                  id="gradient"
                >
                    <stop stopColor="#2298BD" offset="0%"></stop>
                    <stop stopColor="#0ED7B5" offset="100%"></stop>
                  </linearGradient></defs
                >
                <path
                  d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                  fill="url(#gradient)"></path></svg
              >

              TailwindCSS
            </span>
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700  border border-gray-500 transition-all"
            >
              <svg
                viewBox="0 0 256 331"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                preserveAspectRatio="xMidYMid"
              ><defs
              ><linearGradient
                id="a"
                x1="55.342%"
                x2="42.817%"
                y1="0%"
                y2="42.863%"
              ><stop offset="0%" stopColor="#52CE63"></stop><stop
                offset="100%"
                stopColor="#51A256"></stop></linearGradient
                  ><linearGradient
                    id="b"
                    x1="55.349%"
                    x2="42.808%"
                    y1="0%"
                    y2="42.863%"
                  ><stop offset="0%" stopColor="#52CE63"></stop><stop
                    offset="100%"
                    stopColor="#51A256"></stop></linearGradient
                  ><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="58.811%"
                  ><stop offset="0%" stopColor="#8AE99C"></stop><stop
                    offset="100%"
                    stopColor="#52CE63"></stop></linearGradient
                  ><linearGradient
                    id="d"
                    x1="51.378%"
                    x2="44.585%"
                    y1="17.473%"
                    y2="100%"
                  ><stop offset="0%" stopColor="#FFE56C"></stop><stop
                    offset="100%"
                    stopColor="#FFC63A"></stop></linearGradient
                  ></defs
                ><path
                  fill="url(#a)"
                  d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823 3.654-37.175-21.174-70.814-31.502-69.799-10.328 1.015-43.15 40.322-46.805 77.497-3.654 37.175 3.205 60.11 33.572 57.125Z"
                  transform="rotate(-38 72.877 106.136)"></path><path
                    fill="url(#b)"
                    d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207-3.655-37.175-35.645-76.4-45.973-77.415-10.328-1.015-35.989 32.542-32.334 69.717 3.654 37.175 15.201 61.92 45.567 64.905Z"
                    transform="rotate(52 178.34 119.085)"></path><path
                      fill="url(#c)"
                      d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013 0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013Z"
                      transform="rotate(7 128.858 77.673)"></path><path
                        fill="url(#d)"
                        d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482 0-74.955-46.142-136.462-103.038-136.462-56.897 0-103.002 61.507-103.002 136.462 0 74.954 46.105 91.482 103.002 91.482Z"
                      ></path><ellipse
                        cx="165.427"
                        cy="216.677"
                        fill="#EAADCC"
                        rx="14.717"
                        ry="6.845"></ellipse><ellipse
                          cx="57.273"
                          cy="212.57"
                          fill="#EAADCC"
                          rx="14.717"
                          ry="6.845"
                          transform="rotate(7 57.273 212.57)"></ellipse><path
                            d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119 6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958-5.23-.598-8.986-2.7-11.434-6.333ZM65.818 178.63a14.672 14.672 0 0 1 10.551 3.945 14.67 14.67 0 0 1 4.672 10.25 14.671 14.671 0 0 1-3.945 10.55 14.672 14.672 0 0 1-10.25 4.672 14.67 14.67 0 0 1-10.551-3.945 14.672 14.672 0 0 1-4.67-10.25 14.67 14.67 0 0 1 3.944-10.55 14.67 14.67 0 0 1 10.249-4.672Z"
                          ></path><path
                            fill="#FFF"
                            d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336 4.792 4.792 0 0 0 9.579-.336Z"
                          ></path><path
                            d="M154.99 182.366a14.671 14.671 0 0 1 10.552 3.944 14.67 14.67 0 0 1 4.67 10.25 14.672 14.672 0 0 1-3.944 10.551 14.67 14.67 0 0 1-10.25 4.671 14.671 14.671 0 0 1-10.55-3.945 14.671 14.671 0 0 1-4.672-10.25 14.67 14.67 0 0 1 3.945-10.55 14.671 14.671 0 0 1 10.25-4.671Z"
                          ></path><path
                            fill="#FFF"
                            d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165.343 9.824-7.342 18.065-17.166 18.408-9.824.343-18.064-7.342-18.407-17.166-.343-9.823 7.341-18.064 17.164-18.407Zm12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223-6.422.224-11.447 5.612-11.222 12.035.224 6.424 5.612 11.448 12.035 11.224 6.423-.224 11.448-5.612 11.224-12.036ZM154.883 179.287c9.824-.343 18.065 7.342 18.408 17.165.343 9.824-7.342 18.065-17.165 18.408-9.824.343-18.065-7.342-18.408-17.165-.343-9.824 7.342-18.065 17.165-18.408Zm12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223-6.423.224-11.448 5.613-11.223 12.036.224 6.423 5.612 11.448 12.035 11.224 6.424-.225 11.448-5.613 11.224-12.037Z"
                          ></path><path
                            fill="#FFF"
                            d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335 4.792 4.792 0 0 0 9.578-.335Z"
                          ></path><path
                            fill="#ECB732"
                            d="m38.083 243.16 22.33 23.235 16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324 23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218ZM188.04 243.16a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511 10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044 22.331-23.235Z"
                          ></path><path
                            fill="#FFC73B"
                            d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531 10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53 17.531-17.53a3.765 3.765 0 0 1 5.325 0Z"
                          ></path></svg
              >
              Pinia
            </span>
          </div>
          <div className="flex justify-between w-full gap-4">
            <a
              aria-label="Ver repo"
              href="https://github.com/jorditan/translate-app"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-600"
            >
              <svg
                viewBox="0 0 256 250"
                width="20"
                height="20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                ></path>
              </svg>
              Ver repositorio
            </a>
            <a
              aria-label="Ver proyecto"
              href="https://pokemonfinder-vue.netlify.app/"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-code"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path
                  d="M14 4l-4 16"></path></svg
              >
              Ver proyecto
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-sm dark:bg-[#28282830] dark:bg-opacity-50 transparent border border-gray-700 rounded-lg shadow dark:bg-gray-800"
      >
        <div className="h-[185px]">
          <img
            className="rounded-t-lg h-full w-full object-fit"
            src="/i_love_pomodoro.webp"
            alt="I love pomodoro"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h5 className="text-xl font-bold tracking-tight text-[#141a28] dark:text-[#fafafa]">
            I love pomodoro
          </h5>
          <p className="font-normal dark:text-gray-300 text-gray-800">
            Proyecto personal realizado para practicar y utilizar la comunicación entre componentes de Vue. Se usa la API nativa de Javascript para reproducir música.
          </p>
          <div className="flex flex-wrap">
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 p-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              <svg viewBox="0 0 256 221" width="14" height="14" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg>
              Vue
            </span>
      
          </div>
          <div className="flex justify-between w-full gap-4">
            <a
              aria-label="Ver repo"
              href="https://github.com/jorditan/MyPomodoroClock"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-600"
            >
              <svg
                viewBox="0 0 256 250"
                width="20"
                height="20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                ></path>
              </svg>
              Ver repositorio
            </a>
            <a
              aria-label="Ver proyecto"
              href="https://retro-pomodoro.netlify.app/"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-code"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path
                  d="M14 4l-4 16"></path></svg
              >
              Ver proyecto
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-sm dark:bg-[#28282830] dark:bg-opacity-50 transparent border border-gray-700 rounded-lg shadow dark:bg-gray-800"
      >
        <div className="h-[185px]">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src="/wollolok.webp"
            alt="Wollolok"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <h5 className="text-xl font-bold tracking-tight text-[#141a28] dark:text-[#fafafa]">
            Wollolok
          </h5>
          <p className="font-normal dark:text-gray-300 text-gray-800">
            Proyecto integrador de la materia Programacion Orientada a Objetos I de la UNAHUR. Basado en el Age of Empires II con funcionaliadades de estrategias.
          </p>
          <div className="flex flex-wrap">
            <span
              className="dark:bg-[#28282834] bg-gray-100 p-1 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              UNAHUR
            </span>
            <span
              className="dark:bg-[#28282834] bg-gray-100 badge gap-1 dark:text-[#fafafa] text-gray-800 text-[10px] font-medium inline-flex items-center px-1.5 rounded me-2 dark:bg-gray-700 border border-gray-500 transition-all"
            >
              Wollok
            </span>
          </div>
          <div className="flex justify-between w-full gap-4">
            <a aria-label="Ver repo"
              href="https://github.com/obj1-unahur-2024s2/TPGameIntegrador-thecoders"
              target="_blank"
              className="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white hover:border-gray-500 rounded-lg hover:bg-gray-600"
            >
              <svg
                viewBox="0 0 256 250"
                width="20"
                height="20"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
                ></path>
              </svg>
              Ver repositorio
            </a>
            <div
              id="tooltip-disabled"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#fafafa] dark:text-gray-900 bg-[#0f172a]  dark:bg-white border dark:border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
            >
              El proyecto solo se puede deployear desde Visual Studio Code
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button aria-label="Button disabled" disabled data-tooltip-target="tooltip-disabled"
              className="w-full border cursor-not-allowed disabled gap-2 border-gray-700 bg-gray-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-code"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path
                  d="M14 4l-4 16"></path></svg
              >
              Ver proyecto
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MyFront;
