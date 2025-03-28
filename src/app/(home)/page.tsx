import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar estilos de Font Awesome
import { kontiki, lemonMilk } from "@/config/fonts";

export default function Home() {
  return (
    <main className={`w-full lg:w-1/2 lg:mx-auto`}>
      <Image
        src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/37d03e24-6b4e-4cd9-b0bd-f91b14876a00/public"
        alt="Hero"
        width={1000}
        height={1000}
        className="absolute -right-32 -top-32 -z-10 hidden h-[750px] w-[750px] rounded-full rounded-tr-none object-cover object-right-top lg:block"
      />

      <div className="relative z-20 mx-auto flex max-w-xl flex-col items-center md:mx-0 md:items-start">
        <div className="inline-flex items-center gap-3 rounded-full bg-prodigo-50/40 p-1.5 pr-4 font-medium md:gap-4 md:pr-7 text-sm xl:text-md">
          <p className="text-center rounded-full bg-black px-2 py-2 text-white md:px-5">
            Maestros del Mezcal
          </p>
          <p className="max-w-[260px]">
            Sumérgete en la experiencia auténtica con Pródigo Mezcal
          </p>
        </div>
      </div>

      <h1 className="pb-6 pt-8 text-center text-3xl font-bold md:text-left lg:text-7xl lg:w-8/12">
        Siente la Tradición en Cada Sorbo
      </h1>

      <p className="pb-10 text-center text-md opacity-60 md:text-left lg:text-2xl lg:leading-10 lg:w-8/12">
        Cada botella de nuestro mezcal captura la esencia de la familia Martinez
        y su legado.
      </p>

      <div className="flex justify-center items-center lg:block">
        <a
          href="#"
          className="inline-block rounded bg-prodigo-700 px-5 py-2 text-md font-bold text-prodigo-50 transition ease-linear md:py-5 md:text-sm hover:bg-prodigo-600"
        >
          Compra Tu Mezcal
        </a>
      </div>
    </main>
  );
}
