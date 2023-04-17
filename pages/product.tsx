import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Product() {
  return (
    <>
      <Head>
        <title>Produk | Andiracon</title>
      </Head>
      <Navbar />
      <HeroSection title="Produk" />
      <Footer />
    </>
  );
}
