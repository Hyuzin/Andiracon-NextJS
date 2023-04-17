import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { montserrat } from "./_app";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroSection title="Tentang kami" />
      <div className=" px-3 md:px-20 lg:px-60">
        <p className="font-normal text-neutral-700 text-xl pb-10">
          PT. Andiracon Sukses Makmur
        </p>
        <div className={`${montserrat.className} md:ml-40 lg:ml-80 py-5 `}>
          <Image
            src="/assets/Logo/Logo with text.svg"
            alt="Logo"
            width={1000}
            height={1000}
            className=" md:w-[40vw] lg:w-[30vw] pb-10 pointer-events-none"
          />
          <p className="text-justify font-medium text-[19px] lg:text-[22px] ">
            Perusahaan kami adalah salah satu produsen beton pracetak terkemuka
            di Indonesia. Kami memiliki pengalaman lebih dari 20 tahun dalam
            bidang beton pracetak dan telah melayani berbagai proyek
            infrastruktur, perumahan, industri, dan pertanian. Kami memiliki
            fasilitas produksi yang modern dan berkualitas, serta tim
            profesional yang berkompeten dan berdedikasi.
          </p>
          <div className="flex flex-row font-normal text-[17px] py-10 gap-4 tracking-wide">
            <p className="">
              Kami berkomitmen untuk memberikan produk beton pracetak yang
              berkualitas tinggi, sesuai standar nasional dan internasional,
              serta ramah lingkungan. <br />
              <br /> Kami juga menawarkan layanan purna jual yang terjamin,
              seperti pengiriman, pemasangan, perawatan, dan garansi. <br />
              <br /> Kami siap melayani kebutuhan beton pracetak Anda dengan
              harga yang kompetitif dan waktu yang tepat.
            </p>
            <p className="">
              <span className="font-medium text-red-500">PT. Andiracon </span>
              dapat menjadi mitra andal bagi pelanggan-pelanggan yang
              membutuhkan solusi-solusi beton untuk proyek-proyek konstruksi.
              <br />
              <br /> Dengan pengalaman lebih dari 20 tahun di bidang pracetak
              beton,
              <span className="font-medium text-red-500"> PT. Andiracon </span>
              siap melayani kebutuhan beton Anda dengan profesionalisme dan
              integritas.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
