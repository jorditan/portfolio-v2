function MyCarousel() {
  return (
    <>
      <div className="dark:shadow-gray-800 transition-transform duration-300 hover:rotate-2 ring-2 ring-gray-800 dark:ring-gray-50 p-2 rounded-lg">
        <div
          id="controls-carousel"
          class="relative w-full transition-transform duration-300"
          data-carousel="static"
        >
          <div class="relative overflow-hidden w-64 h-64 object-cover object-top rounded-md transition-transform ">
            <div
              class="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                class=" rounded-lg object-cover object-top "
                src="/foto-campo.webp"
                alt="Foto con una cámara de fotos en Entre Rios"
              />
            </div>
            <div class="hidden duration-700 ease-in-out " data-carousel-item>
              <img
                class="rounded-lg object-cover object-top"
                src="/foto-slack.webp"
                alt="Primera foto en mucho tiempo"
              />
            </div>
            <div class="hidden duration-700 ease-in-out " data-carousel-item>
              <img
                class="rounded-lg  object-center"
                src="/foto-merendando.webp"
                alt="Foto merendando"
              />
            </div>
          </div>

          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-900/40 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-3 h-3 text-white dark:text-gray-200 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/30 dark:bg-gray-900/40 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-3 h-3 text-white dark:text-gray-200  rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MyCarousel;
