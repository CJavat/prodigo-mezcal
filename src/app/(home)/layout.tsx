import { lemonMilk } from "@/config/fonts";
import "../globals.css";
import { Header } from "../../components/ui/Header";

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
      </body>
    </html>
  );
}
