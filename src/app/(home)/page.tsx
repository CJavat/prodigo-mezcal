import { kontiki, lemonMilk } from "@/config/fonts";
import Image from "next/image";

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

      <h1 className={`${lemonMilk.className} text-5xl`}>MEZCAL</h1>
      <h1 className={`${kontiki.className} text-5xl`}>PRODIGO</h1>
    </main>
  );
}
