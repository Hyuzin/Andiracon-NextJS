import NavbarItem from "./Navbaritem";

import { BsChevronDown } from "react-icons/bs";

import MobileMenu from "./MobileMenu";
import { useCallback, useEffect, useRef, useState } from "react";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

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

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
            px-4
            md:px-20
            lg:px-40
            py-6
            flex
            flex-row
            items-center
            transition
            justify-between
            duration-500
            drop-shadow-md
            rounded-b-[10px]
            ${showBackground ? "bg-white" : ""}
            `}
      >
        <a className="font-bold text-[22px] md:text-4xl text-red-500">ANDIRACON</a>
        <div
          className={`
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                ${showBackground ? "text-black" : "text-white"}
                `}
        >
          <NavbarItem label="BERANDA" path="" />
          <NavbarItem label="TENTANG" path=""/>
          <NavbarItem label="PRODUK" path=""/>
          <NavbarItem label="KONTAK" path=""/>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative py-2 px-3 rounded bg-white drop-shadow-sm"
        >
          <BsChevronDown
            className={`text-black transition stroke-2 ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
