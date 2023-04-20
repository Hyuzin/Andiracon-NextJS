import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface MobileMenuProps {
  visible?: boolean;
  background?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, background }) => {
  // if(!visible) {
  //     return null;
  // }
  const router = useRouter();
  return (
    <div
      className={`bg-white absolute right-0 flex-col border-2 drop-shadow-sm flex my-3 duration-300 transition-all rounded-xl ${
        visible ? "opacity-100 top-8" : "opacity-0 pointer-events-none -top-1"
      } `}
    >
      <div className="flex flex-col gap-1 font-medium">
        <Link
          href="/"
          className={` ${
            router.pathname === "/" ? "text-red-500" : ""
          } px-16 py-3 pt-4 text-center text-black hover:underline`}
        >
          BERANDA
        </Link>
        <hr />
        <Link
          href="/about"
          className={` ${
            router.pathname === "/about" ? "text-red-500" : ""
          } px-16 py-3 pt-4 text-center text-black hover:underline`}
        >
          TENTANG
        </Link>
        <hr />
        <Link
          href="/product"
          className={` ${
            router.pathname === "/product" ? "text-red-500" : ""
          } px-16 py-3 pt-4 text-center text-black hover:underline`}
        >
          PRODUK
        </Link>
        <hr />
        <Link
          href="/contact"
          className={` ${
            router.pathname === "/contact" ? "text-red-500" : ""
          } px-16 py-3 pt-4 text-center text-black hover:underline`}
        >
          KONTAK
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
