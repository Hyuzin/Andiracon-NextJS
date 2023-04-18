import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import { inter } from "../components/data/fontData";

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
      <Head>
        <link rel="shortcut icon" href="/headicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
