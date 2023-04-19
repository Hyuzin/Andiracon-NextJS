import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

interface NavbarItemProps {
  label: string;
  path: string;
}

const TOP_OFFSET = 66;

const NavbarItem: React.FC<NavbarItemProps> = ({ label, path }) => {
  const router = useRouter();

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

  const routerPath = router.pathname === path;
  const homePath = router.pathname === '/';

  return (
    <Link
      href={path}
      className={` ${
        routerPath
        ? 'text-red-500' : 'text-black'
          // ? showBackground
          //   ? "text-red-500 "
          //   : homePath ? "text-red-500 bg-white py-1 px-4 rounded-full" : 'text-red-500'
          // : ""
      } font-medium cursor-pointer hover:text-red-500 transition-all mx-5  rounded-full`}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
