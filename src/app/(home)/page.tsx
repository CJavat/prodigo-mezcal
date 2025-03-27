import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar estilos de Font Awesome
import { kontiki, lemonMilk } from "@/config/fonts";

export default function Home() {
  return (
    <main className={``}>
      <p className="text-prodigo-50 text-5xl">Pródigo 50</p>
      <p className="text-prodigo-100 text-5xl">Pródigo 100</p>
      <p className="text-prodigo-200 text-5xl">Pródigo 200</p>
      <p className="text-prodigo-300 text-5xl">Pródigo 300</p>
      <p className="text-prodigo-400 text-5xl">Pródigo 400</p>
      <p className="text-prodigo-500 text-5xl">Pródigo 500</p>
      <p className="text-prodigo-600 text-5xl">Pródigo 600</p>
      <p className="text-prodigo-700 text-5xl">Pródigo 700</p>
    </main>
  );
}
