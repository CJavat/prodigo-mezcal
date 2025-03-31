import { Header } from "../../components/ui/Header";
import { Footer } from "@/components";

import { lemonMilk } from "@/config/fonts";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lemonMilk.className}`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
