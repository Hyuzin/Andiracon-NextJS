import Hero from "@/components/Hero";
import { poppins } from "../components/data/fontData";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import Content from "@/components/Content";
import { productData } from "../components/data/productData";
import { useEffect } from "react";

const Carousel = dynamic(() => import("react-multi-carousel"));
const ProductCard = dynamic(() => import("@/components/ProductCard"));

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1380 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1380, min: 1063 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1063, min: 760 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
    },
  };

  const product = productData.map((item) => (
    <ProductCard
      key={item.id}
      hash={item.hash}
      image={item.image}
      title={item.title}
      description={item.description}
      classFalse={item.classFalse}
    />
  ));

  return (
    <Content title="Beranda">
      <Hero />
      <div className="px-5 lg:px-20" id="tentang">
        <div className="lg:pb-[100px] pb-[100px] flex flex-col md:flex-row lg:flex-row items-center">
          {/* <img
          src="/assets/images/Tentang.jpg"
          alt="Tentang"
          className=" w-[100vw] md:w-[40vw] lg:w-[30vw] ml-0 lg:ml-10 pointer-events-none"
        /> */}
          <Image
            src="/assets/images/Tentang.jpg"
            width={500}
            height={500}
            alt="Tentang"
            className=" w-[100vw] md:w-[40vw] lg:w-[30vw] ml-0 lg:ml-10 pointer-events-none"
            id="about"
          />
          <div className="ml-0 md:ml-0 lg:ml-[75px] text-center md:text-left lg:text-left">
            <p
              className={` ${poppins.className} font-medium text-[25px] lg:text-[32px] mb-5`}
            >
              TENTANG <span className="text-red-500">PT. ANDIRACON</span>
            </p>
            <p className="w-[100%] md:w-[90%] lg:w-[85%] font-normal text-[18px] lg:text-[20px] text-justify mb-8">
              Perusahaan
              <span className="font-bold text-red-500"> PT. ANDIRACON</span>{" "}
              adalah salah satu produsen beton U-Ditch terkemuka di Indonesia.
              Kami memiliki pengalaman lebih dari 20 tahun dalam bidang beton
              pra cetak dan telah banyak mensupply proyek proyek baik dari
              Pemerintah Pusat, Pemerintah Daerah, dan Swasta. Kami memiliki
              fasilitas produksi yang modern dan berkualitas, serta tim
              profesional yang berkompeten dan berdedikasi.
            </p>
            <Link
              href="/about"
              className="font-semibold  transition text-white hover:bg-red-300 active:bg-red-800 bg-red-500 px-4 py-2 rounded-md"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
        <div className="text-center pb-[30vw] md:pb-[11vw] ">
          <p
            className={`font-medium text-[25px] lg:text-[32px] `}
          >
            Produk Kami
          </p>
          <div className="">
            <Carousel
              keyBoardControl={true}
              responsive={responsive}
              draggable={false}
              showDots={true}
              containerClass="py-10"
            >
              {product}
            </Carousel>
          </div>
        </div>
        <div className="lg:pb-[100px] md:px-[50px] pb-[100px] px-0 lg:px-[100px] flex flex-col md:flex-row lg:flex-row items-center">
          {/* <img
          src="/assets/images/tujuan.jpg"
          alt="Tentang"
          className=" w-[100vw] block md:hidden rounded-[30px] pointer-events-none"
        /> */}
          <Image
            src="/assets/images/tujuan.jpg"
            width={500}
            height={500}
            alt="Tentang"
            className=" w-[100vw] block md:hidden rounded-[30px] pointer-events-none"
          />
          <div className=" pr-0 lg:pr-[100px] md:pr-[50px] w-[100%] md:w-[90%] lg:w-[85%]">
            <p
              className={`${poppins.className} font-medium pt-[20px] md:pt-0 text-[25px] lg:text-[32px] mb-5 text-center md:text-right lg:text-right`}
            >
              TUJUAN <span className="text-red-500">PT. ANDIRACON</span>
            </p>
            <p className="font-normal text-[18px] lg:text-[20px] text-justify mb-8">
              Kami berkomitmen untuk memberikan produk beton U-Ditch yang
              berkualitas tinggi, sesuai standar nasional dan internasional,
              serta ramah lingkungan. Kami juga menawarkan layanan purna jual
              yang terjamin, seperti pengiriman, pemasangan, perawatan, dan
              garansi. Kami siap melayani kebutuhan beton u-ditch Anda dengan
              harga yang kompetitif dan waktu yang tepat.
            </p>
          </div>
          {/* <img
          src="/assets/images/tujuan.jpg"
          alt="Tentang"
          className=" w-[50vw] hidden md:block md:w-[30vw] lg:w-[25vw] rounded-[30px] pointer-events-none"
        /> */}
          <Image
            src="/assets/images/tujuan.jpg"
            width={500}
            height={500}
            alt="Tentang"
            className=" w-[50vw] hidden md:block md:w-[30vw] lg:w-[25vw] rounded-[30px] pointer-events-none"
          />
        </div>
      </div>
    </Content>
  );
}
