import React from "react";
import Navbar from "./Navbar";
import { kontiki, lemonMilk } from "@/config/fonts";

export const Header = () => {
  return (
    <header className="mb-10 px-3 lg:mr-16 py-5 flex justify-between items-center">
      <div className="relative">
        <p className={`${kontiki.className} uppercase text-3xl`}>
          Pródigo
          <span className={`${lemonMilk.className} text-[25px]`}> Mezcal</span>
        </p>
      </div>

      <Navbar />
    </header>
  );
};
