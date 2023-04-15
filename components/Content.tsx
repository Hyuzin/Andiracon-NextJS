import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const Content = () => {
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
  return (
    <div className="px-5 lg:px-20" id="tentang">
      <div className="lg:pb-[100px] pb-[100px] flex flex-col md:flex-row lg:flex-row items-center">
        <img
          src="/images/Tentang.jpg"
          alt="Tentang"
          className=" w-[100vw] md:w-[40vw] lg:w-[30vw] ml-0 lg:ml-10 "
        />
        <div className="ml-0 md:ml-0 lg:ml-[75px] text-center md:text-left lg:text-left">
          <p className="font-bold  text-[25px] lg:text-[32px] mb-5">
            TENTANG <span className="text-red-500">PT. ANDIRACON</span>
          </p>
          <p className="w-[100%] md:w-[90%] lg:w-[85%] font-medium text-[15px] lg:text-[20px] text-justify mb-8">
            Perusahaan{" "}
            <span className="font-bold text-red-500">PT. ANDIRACON</span> adalah
            salah satu produsen beton U-Ditch terkemuka di Indonesia. Kami
            memiliki pengalaman lebih dari 20 tahun dalam bidang beton pra cetak
            dan telah banyak mensupply proyek proyek baik dari Pemerintah Pusat,
            Pemerintah Daerah, dan Swasta. Kami memiliki fasilitas produksi yang
            modern dan berkualitas, serta tim profesional yang berkompeten dan
            berdedikasi.
          </p>
          <a
            href="/Tentang"
            className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md"
          >
            Selengkapnya
          </a>
        </div>
      </div>
      <div className="text-center pb-[100px] ">
        <p className="font-medium text-[25px] lg:text-[32px] ">Produk Kami</p>
        <div className="">
          <Carousel
            keyBoardControl={true}
            responsive={responsive}
            draggable={false}
            itemClass="drop-shadow-lg"
            showDots={true}
            containerClass="py-10"
          >
            <ProductCard
              image="u-ditch"
              title="U Ditch"
              description="Beton U Ditch adalah salah satu produk beton pra cetak yang 
            berbentuk huruf Udan digunakan untuk saluran air."
              classFalse="translate-y-[60%]"
            />
            <ProductCard
              image="box-culvert"
              title="Box Culvert"
              description="Box Culvert adalah salah satu jenis saluran air yang 
            terbuat dari beton bertulang dan berbentuk persegi panjang. "
              classFalse="translate-y-[60%]"
            />
            <ProductCard
              image="cover-uditch"
              title="Cover U Ditch"
              description="Cover U Ditch adalah produk beton pracetak 
            yang digunakan untuk menutup saluran u ditch."
              classFalse="translate-y-[60%]"
            />
            <ProductCard
              image="sheet-pile"
              title="Sheet Pile"
              description="Sheet Pile adalah material konstruksi yang berbentuk lembaran tipis dan panjang yang digunakan untuk membuat dinding penahan tanah atau air."
              classFalse="translate-y-[66%] "
            />
            <ProductCard
              image="square-pile"
              title="Square Pile"
              description="Square Piles adalah salah satu jenis tiang pancang yang digunakan untuk mendukung struktur bangunan di atas tanah yang tidak stabil atau lemah"
              classFalse="translate-y-[66%]"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Content;
