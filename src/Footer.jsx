import React from "react";

function Footer() {
  return (
    <div className="relative bg-gradient-to-r from-footerBlue-700 to-footerBlue-400 text-lightBlue-100">
      <div className="absolute inset-0">
        <svg className="text-gray-50 w-full h-auto" viewBox="0 0 1439 147">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="currentColor">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="currentColor">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="relative flex flex-col justify-between items-center h-[550px] text-center">
        <div className="flex flex-col justify-center items-center h-full xsm:w-10/12">
          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Subscribe
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-white">
            Stay updated about our developments, to use our latest features.
          </p>
          <div className="flex space-x-0 w-full max-w-md justify-center items-center mt-4">
            <input
              type="text"
              className="w-full bg-white text-gray-700 rounded-l px-3 py-2 tracking-tighter outline-none"
              placeholder="mail@example.com"
            />
            <button className="bg-footerBlue-700 text-white rounded-r font-bold hover:bg-footerBlue-500 px-8 py-2">
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-center max-w-7xl w-full p-4 text-base text-white border-t border-gray-400">
          <p className="opacity-25 transition hover:opacity-100">
            Copyright © 2024 | Made with ❤️ by <a href="#">milkobek</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
