import React from "react";

function Pricing() {
  return (
    <div className="relative bg-lightBlue block pt-28 xsm:pb-12 md:pb-0 lg:pb-0 lg:h-[740px] md:h-[850px]">
      <div className="block text-white">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          Buy yourself a head start
        </h2>
        <p className="mt-4 max-w-3xl  mx-auto text-center text-xl">
          Get early access with a big discount
        </p>
      </div>

      <div className="grid md:grid-cols-10 xsm:grid-cols-10 xsm:grid-rows-3 md:grid-rows-none lg:grid-rows-none xsm:gap-6 md:gap-0 lg:gap-0 lg:w-4/5 md:w-11/12 lg:items-center md:items-start mr-auto ml-auto mt-24">
        <div className="personal xsm:col-start-2 xsm:col-end-10 sm:col-start-3 sm:col-end-9 xsm:row-start-2 xsm:row-end-3 md:row-start-1 md:row-end-1 lg:row-start-1 lg:row-end-1 pt-12 lg:flex-none md:flex flex-col bg-white rounded-xl shadow-lg md:col-start-1 md:col-end-4 md:h-full lg:h-auto">
          <div className="pt-2 pb-8">
            <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900">
              Personal
            </h2>
            <div className="mt-4 flex items-center justify-center font-display sm:text-2xl font-medium tracking-wide">
              <span className="flex items-center text-3xl text-gray-900">
                $ <span className="text-6xl">10 </span>
              </span>

              <span className="sm:text-2xl ml-2 text-1xl font-medium text-gray-400">
                / mo
              </span>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 bg-gray-50 flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-6 xl:p-10">
            <div className="space-y-3">
              <div class="font-semibold">Everything in Personal, plus:</div>
              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  personal use
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  10 projects
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  10 pages per project
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  23 element types
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  3 layout components
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  inline editing
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                class="rounded-lg shadow-md block w-full text-center px-6 py-4 text-xl leading-6 font-semibold font-display focus:outline-none text-textBlue bg-white hover:text-textBlue-light"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[292px] transform translate-y-px">
          <div class="flex justify-center transform -translate-y-1/2">
            <span class="inline-flex rounded-full bg-textBlue px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
              limited time offer
            </span>
          </div>
        </div>

        <div className="professional pt-12 xsm:col-start-2 xsm:col-end-10 xsm:row-start-1 xsm:row-end-2 sm:row-start-1 sm:row-end-2 md:row-start-1 md:row-end-1 lg:row-start-1 lg:row-end-1 sm:col-start-2 sm:col-end-10 lg:flex-none md:flex flex-col md:col-start-4 md:col-end-8 border-2 border-blue-500 bg-white rounded-xl shadow-lg md:h-full lg:h-auto">
          <div className="pt-2 pb-8">
            <p class="text-center text-lg font-semibold font-display text-textBlue uppercase tracking-widest">
              lifetime
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900">
              Professional
            </h2>
            <div className="mt-4 flex items-center justify-center font-display sm:text-2xl font-medium tracking-wide">
              <span className="sm:text-2xl mr-2 text-1xl font-medium text-gray-400 line-through">
                $ 549
              </span>

              <span className="flex items-center text-3xl text-gray-900">
                $ <span className="text-6xl">249 </span>
              </span>

              <span className="sm:text-2xl ml-2 text-1xl font-medium text-gray-400">
                / once
              </span>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 bg-gray-50 flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-6 xl:p-10">
            <div className="space-y-3">
              <div class="font-semibold">Everything in Personal, plus:</div>
              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  one time payment
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  commercial use
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  unlimited projects
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  100 pages per project
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  11 layout components
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  tailwind ui integration
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  import & export
                </span>
              </div>
            </div>

            <div class="mt-10">
              <a
                class="rounded-lg shadow-md block w-full text-center px-6 py-4 text-xl leading-6 font-semibold font-display focus:outline-none text-white bg-textBlue hover:bg-textBlue-light"
                href="#"
              >
                Buy
              </a>
            </div>
          </div>
        </div>

        <div className="professional pt-12 xsm:col-start-2 xsm:col-end-10 xsm:row-start-3 xsm:row-end-4 sm:row-start-3 sm:row-end-4 md:row-start-1 md:row-end-1 lg:row-start-1 lg:row-end-1 sm:col-start-3 sm:col-end-9 lg:flex-none md:flex flex-col bg-white rounded-xl shadow-lg md:col-start-8 md:col-end-11 md:h-full lg:h-auto">
          <div className="pt-2 pb-8">
            <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900">
              Professional
            </h2>
            <div className="mt-4 flex items-center justify-center font-display sm:text-2xl font-medium tracking-wide">
              <span className="flex items-center text-3xl text-gray-900">
                $ <span className="text-6xl">25 </span>
              </span>

              <span className="sm:text-2xl ml-2 text-1xl font-medium text-gray-400">
                / mo
              </span>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 bg-gray-50 flex-1 flex flex-col justify-between p-6 sm:p-10 md:p-6 xl:p-10">
            <div className="space-y-3">
              <div class="font-semibold">Everything in Personal, plus:</div>
              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  commercial use
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  unlimited projects
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  100 pages per project
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  11 layout components
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  tailwind ui integration
                </span>
              </div>

              <div className="flex space-x-3">
                <svg
                  class="mdi-icon text-textBlue"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-base font-medium text-gray-500">
                  import & export
                </span>
              </div>
            </div>

            <div className="mt-8">
              <a
                class="rounded-lg shadow-md block w-full text-center px-6 py-4 text-xl leading-6 font-semibold font-display focus:outline-none text-textBlue bg-white hover:text-textBlue-light"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
