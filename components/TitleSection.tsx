import React from "react";

interface TitleSectionProps {
  title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="pt-[65px]">
      <div className=" px-3 md:px-20 lg:px-60  pt-5 md:pt-7 lg:pt-10 ">
        <p
          className={`underline text-[40px] md:text-[60px] font-medium decoration-red-500 `}
        >
          {title} <span className="text-red-500">.</span>
        </p>
        <p className="font-normal text-neutral-700 text-xl pb-5">
          PT. Andiracon Sukses Makmur
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
