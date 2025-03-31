import { kontiki } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1220px] px-6 pt-20 lg:pt-32 code-section">
      <div className="flex flex-col gap-10 pb-10 md:pb-14 lg:flex-row xl:gap-20">
        <div className="lg:max-w-[280px]">
          <Link className="block" href="/">
            <div className={`text-3xl font-bold`}>
              <span className={`${kontiki.className}`}>Pródigo</span> Mezcal
            </div>
          </Link>
          <p className="pt-7 text-md leading-5 text-lack lg:text-md">
            Somos una empresa que se dedica a vender el mejor Mezcal de todo
            Mexico, cada botella de mezcal es una reflexión de la rica tradición
            y la generosidad de la familia Martinez.
          </p>
        </div>
        <div>
          <h3 className="pb-5 text-xl font-bold lg:pb-10 lg:text-2xl">
            Explorar
          </h3>
          <div className="space-y-2 text-lg text-gray-500 lg:space-y-4 lg:text-md">
            <div>
              <Link href="/">Inicio</Link>
            </div>
            <div>
              <Link href="/historia">Historia</Link>
            </div>
            <div>
              <Link href="/productos" className="">
                Productos
              </Link>
            </div>
            <div>
              <Link href="/blog">Blog</Link>
            </div>
            <div>
              <Link href="/eventos">Eventos</Link>
            </div>
            <div>
              <Link href="/contacto">Contacto</Link>
            </div>
            <div>
              <Link href="/tiendita">Tiendita</Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="pb-5 text-xl font-semibold lg:pb-10 lg:text-2xl">
            Nuestros Productos
          </h3>
          <div className="space-y-2 text-lg text-gray-500 lg:space-y-4 lg:text-md">
            <p>Mezcal Espadín</p>
            <p>Mezcal Joven</p>
            <p>Mezcal Añejo</p>
            <p>Mezcal de Pechuga</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-7 font-bold text-md md:justify-between">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <span className={`${kontiki.className}`}>Prodigo</span> Mezcal.
        </p>
      </div>
    </footer>
  );
};
