import React from "react";

function Features() {
  return (
    <div className="pt-20 pb-20 bg-gray-50">
      <div className="text-center flex flex-col justify-center items-center xsm:w-11/12 xsm:mx-auto sm:w-full">
        <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          A better way to design
        </h1>
        <span className="mt-4 max-w-3xl text-xl text-gray-500">
          Rapidly build modern websites, without writing code.
        </span>
      </div>

      <div className="relative pt-12 flex justify-between items-center flex-col lg:flex-row lg:pl-52 lg:pr-52 lg:w-full sm:w-3/4 xsm:mx-auto xsm:w-11/12">
        <svg
          class="hidden lg:block absolute lg:left-[86%] top-4 transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          ></rect>
        </svg>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Designed for Developers
          </h3>
          <p className="mt-3 text-lg text-gray-500 lg:w-5/6">
            We agonize over the right abstractions so you don't need to think
            about class names or pixel precise offsets. Use prebuilt components
            and focus on customizing details instead of building the same
            skeletons over and over again.
          </p>

          <div className="mt-10 space-y-10 lg:w-5/6">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-32 sm:w-32 xsm:w-40 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Prebuilt components
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  Drag prebuilt components to your canvas and focus on
                  customizing and details, instead of building the same
                  wireframes over and over again. Use our standard components,
                  or import your own.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-10 lg:w-5/6">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-36 sm:w-36 xsm:w-44 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Convenient pickers
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  All properties can be set and managed through convenient
                  pickers. Color pickers, padding presets, font sizes,
                  everything. There is no need to enter Tailwind CSS classnames.
                  You still can though, if you really want.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-10 lg:w-5/6">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-28 sm:w-28 xsm:w-32 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Updates are instant
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  No matter what you edit, changes are instant. Hover over
                  options for live preview, and click to commit the change. No
                  rebuilding, no waiting, it's instant.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="z-0 lg:w-full xsm:w-4/5 xsm:pt-12">
          <img
            className="rounded-xl"
            src="https://updrafts.app/gifs/product-one.gif"
            alt="product-one-gif"
          />
        </div>
      </div>

      <div className="relative pt-24 lg:flex xsm:grid xsm:grid-cols-1 xsm:grid-rows-2 justify-between justify-items-center items-center flex-col lg:flex-row lg:pl-52 lg:pr-52 lg:w-full sm:w-2/3 xsm:w-11/12 xsm:mx-auto">
        <svg
          className="hidden lg:block lg:right-[90%] absolute transform translate-x-1/2 translate-y-12"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              ></rect>
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          ></rect>
        </svg>
        <div className="z-0 lg:w-11/12 sm:w-11/12 xsm:w-10/12 row-start-2 row-end-3">
          <img
            className="rounded-xl"
            src="https://updrafts.app/gifs/product-two.gif"
            alt="product-two-gif"
          />
        </div>

        <div className="lg:ml-24 md:pt-12 row-start-1 row-end-2">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Always in the loop
          </h3>
          <p className="mt-3 text-lg text-gray-500 lg:w-full">
            Every project comes with a public accessible url. Use it to check
            the design on your mobile device, or share it with others to get
            feedback.
          </p>

          <div className="mt-10 space-y-10 lg:w-full">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-28 sm:w-32 xsm:w-32 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Import UI components
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  We support any Tailwind based component library. Import your
                  assets from Tailwind UI, Tailwind Components, your private
                  library, or any other source really.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-10 lg:w-full">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-28 sm:w-32 xsm:w-32 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Shareable preview
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  Designs can be shared with team members, clients or family.
                  They don't need to install anything. Share the link, and
                  they're ready to go, on any device.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-10 lg:w-full">
            <div className="flex">
              <div class="flex items-center justify-center h-12 lg:w-32 sm:w-36 xsm:w-36 rounded-md bg-iconBlue-600 text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>

              <div className="block pl-6">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  Export pure HTML & Tailwind CSS
                </h5>
                <p className="mt-2 text-base text-gray-500">
                  Designs are build on HTML and Tailwind CSS. There is no need
                  to "convert to code", because the design is the code. We also
                  don't use any external dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-48 flex flex-col items-center lg:w-full xsm:w-11/12 xsm:mx-auto">
        <p className="max-w-3xl text-center text-2xl leading-9 font-medium text-gray-900">
          “I love how easy updrafts.app frontend work makes for me as backend
          developer. Being able to share these quick prototypes allow me to
          communicate better with my not technical team.”
        </p>
        <div className="flex justify-center items-center pt-8">
          <div className="w-1/6">
            <img
              className="rounded-full"
              src="https://updrafts.app/photos/jenna.jpg"
              alt="jenna"
            />
          </div>
          <span className="ml-4 text-base font-medium text-gray-900">
            Jenna Davis
          </span>
        </div>
      </div>
    </div>
  );
}

export default Features;
