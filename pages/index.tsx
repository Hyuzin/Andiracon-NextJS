import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "next/head";

import dynamic from "next/dynamic";

const Content = dynamic(()=>import('@/components/Content'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | Andiracon</title>
      </Head>
      <Navbar />
      <Hero/>
      <div className="py-10 overflow-hidden">
        <Content/>
      </div>
      <Footer/>
    </>
  );
}
