import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar estilos de Font Awesome
import { kontiki, lemonMilk } from "@/config/fonts";

export default function Home() {
  const customersFeedback = [
    {
      url: "https://media.gettyimages.com/id/2156062809/photo/headshot-closeup-portrait-middle-eastern-israel-businesswoman-business-lady-standing-isolated.jpg?b=1&s=612x612&w=0&k=20&c=mPEqaET5s98W_40DmBTRbYY5z0F-_1YkqdC4TCHJeig=",
      alt: "Cliente 1",
    },
    {
      url: "https://media.gettyimages.com/id/1327603929/photo/portrait-of-mature-businessman.jpg?b=1&s=612x612&w=0&k=20&c=KvWDbxFEIVIAGbtSEAoAYsHk9TAG-xofOO0WIrkmwsI=",
      alt: "Cliente 2",
    },
    {
      url: "https://media.gettyimages.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?b=1&s=612x612&w=0&k=20&c=Oxn1hxRZ43vNbYcRlsKQs0Wa8zT344VOIJfGbd_qMtY=",
      alt: "Cliente 3",
    },
    {
      url: "https://media.gettyimages.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?b=1&s=612x612&w=0&k=20&c=_3BHqzEwN7yDJ5o41g1ofHVbEp1NYbcqisUY_Sd1eyA=",
      alt: "Cliente 4",
    },
    {
      url: "https://media.gettyimages.com/id/1309489745/photo/portrait-of-young-happy-indian-business-man-executive-looking-at-camera-eastern-male.jpg?b=1&s=612x612&w=0&k=20&c=K1pIuZ-758hZpczvQSLjxvyqeOwy5t5EklPn_ykBHfo=",
      alt: "Cliente 5",
    },
  ];

  const infoItems = [
    {
      title: "Artesanía Auténtica",
      description:
        "Nuestro mezcal se elabora con dedicación, reflejando la rica herencia de la familia Martínez, asegurando que cada botellaencarne autenticidad y tradición.",
      icon: "fa-leaf",
    },
    {
      title: "Perfiles de Sabor Inigualables",
      description:
        "Experimenta sabores diversos y ricos que te transportan al corazón de México con cada sorbo, celebrando las variedades únicas de agave.",
      icon: "fa-solid fa-star",
    },
    {
      title: "Ofertas Exclusivas",
      description:
        "Únete a nuestra comunidad para acceder a ediciones limitadas y lanzamientos especiales, disponibles solo para nuestros leales clientes.",
      icon: "fa-gift",
    },
    {
      title: "Compromiso con la Comunidad",
      description:
        "Comparte tus experiencias con el mezcal y conéctate con otros entusiastas, enriqueciendo nuestra vibrante comunidad.",
      icon: "fa-comments",
    },
  ];

  return (
    <main className={`w-full`}>
      <section className="flex flex-col md:flex-row md:px-5">
        <div>
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

          <h1 className="pb-6 pt-8 text-center text-3xl font-bold md:text-left lg:text-5xl lg:w-8/12">
            Siente la Tradición en Cada Sorbo
          </h1>

          <p className="pb-10 text-center text-md opacity-60 md:text-left lg:text-2xl lg:leading-10 lg:w-9/12">
            Cada botella de nuestro mezcal captura la esencia de la familia
            Martinez y su legado.
          </p>

          <div className="flex justify-center items-center lg:block">
            <a
              href="#"
              className="inline-block rounded bg-prodigo-700 px-5 py-2 text-md font-bold text-prodigo-50 transition ease-linear md:py-5 md:text-lg hover:bg-prodigo-600"
            >
              Compra Tu Mezcal
            </a>
          </div>
        </div>

        <div className="lg:w-md md:self-end mx-5 relative mt-8 inline-flex items-center gap-3 rounded-3xl border-2 border-white bg-gray-600/40 p-4 shadow-[0_0_25px_0_rgba(0,0,0,0.1)] backdrop-blur-xl md:gap-5 lg:mt-0 lg:block lg:border-4 lg:p-8">
          <div className="flex -space-x-2 overflow-hidden p-2 lg:mb-5">
            {customersFeedback.map((customer, index) => (
              <Image
                key={`${customer}-${index}`}
                src={customer.url}
                alt={customer.alt}
                width={100}
                height={100}
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
            ))}
          </div>
          <p className="text-xl text-white lg:text-2xl">
            <span className="text-2xl font-semibold text-white lg:text-4xl">
              5000
            </span>
            <span className="ml-2">Botellas Vendidas</span>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden md:overflow-visible lg:pt-20 code-section my-15 md:px-5">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="absolute left-16 right-16 top-0 z-0 hidden h-60 rounded-3xl bg-prodigo-100/50 lg:block"></div>
          <div className="relative z-10 grid-cols-5 gap-8 md:grid lg:gap-16 lg:pt-16 xl:grid-cols-2">
            <div className="relative col-span-3 ml-8 grid grid-cols-3 gap-4 pb-10 md:ml-0 md:grid-cols-2 lg:gap-8 xl:col-span-1">
              {/* //TODO: Hacer un Slider en esas imágenes */}
              <div className="relative z-30 col-span-2 h-60 w-full overflow-hidden rounded-xl border-4 border-white shadow-[0_0_25px_0_rgba(0,0,0,0.1)] md:col-span-1 md:h-96 lg:h-[460px]">
                <img
                  className="h-full w-full object-cover dont-replace"
                  src="https://images.unsplash.com/photo-1719876969058-5482a133678a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyfHxNZXhpY2FuJTIwU3Bpcml0c3xlbnwwfDB8fHwxNzQyNzc3Nzc5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                  alt=""
                />
              </div>

              <div className="relative z-10 h-60 w-full overflow-hidden rounded-xl rounded-r-none border-4 border-white md:h-96 md:rounded-r-xl lg:h-[460px]">
                <img
                  className="h-full w-full object-cover"
                  src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/2233815b-1d87-4c57-0fe6-156886ab2700/public"
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-center md:items-start xl:col-span-1 xl:pr-40">
              <h3 className="pb-5 text-center text-lg font-bold md:text-left lg:text-4xl xl:text-5xl xl:leading-[60px]">
                Sumérgete en la autenticidad del mejor mezcal de México con
                Pródigo Mezcal
              </h3>
              <p className="pb-8 text-center text-md opacity-60 md:text-left lg:text-xl xl:text-2xl xl:leading-10">
                Cada botella que ofrecemos es una celebración de la rica
                herencia cultural y el amor que la familia Martínez vierte en
                cada etapa de la producción, desde la cosecha del agave hasta el
                embotellado.
              </p>
              <p className="inline-block rounded-full bg-prodigo-100/10 px-8 py-5 text-md text-prodigo-500 lg:text-xl xl:text-2xl">
                <span className="mr-2 font-semibold xl:text-4xl">+ 20</span>
                <span className="">Años de elaboración de mezcal</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="z-20 mx-auto px-6">
          <h3 className="flex flex-col items-center justify-center space-x-2 pb-8 text-2xl font-bold sm:flex-row lg:text-4xl">
            <span className="">Descubre la Esencia del</span>
            <span
              className={`inline-block rounded-full bg-prodigo-700 px-8 py-2 text-2xl text-prodigo-50`}
            >
              <span className={`${kontiki.className} font-light`}>Pródigo</span>{" "}
              Mezcal
            </span>
            <span className="">y su Tradición</span>
          </h3>

          <div className="grid gap-8 rounded-2xl bg-[#ffffff] px-8 py-5 lg:grid-cols-2 lg:px-16 lg:py-14">
            {infoItems.map((item) => (
              <div className="flex items-start gap-5" key={item.icon}>
                <div className="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-prodigo-500/20 text-xl text-prodigo-600 lg:h-16 lg:w-16">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="pb-3.5 font-bold text-md md:text-xl lg:text-2xl xl:text-3xl">
                    {item.title}
                  </h3>
                  <p className="opacity-60 text-[14px] lg:text-lg lg:leading-9 xl:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-50 left-0 right-0 -z-20 h-[700px] sm:h-[500px] opacity-50">
          <Image
            className="h-full w-full object-cover"
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/6c695bbb-3fb0-4dd6-1bd2-7208e6778800/public"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </main>
  );
}
