import { poppins } from "@/components/data/fontData";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" px-[3vw] md:px-[10vw] mt-[15rem] tracking-wide">
      <p className="pb-5 text-[11px] text-gray-500 text-center">
        #pabrik Uditch Murah, #pabrik Saluran Uditch, #pabrik uditch dan
        boxculvert jabodetabek, #harga saluran uditch murah -jabodetabek,
        #produsen uditch terbesar, #pabrik uditch & boxculvert bandung, #pabrik
        spunpile - sheetpile - squarepile murah, #pabrik beton uditch, #pabrik
        uditch murah karawang, #pabrik uditch murah cirebon, #pabrik pracetak
        beton uditch, #pabrik sheetpile murah jabodetabek, #pabrik uditch dan
        boxculvert indramayu-cirebon-majalengka, #pabrik uditch-boxculvert-pipa
        rcp-spunpile-sheetpile-squarepile, #pabril terlengkap-terbesar-termurah
        uditch, #uditch murah, #harga jual uditch murah, #harga uditch termurah
        2023, #pabrik beton pracetak uditch, #pabrik precast harga nego, #pabrik
        uditch harga negotiable, #pabrik beton precast, #saluran air uditch ,
        #jual uditch termurah, #uditch dan boxculvert harga nego, #pabrik uditch
        harga terbaru, #Jual Uditch Terlengkap-Termurah, #pabrik spunpile
        termurah karawang, #pabrik spunpile-sheetpile termurah cirebon, #pabrik
        uditch dan jual uditch, #pabrik produksi uditch, #pabrik udicth
        indramayu, #pabrik uditch majalengka, #pabrik uditch brebes, #pabrik
        uditch cikampek, #pabrik uditch cianjur, #pabrik uditch bogor, #pabrik
        uditch dan boxculvert sukabumi, #pabrik uditch sumedang, #pabrik precast
        jabodetabek, #pabrik andiracon precast, #pabrik aneka precast termurah,
        #pabrik murah uditch dan boxculvert, #Produsen Uditch Andiracon -
        Produsen Udicth Termurah, #Saluran Air Uditch Murah, #Uditch Berkualitas
        - Harga Murah, #Uditch Pracetak - UDitch Andiracon, #Harga Langsung
        Pabrik uditch murah, #Harga Uditch dan Spesifikasi Uditch, #Supplier
        Uditch - Harga Jual Uditch 2023, #Uditch Drainase Saluran air, #Uditch
        Termurah-Terlengkap-Gratis Ongkir, #Uditch-UDitch-UDITCH Murah, #Uditch
        Depok, Sawangan, Cimanggis, Cinere, #Pabrik Uditch Bandung, #Pabrik
        Boxculvert Bandung, #Produsen Uditch Bandung, #Uditch Precast Bandung
        Termurah, #Uditch Harga Flexible
      </p>
      <div className="flex bg-white border-t-2 border-neutral-400 py-10">
        <div className="flex flex-col justify-center items-center mx-auto gap-4">
          {/* <img
            src="/assets/logo/Logo with text.svg"
            alt="Logo"
            className="w-[20vw] md:w-[10vw] "
          /> */}
          {/* <Image
            src="https://gist.githubusercontent.com/Hyuzin/ca30b4c6ac4e237dc37abd5026924da5/raw/3b137540767db35bc1dacfba1892c416c665b87d/andiracon-logo-text.svg"
            alt="Logo"
            width={100}
            height={100}
            className="w-[20vw] md:w-[10vw] "
          /> */}
          <div className="flex flex-row items-center pointer-events-none">
            <Image
              src="https://iili.io/H8P8Z5x.png"
              alt="logo"
              width={100}
              height={100}
              className="w-[10vw] md:w-[3vw]"
            />
            <p
              className={`${poppins.className} font-bold text-2xl text-red-500`}
            >
              Andiracon
            </p>
          </div>

          <p className="mb-5 text-neutral-600 text-[13px] w-[70%] text-center">
            Web Perusahaan PT. Andiracon Sukses Makmur dapat diakses melalui
            alamat web{" "}
            <Link
              href="https://www.andiraconprecast.com/"
              className="underline"
            >
              https://www.andiraconprecast.com/
            </Link>
          </p>
          <div
            className={` ${poppins.className} text-neutral-600 flex flex-row gap-10 md:gap-20 text-[13px] mb-5`}
          >
            <Link
              href="/"
              className="transition duration-200 hover:text-red-500"
            >
              <p>Beranda</p>
            </Link>
            <Link
              href="/about"
              className="transition duration-200 hover:text-red-500"
            >
              <p>Tentang</p>
            </Link>
            <Link
              href="/product"
              className="transition duration-200 hover:text-red-500"
            >
              <p>Produk</p>
            </Link>
            <Link
              href="/contact"
              className="transition duration-200 hover:text-red-500"
            >
              <p>Kontak</p>
            </Link>
          </div>
          <div className="flex flex-row gap-8">
            <Link href="">
              <AiFillFacebook className="fill-blue-500 scale-150" />
            </Link>
            <Link href="">
              <AiFillInstagram className="fill-red-500 scale-150" />
            </Link>
            <Link href="">
              <AiFillLinkedin className="fill-blue-900 scale-150" />
            </Link>
            <Link href="">
              <AiOutlineWhatsApp className="fill-green-600 scale-150" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
