import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(()=>import('@/components/Footer'));

type ContentLayoutProps = {
  children: React.ReactNode;
  title: String;
};

export default function Content({ children, title }: ContentLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Andiracon</title>
        <meta name="description" content="Beli produk beton precast di perusahaan kami!" />
        <meta property="og:title" content="Beton Precast" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
