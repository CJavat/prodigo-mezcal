import React from "react";

const Navbar = () => {
  //TODO: Falta hacer la función del toggle

  return (
    <nav className="hidden lg:flex items-center space-x-10">
      <ul className="flex space-x-5">
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
            <button className="flex w-full cursor-pointer flex-row items-center gap-1 border-b-2 border-transparent transition ease-linear md:hover:border-gray-950">
              <span className="">Blog</span>
              <i
                className="fa-solid fa-chevron-down ml-1 transition-['rotate'] lg:group-hover:rotate-[180deg]"
                aria-hidden="true"
              ></i>
            </button>

            <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
              <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                <a
                  className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
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

      <div>
        <a
          href="#"
          className="bg-[#2a642a] hover:bg-[#1e4820] text-white px-3 py-1 lg:px-5 rounded-full cursor-pointer"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
