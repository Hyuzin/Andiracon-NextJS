import React from "react";
import { montserrat } from "@/pages/_app";

interface HeroSectionProps {
  title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <div className="pt-20">
      <div className=" px-3 md:px-20 lg:px-60  pt-5 md:pt-7 lg:pt-10 ">
        <p
          className={`${montserrat.className} underline text-[40px] md:text-[60px] font-medium decoration-red-500 `}
        >
          {title} <span className="text-red-500">.</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
