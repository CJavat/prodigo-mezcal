import localFont from "next/font/local";

// Importando la fuente local
export const kontiki = localFont({
  src: "../../public/fonts/kontiki/kontiki-fine.otf",
  display: "swap",
  variable: "--font-kontiki",
});

export const lemonMilk = localFont({
  src: "../../public/fonts/lemon-milk/lemon-milk-ultra-light.otf",
  display: "swap",
  variable: "--font-kontiki",
});
