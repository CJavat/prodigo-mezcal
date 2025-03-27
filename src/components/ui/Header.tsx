import React from "react";
import Navbar from "./Navbar";
import { kontiki, lemonMilk } from "@/config/fonts";

export const Header = () => {
  const toggleButton = () => {
    //TODO: Falta hacer la función del toggle
    // absolute left-0 top-full w-screen bg-[#ffffff] pb-4 lg:static lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0
  };

  return (
    <header className="mb-10 px-3 lg:mr-16 py-5 flex justify-between items-center">
      <div className="relative">
        <p className={`${kontiki.className} uppercase text-3xl`}>
          Pródigo
          <span className={`${lemonMilk.className} text-[25px]`}> Mezcal</span>
        </p>

        <svg
          className="absolute left-0 top-0 -z-10 hidden lg:block"
          width="349"
          height="130"
          viewBox="0 0 349 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_174"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="349"
            height="130"
            style={{ maskType: "alpha" }}
          >
            <rect width="349" height="130" fill="white"></rect>
          </mask>
          <g mask="url(#mask0_1_174)">
            <path
              d="M335.756 8.59748C333.999 43.2789 302.26 73.6142 251.29 94.3707C200.444 115.077 130.991 125.999 55.0003 122.149C-20.9901 118.299 -88.9836 100.413 -137.477 74.6742C-186.088 48.8725 -214.598 15.4847 -212.841 -19.1968C-211.084 -53.8782 -179.345 -84.2135 -128.375 -104.97C-77.5289 -125.676 -8.07589 -136.598 67.9145 -132.748C143.905 -128.898 211.898 -111.013 260.391 -85.2735C309.002 -59.4718 337.513 -26.0839 335.756 8.59748Z"
              stroke="#e8e7e7"
              stroke-width="3"
            ></path>
          </g>
        </svg>
      </div>

      <div className="flex lg:hidden">
        <button
          onClick={toggleButton}
          id="mobile-menu-button"
          data-collapse-toggle="navigation-menu"
          type="button"
          className="px-2 rounded"
          aria-controls="navigation-menu"
          aria-expanded="false"
          aria-label="Navigation Menu"
        >
          <i
            className="fa-solid fa-bars feather feather-menu"
            data-fontawesome-icon="fa-bars"
            data-landingsite-gallery-type="icon"
            aria-hidden="true"
          ></i>
        </button>
      </div>

      {/* //TODO: mandarle los datos meidante hijos */}
      <Navbar />
    </header>
  );
};
