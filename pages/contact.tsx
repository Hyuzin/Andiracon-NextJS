import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Kontak | Andiracon</title>
      </Head>
      <Navbar />
      <HeroSection title="Kontak" />
      <Footer />
    </>
  );
}
