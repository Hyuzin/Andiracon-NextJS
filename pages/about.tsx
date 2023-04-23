import TitleSection from "@/components/TitleSection";
import Image from "next/image";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Content from "@/components/Content";

export default function About() {
  return (
    <Content title="Tentang">
      <TitleSection title="Tentang kami" />
      <motion.div
        className=" px-5 md:px-20 lg:px-60"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <div className={`md:px-20 lg:px-32 py-10`}>
          {/* <img
            src="/assets/logo/Logo with text.svg"
            alt="Logo"
            className=" md:w-[40vw] lg:w-[30vw] pb-10 pointer-events-none"
          /> */}
          <Image
            src="https://gist.githubusercontent.com/Hyuzin/ca30b4c6ac4e237dc37abd5026924da5/raw/3b137540767db35bc1dacfba1892c416c665b87d/andiracon-logo-text.svg"
            alt="Logo"
            width={500}
            height={500}
            className=" md:w-[40vw] lg:w-[30vw] pb-10 pointer-events-none"
          />
          <p className="text-justify font-medium text-[18px] lg:text-[22px] ">
            Perusahaan kami adalah salah satu produsen beton pracetak terkemuka
            di Indonesia. Kami memiliki pengalaman lebih dari 20 tahun dalam
            bidang beton pracetak dan telah melayani berbagai proyek
            infrastruktur, perumahan, industri, dan pertanian. Kami memiliki
            fasilitas produksi yang modern dan berkualitas, serta tim
            profesional yang berkompeten dan berdedikasi.
          </p>
          <div className="flex flex-col md:flex-row font-normal text-[17px] py-10 gap-4 tracking-wide">
            <p className="text-justify">
              Kami berkomitmen untuk memberikan produk beton pracetak yang
              berkualitas tinggi, sesuai standar nasional dan internasional,
              serta ramah lingkungan. <br />
              <br /> Kami juga menawarkan layanan purna jual yang terjamin,
              seperti pengiriman, pemasangan, perawatan, dan garansi. <br />
              <br /> Kami siap melayani kebutuhan beton pracetak Anda dengan
              harga yang kompetitif dan waktu yang tepat.
            </p>
            <p className="text-justify">
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
      </motion.div>
    </Content>
  );
}
