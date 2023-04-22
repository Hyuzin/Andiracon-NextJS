import { poppins } from "@/components/data/fontData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[180vw] md:h-[56.25vw] " id="Home">
      <motion.img
        src="https://iili.io/Hv8Yv9V.png"
        width={1200}
        height={769}
        alt="Hero"
        className="w-full object-cover h-[180vw] md:h-[56.25vw] brightness-75 pointer-events-none"
        initial={{ y:-50 }}
        animate={{ y:0, transition: {ease:'easeOut'} }}
      />
      {/* <Image src="/assets/images/Header.png" width={1000} height={1000} alt="Hero" className="w-full object-cover h-[100vw] md:h-[56.25vw] brightness-75 pointer-events-none"/> */}
      <div
        className={` ${poppins.className} absolute top-[45%] md:top-[45%] lg:top-[40%] ml-4 md:ml-20 lg:ml-40 `}
      >
        <motion.p
          className="text-red-500 font-bold h-full leading-normal text-[35px] md:text-4xl lg:text-7xl drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.3 },
          }}
        >
          PT. ANDIRACON
        </motion.p>
        <motion.p
          className="w-[90%] md:w-[60%] lg:w-[50%] font-medium lg:leading-10 text-white text-[22px] md:text-xl lg:text-3xl drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.3 },
          }}
        >
          Solusi Konstruksi Efisien dan Berkelanjutan dengan Beton Precast
          Unggulan
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
