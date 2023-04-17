import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Montserrat, Inter } from "@next/font/google";
import { useEffect } from "react";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'greek'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function App({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   const handleContextMenu = (e: any) => {
  //     e.preventDefault();
  //   }

  //   document.addEventListener('contextmenu', handleContextMenu);

  //   return() => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   }
  // }, []) 
  
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
