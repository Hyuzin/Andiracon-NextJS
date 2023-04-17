import { poppins } from "@/pages/_app";
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
    <footer className=" px-[3vw] md:px-[10vw] mt-[15rem] tracking-wide">
      <div className="flex bg-white border-t-2 border-neutral-400 py-10">
        <div className="flex flex-col justify-center items-center mx-auto gap-4">
          {/* <img
            src="/assets/logo/Logo with text.svg"
            alt="Logo"
            className="w-[20vw] md:w-[10vw] "
          /> */}
          <Image
            src="/assets/logo/Logo with text.svg"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[20vw] md:w-[10vw] "
          />
          <p className="mb-5 text-neutral-600 text-[13px] w-[70%] text-center">
            Web Perusahaan PT. Andiracon Sukses Makmur dapat diakses melalui
            alamat web{" "}
            <Link href="https://www.andiraconprecast.com/" className="underline">
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
          <div className="flex flex-row gap-8 scale-150 ">
            <Link href="">
              <AiFillFacebook className="fill-blue-500" />
            </Link>
            <Link href="">
              <AiFillInstagram className="fill-red-500" />
            </Link>
            <Link href="">
              <AiFillLinkedin className="fill-blue-900" />
            </Link>
            <Link href="">
              <AiOutlineWhatsApp className="fill-green-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
