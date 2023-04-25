import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function Content({
  children,
  title,
  description,
}: ContentLayoutProps) {
  const image = "/assets/images/tentang.jpg";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <meta property="title" content={`${title}`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="LibranCode" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.andiraconprecast.com/" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.andiraconprecast.com/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={`${description}`} />
        <meta property="twitter:image" content={image}></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
