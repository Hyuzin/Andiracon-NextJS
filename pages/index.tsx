import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Head from "next/head";

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
