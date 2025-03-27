"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleButton = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="px-2 overflow-hidden">
      <div className="flex lg:hidden justify-center items-center">
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

      <div
        id="navigation-menu"
        className={`flex items-center lg:space-x-10 absolute lg:relative ${
          showMobileMenu
            ? "bg-white absolute left-0 top-16 w-full flex flex-col items-start"
            : ""
        }`}
      >
        <ul
          className={`w-full lg:flex lg:space-x-5 opacity-0 lg:opacity-100 ${
            showMobileMenu
              ? "flex flex-col transition ease-linear opacity-100"
              : ""
          }`}
        >
          <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
            <a
              href="#"
              className="block border-b-2 border-transparent transition ease-linear md:hover:border-gray-950"
            >
              Productos
            </a>
          </li>
          <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
            <a
              href="#"
              className="block border-b-2 border-transparent transition ease-linear md:hover:border-gray-950"
            >
              Historia
            </a>
          </li>
          <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
            <div className="group relative">
              <button
                className="flex w-full cursor-pointer flex-row items-center gap-1 border-b-2 border-transparent transition ease-linear md:hover:border-gray-950"
                onClick={toggleDropdown}
              >
                <span className="">Blog</span>
                <i
                  className="fa-solid fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                  aria-hidden="true"
                ></i>
              </button>

              <div
                className={`transition ease-linear left-0 top-full z-50 lg:opacity-100 w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block ${
                  showDropdown ? "opacity-100 h-fit" : "opacity-0 h-0" //! Ver porque en desktop no funciona el dropdown
                }`}
              >
                <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                  <a
                    className="block cursor-pointer border-b border-b-gray-300 border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                    href="/blog"
                  >
                    Articles
                  </a>
                  <a
                    className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                    href="/eventos"
                  >
                    Eventos
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center p-2 border-t border-gray-200 lg:border-t-transparent lg:p-0">
            <a
              href="#"
              className="block border-b-2 border-transparent transition ease-linear md:hover:border-gray-950"
            >
              Tiendita
            </a>
          </li>
        </ul>

        <div
          className={`lg:flex my-5 lg:my-0 ${
            showMobileMenu ? "block w-full text-center" : "hidden"
          }`}
        >
          <a
            href="#"
            className="bg-[#2a642a] hover:bg-[#1e4820] text-white px-3 py-1 lg:px-5 rounded-full cursor-pointer"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
