"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const homePath = router.pathname === "/";

  return (
    <Link
      href={path}
      className={` ${
        routerPath ? homePath ? showBackground ? 'text-red-500' : 'text-white' : "text-red-500" : ""
      } font-medium cursor-pointer hover:text-red-500 transition-all mx-5  rounded-full relative flex`}
    >
      {routerPath && (
        <motion.span
          initial={{ width: 0 }}
          animate={{width: '100%'}}
          className={`absolute left-0 top-full block h-[2px] w-full bg-red-500
          }`}
        />
      )}
      {label}
    </Link>
  );
};

export default NavbarItem;
