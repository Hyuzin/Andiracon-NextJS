import React from "react";
import { motion } from "framer-motion";

interface TitleSectionProps {
  title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="pt-[65px]">
      <div className=" px-3 md:px-20 lg:px-60  pt-5 md:pt-7 lg:pt-10 ">
        <motion.p
          className={`underline text-[40px] md:text-[60px] font-medium decoration-red-500 `}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title} <span className="text-red-500">.</span>
        </motion.p>
        <motion.p
          className="font-normal text-neutral-700 text-xl pb-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: {delay: .1} }}
        >
          PT. Andiracon Sukses Makmur
        </motion.p>
      </div>
    </div>
  );
};

export default TitleSection;
