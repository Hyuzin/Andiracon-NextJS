import NavbarItem from "./Navbaritem";

import { useCallback, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";
import { poppins } from "@/components/data/fontData";
import Image from "next/image";
import dynamic from "next/dynamic";

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

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
            px-4
            md:px-20
            lg:px-40
            py-[23px]
            flex
            flex-row
            items-center
            transition
            justify-between
            duration-500
            ${showBackground ? "bg-white drop-shadow-md" : ""}
            `}
      >
        <a
          className={`font-bold text-[22px] md:text-4xl text-red-500 flex flexcol items-center`}
        >
          <Image
            src="https://gist.githubusercontent.com/Hyuzin/fdd89fd0d20eebf43c5e6e231e0cf8a3/raw/f34bb92470964a72a24085f462f3fb272966079f/andiracon-logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[30px] md:w-[40px] mr-[1px] pointer-events-none "
          />
          {/* <Image
            src="/assets/logo/Icon.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[30px] md:w-[40px] mr-[1px] pointer-events-none "
          /> */}
          <p className="hidden md:block">ndiracon</p>
        </a>
        <div
          className={`
                ${poppins.className}
                items-center
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                ${showBackground ? "text-black" : ""}
                `}
        >
          <NavbarItem label="BERANDA" path="/" />
          <NavbarItem label="TENTANG" path="/about" />
          <NavbarItem label="PRODUK" path="/product" />
          <NavbarItem label="KONTAK" path="/contact" />
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
              showBackground ? "bg-black" : 'bg-white'
            } `}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobileMenu ? "opacity-0 my-[4px]" : "my-[2px]"
            } ${
              showBackground ? "bg-black" : 'bg-white'
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showMobileMenu ? "-rotate-45 -translate-y-3 my-[4px]" : "my-[2px]"
            } ${
              showBackground ? "bg-black" : 'bg-white'
            }`}
          />
          <MobileMenu visible={showMobileMenu} background={showBackground} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
