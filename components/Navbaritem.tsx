import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavbarItemProps {
  label: string;
  path: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, path }) => {
  const router = useRouter();

  return (
    <Link
      href={path}
      className={` ${
        router.pathname === path
          ? "text-red-500 bg-white py-1 px-4 rounded-full"
          : ""
      } font-medium cursor-pointer hover:text-red-500 transition-all mx-5 hover:bg-white hover:py-1 hover:px-4 rounded-full`}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
