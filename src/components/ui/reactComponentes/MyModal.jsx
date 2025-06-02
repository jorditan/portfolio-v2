import GifIcon from "@/assets/icons/GifIcon";

function MyModal({buttonText, title, text, video}) {
  return (
    <>

      <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="w-full border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 hover:bg-gray-600" type="button">
        <GifIcon />
        {buttonText}
      </button>

      {/* <!-- Main modal --> */}
      <div id="default-modal" tabindex="-1" aria-hidden="true" class="shadow-md hidden h-100vh overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center bg-[#d9d9d9b6] dark:bg-[#282828ac] items-center w-full md:inset-0  max-h-full ">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative rounded-lg shadow-sm bg-[#fafafa]  transparent border border-gray-700  dark:bg-gray-800">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-900">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5 space-y-4">
              <p class="text-base leading-relaxed dark:text-gray-300 text-gray-800">
                {text}
              </p>
              {video}
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center justify-end p-4 md:p-5 border-t border-gray-900 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button" class=" border gap-2 text-[12px] sm:text-sm border-gray-700 bg-gray-800 inline-flex items-center px-3 py-2 font-medium text-center text-white rounded-lg hover:border-gray-500 ">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyModal;