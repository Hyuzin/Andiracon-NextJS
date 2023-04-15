import React from "react";

interface NavbarItemProps {
  label: string;
  path: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, path }) => {
  return (
    <a href={path} className="font-medium cursor-pointer hover:text-gray-300 transition mx-5">
      {label}
    </a>
  );
};

export default NavbarItem;
