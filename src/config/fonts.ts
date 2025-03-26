import { Inter, Edu_AU_VIC_WA_NT_Pre } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Edu_AU_VIC_WA_NT_Pre({
  subsets: ["latin"],
  weight: ["500", "700"],
});

// Importando la fuente local
export const kontiki = localFont({
  src: "../../public/fonts/kontiki/kontiki-fine.otf",
  display: "swap",
  variable: "--font-kontiki",
});

export const lemonMilk = localFont({
  src: "../../public/fonts/lemon-milk/lemon-milk-regular.otf",
  display: "swap",
  variable: "--font-kontiki",
});
