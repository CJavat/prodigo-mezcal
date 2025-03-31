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

  const itemsCard = [
    {
      src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f7a1b681-ead2-4b82-8f02-607d57906700/publicContain",
      alt: "Cuarto donde se hace el agave",
      title: "Mezcal Joven",
      description:
        "Un mezcal vibrante y fresco, perfecto para cócteles o beber solo, capturando el espíritu de nuestra tierra.",
    },
    {
      src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/3cbaf910-7799-4e26-878e-a32bd924e100/public",
      alt: "Caballito de mezcal, con toronja encima del vaso",
      title: "Mezcal Reposado",
      description:
        "Envejecido a la perfección, este mezcal ofrece un acabado suave y sabores complejos, ideal para cualquier celebración.",
    },
    {
      src: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/28aeafc1-d978-477c-7c3f-918e9a44a300/public",
      alt: "Botella de Mezcal Pródigo sirviendole el mezcal a un vaso de virdrio",
      title: "Mezcal Añejo",
      description:
        "Rico y sedoso, este mezcal añejado revela sabores profundos que cuentan la historia de la tradición de nuestra familia.",
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
            className="absolute right-0 -top-32 -z-10 hidden h-[750px] w-[750px] rounded-full rounded-tr-none object-cover object-right-top lg:block"
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

          <div className="grid gap-8 rounded-2xl bg-white px-8 py-5 lg:grid-cols-2 lg:px-16 lg:py-14">
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

      <section className="mx-auto flex max-w-[1220px] flex-col gap-9 overflow-hidden px-6 pb-36 pt-16 md:flex-row md:gap-6 code-section md:mt-30 lg:mt-48 xl:mt-56">
        <div className="md:w-3/5 lg:w-1/2">
          <h1 className="pb-4 text-2xl font-bold lg:pb-14 lg:text-4xl xl:text-5xl">
            Descubre el Mejor Mezcal con Pródigo Mezcal
          </h1>
          <p className="mb-8 max-w-xl text-md opacity-60 lg:text-xl xl:text-2xl">
            Sumérgete en las ricas tradiciones de México con cada sorbo de
            nuestro mezcal meticulosamente elaborado.
          </p>
          <div className="mb-8 pl-8 text-center lg:text-left">
            <ul>
              <li className="mb-4 flex flex-row">
                <i
                  className="fa fa-check mr-4 mt-1 text-prodigo-500"
                  aria-hidden="true"
                ></i>
                <span className="text-md opacity-60 lg:text-xl xl:text-2xl">
                  Calidad Impulsada por la Herencia - Cada botella refleja la
                  maestría y legado de la familia Martínez, garantizando una
                  conexión con nuestras raíces.
                </span>
              </li>
              <li className="mb-4 flex flex-row">
                <i
                  className="fa fa-check mr-4 mt-1 text-prodigo-500"
                  aria-hidden="true"
                ></i>
                <span className="text-md opacity-60 lg:text-xl xl:text-2xl">
                  Sabores Auténticos - Descubre un viaje de sabores que captura
                  la esencia de las diversas variedades de agave cultivadas en
                  el corazón de México.
                </span>
              </li>
              <li className="mb-4 flex flex-row">
                <i className="fa fa-check mr-4 mt-1 text-prodigo-500"></i>
                <span className="text-md opacity-60 lg:text-xl xl:text-2xl">
                  Enfoque en la Comunidad - Únete a nosotros para apoyar las
                  tradiciones locales y prácticas sostenibles que enriquecen
                  nuestras comunidades.
                </span>
              </li>
            </ul>
          </div>
          <p className="max-w-xl text-md opacity-60 lg:text-xl xl:text-2xl">
            Nuestro compromiso va más allá del mezcal; nos esforzamos por nutrir
            la cultura y la herencia que hacen que nuestros espíritus sean
            verdaderamente excepcionales.
          </p>
        </div>
        <div className="relative order-first md:order-last md:w-2/5 lg:w-1/2">
          <div className="relative z-20 mx-auto h-96 w-full rounded-xl border-4 border-white lg:h-[490px] lg:w-[450px]">
            <Image
              className="relative z-10 h-full w-full rounded-xl object-cover"
              src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/05036698-de80-45ab-47fc-06d24e8f3800/public"
              alt="Imagen de un agave"
              width={1000}
              height={1000}
            />
            <p className="absolute bottom-9 left-9 z-20 text-2xl font-semibold text-white lg:text-4xl xl:text-5xl">
              Celebra la Tradición, Bebe con Propósito
            </p>
          </div>
          <div className="absolute left-0 top-10 z-0 h-96 w-96 rounded-full bg-prodigo-500 blur-3xl md:top-0 md:h-[600px] md:w-[600px]"></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1220px] px-6 pb-16 code-section">
        <div className="items-center justify-between gap-10 pb-12 md:flex">
          <h1 className="max-w-md pb-4 text-3xl font-semibold [font-family:var(--font-family-heading)] md:pb-0 lg:text-4xl xl:text-5xl">
            Explora Nuestra Colección de Mezcal de Firma
          </h1>
          <p className="max-w-xl text-lg opacity-60 lg:text-xl xl:text-2xl">
            Disfruta de los sabores auténticos de nuestros mezcales artesanales,
            cada uno un testimonio de la rica herencia de la familia Martínez.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {itemsCard.map((item) => (
            <div key={item.src} className="rounded-xl bg-gray-100 p-4">
              <img
                className="h-40 w-full rounded-xl object-cover lg:h-52"
                src={item.src}
                alt={item.alt}
                width={1000}
                height={1000}
              />
              <div className="-mt-8 ml-auto mr-5 flex justify-end">
                <div className="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-prodigo-50 text-2xl text-prodigo-500 lg:h-16 lg:w-16">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <h3 className="pb-3 text-2xl font-medium lg:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-[260px] leading-9 opacity-60 lg:text-lg xl:text-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative code-section">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-16 lg:px-24">
          <h3 className="pb-8 text-center text-2xl font-semibold lg:text-4xl xl:text-5xl">
            Descubre el auténtico sabor del mezcal mexicano con nuestra oferta
            exclusiva.
          </h3>
          <button className="rounded-full bg-prodigo-700 px-5 py-2 text-lg font-bold text-prodigo-50 transition ease-linear lg:py-5 lg:text-md hover:bg-prodigo-50 hover:text-prodigo-700">
            <span>Explora Nuestros Mezcales</span>
          </button>
        </div>
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            className="h-full w-full object-cover"
            src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/40543d96-ae15-406f-f662-9ff578c65100/publicContain"
            alt="Muchos agaves"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="relative py-20 lg:py-24 code-section">
        <div className="mx-auto max-w-[1220px] px-6">
          <div className="mx-auto flex max-w-sm flex-col items-center lg:mx-0 lg:max-w-lg">
            <h2 className="pb-5 text-center text-2xl font-bold lg:pb-7 lg:text-left md:text-4xl">
              Testimonios de Clientes Apasionados de Pródigo Mezcal
            </h2>
            <p className="border-b-2 border-black pb-7 text-center text-md opacity-60 lg:text-left md:text-xl xl:leading-10">
              “Cada sorbo de Pródigo Mezcal me transporta a los campos de agave
              de México. Puedo sentir la tradición y el cariño de la familia
              Martínez en cada botella.”
            </p>
            <h3 className="pt-7 text-center text-xl font-bold lg:text-left md:text-2xl">
              <span>Isabella Torres</span>
              <span className="px-2">-</span>
              <span>Experta en Mezcal</span>
            </h3>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden lg:hidden">
          <Image
            className="-ml-24 min-w-[540px] shrink-0 sm:mx-auto sm:ml-auto"
            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template9/graphic-mobile.svg"
            alt=""
            width={100}
            height={100}
          />
          <div className="absolute left-20 top-4 md:left-80">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
              src="https://media.gettyimages.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=F5vG2xwUEubSLCS3NA48cDu9ZnM2_1zraK7gkhGhrCM="
              alt="Cliente 1"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg"></div>
          </div>
          <div className="absolute right-8 top-6 md:right-52">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
              src="https://media.gettyimages.com/id/1331257339/photo/portrait-of-happy-mature-man-wearing-spectacles-and-looking-at-camera-indoor.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=p6YIIeKxIp6pmj7Bzo6wqxQIwh33hrGfy8eaFgmgOLw="
              alt="Cliente 2"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg"></div>
          </div>
          <div className="absolute bottom-6 right-12 md:right-64">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover"
              src="https://media.gettyimages.com/id/1011792072/photo/smiling-young-mixed-race-businesswoman-looking-away.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=Hvs3sUdqeC9wIYFvDXu9dBerVSzQCwU0VkRyv38eQ6I="
              alt="Cliente 3"
              width={100}
              height={100}
            />
            <div className="primary-opacity-[20] absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg"></div>
          </div>
          <div className="absolute left-1/2 top-28 flex -translate-x-1/2 items-center gap-2">
            <p className="text-3xl font-semibold">20K</p>
            <p className="text-xl font-medium opacity-50">
              Clientes Satisfechos
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image
            className="absolute right-0 top-0 z-0 w-[500px] xl:w-auto"
            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template9/graphic.svg"
            alt="Circulo"
            width={100}
            height={100}
          />
          <div className="absolute right-20 top-10 xl:right-60">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover xl:h-28 xl:w-28"
              src="https://media.gettyimages.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=qDZmy974AT6vLas3aCSey0G-IC62MBs-HEBYL7ZG50M="
              alt="Cliente 1"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg xl:h-32 xl:w-32"></div>
          </div>
          <div className="absolute right-96 top-44 xl:right-[550px]">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-white object-cover xl:h-28 xl:w-28"
              src="https://media.gettyimages.com/id/1326426267/photo/half-length-shot-of-positive-attractive-female-model-with-afro-haircut-feels-good-uses.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=2E90Qvp1oy9yYfoGGretLMqFPnSlfya1ZFqE2dM-FO8="
              alt="Cliente 2"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg xl:h-32 xl:w-32"></div>
          </div>
          <div className="absolute bottom-10 right-14 xl:bottom-0 xl:right-40">
            <Image
              className="relative z-10 h-16 w-16 rounded-full border-4 border-prodigo-700 object-cover xl:h-28 xl:w-28"
              src="https://media.gettyimages.com/id/965523228/photo/young-long-haired-smiling-woman-in-white-shirt.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=uleuSll6o7iOMMzjSvp7IEwAIssXASH3VtOSygD41Zw="
              alt="Cliente 3"
              width={100}
              height={100}
            />
            <div className="absolute inset-0 z-0 h-20 w-20 rounded-full bg-prodigo-100 blur-lg xl:h-32 xl:w-32"></div>
          </div>
          <div className="absolute right-20 top-40 flex rotate-6 items-center gap-2 lg:top-52 xl:right-28 xl:top-60 xl:block">
            <h1 className="text-3xl font-semibold lg:text-5xl xl:text-7xl">
              20K
            </h1>
            <p className="text-xl font-medium opacity-50 lg:text-2xl xl:text-3xl">
              Clientes Satisfechos
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
