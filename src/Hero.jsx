import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [logoname, setLogoName] = useState("");

  return (
    <div className="bg-gradient-to-l from-darkBlue to-lightBlue pt-20  text-white">
      <div className="flex xsm:flex-col sm:flex-col md:flex-row justify-center items-center">
        <div className="pl-7 lg:pl-40 flex flex-col space-y-12 items-start md:w-11/12">
          <h1 className="text-5xl font-extrabold lg:w-11/12">
            Design & Prototype with Tailwind CSS
          </h1>
          <span className="leading-6">
            Thousands of developers — working as freelance, for startups, or
            enterprises — use Updrafts.app Tailwind Studio to create their
            designs and prototypes, and share them with their clients.
          </span>
          <Link
            to="/join"
            className="bg-white pt-1 pb-1 pl-4 pr-4 text-textBlue rounded-3xl transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
          >
            <span className="font-bold flex">
              Start now{" "}
              <span className="font-normal flex items-center">
                — it's free{" "}
              </span>
            </span>
          </Link>

          <div className="mt-5">
            <span className="font-semibold">
              USED BY <span>{logoname}</span>
            </span>
            <div className="flex gap-5 mt-3 ml-3">
              <img
                onMouseEnter={() => setLogoName("GENX.BE")}
                onMouseLeave={() => setLogoName("")}
                className="object-contain w-9 h-9"
                src="https://updrafts.app/logos/genx-small.png"
                alt="genx.be"
              />
              <img
                onMouseEnter={() => setLogoName("GIBBON.OOO")}
                onMouseLeave={() => setLogoName("")}
                className="object-contain w-9 h-9"
                src="https://updrafts.app/logos/gibbon-small.png"
                alt="gibbon.ooo"
              />
              <img
                onMouseEnter={() => setLogoName("INGEWIKKELD.NET")}
                onMouseLeave={() => setLogoName("")}
                className="object-contain w-9 h-9"
                src="https://updrafts.app/logos/ingewikkeld-small.png"
                alt="ingewikkeld.net"
              />
              <img
                onMouseEnter={() => setLogoName("SIGHUP.IO")}
                onMouseLeave={() => setLogoName("")}
                className="object-contain w-9 h-9"
                src="https://updrafts.app/logos/sighup-small.png"
                alt="sighup.io"
              />
              <img
                onMouseEnter={() => setLogoName("TECHREATIVE.COM.AU")}
                onMouseLeave={() => setLogoName("")}
                className="object-contain w-9 h-9"
                src="https://updrafts.app/logos/techreactive-small.png"
                alt="techreative.com.au"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-11/12 xsm:pt-16 sm:pt-16">
          <img
            className="object-contain"
            src="https://updrafts.app/heading-image.png"
            alt="heading image"
          />
        </div>
      </div>

      <svg class="text-gray-50" viewBox="0 0 1428 174">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="currentColor"
            fill-rule="nonzero"
          >
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
              id="Path-4"
              opacity="0.200000003"
            ></path>
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="currentColor"
            fill-rule="nonzero"
          >
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Hero;
