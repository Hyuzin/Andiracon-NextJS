import NavbarItem from "./Navbaritem";

import { useCallback, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import { poppins } from "@/components/data/fontData";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const MobileMenu = dynamic(() => import("./MobileMenu"));

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  // DropDown Menu Event
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("mousedown", clickHandler);

    return () => {
      window.removeEventListener("mousedown", clickHandler);
    };
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const genericHamburgerLine = `h-[4px] w-5 rounded-full transition-all ease transform duration-300`;

  const router = useRouter();

  const homeRoute = router.pathname === "/";

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
            px-4
            md:px-20
            lg:px-40
            py-[15px]
            flex
            flex-row
            items-center
            transition
            justify-between
            duration-500
            ${showBackground ? "bg-white" : homeRoute ? "" : "bg-white"}
            `}
      >
        <Link
          className={`font-bold text-red-500 text-[22px] md:text-3xl flex flex-row items-center`}
          href="/"
        >
          {/* <Image
            src="https://gist.githubusercontent.com/Hyuzin/fdd89fd0d20eebf43c5e6e231e0cf8a3/raw/f34bb92470964a72a24085f462f3fb272966079f/andiracon-logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[30px] md:w-[40px] mr-[1px] pointer-events-none "
          /> */}
          <Image
            src="https://iili.io/H8P8Z5x.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[50px] pointer-events-none "
          />
          {/* <Image
            src="/assets/logo/Icon.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[30px] md:w-[40px] mr-[1px] pointer-events-none "
          /> */}
          <p className={`${poppins.className} hidden md:block `}>Andiracon</p>
        </Link>
        <div
          className={`
                ${poppins.className}
                items-center
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                ${
                  showBackground
                    ? "text-black"
                    : homeRoute
                    ? "text-white"
                    : "text-black"
                }
                `}
        >
          <NavbarItem label="Beranda" path="/" />
          <NavbarItem label="Tentang" path="/about" />
          <NavbarItem label="Produk" path="/product" />
          <NavbarItem label="Kontak" path="/contact" />
        </div>
        <div
          ref={menuRef}
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col cursor-pointer relative transition-all drop-shadow-sm"
        >
          <div
            className={`${genericHamburgerLine} ${
              showMobileMenu ? "rotate-45 translate-y-3 my-[4px]" : "my-[2px]"
            } ${
              showBackground ? "bg-black" : homeRoute ? "bg-white" : "bg-black"
            } `}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobileMenu ? "opacity-0 my-[4px]" : "my-[2px]"
            } ${
              showBackground ? "bg-black" : homeRoute ? "bg-white" : "bg-black"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobileMenu ? "-rotate-45 -translate-y-3 my-[4px]" : "my-[2px]"
            } ${
              showBackground ? "bg-black" : homeRoute ? "bg-white" : "bg-black"
            }`}
          />
          <MobileMenu visible={showMobileMenu} background={showBackground} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
