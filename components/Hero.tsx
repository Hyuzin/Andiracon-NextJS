import { poppins } from "@/pages/_app";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div className="relative h-[100vw] md:h-[56.25vw] " id="Home">
           <img src="/assets/images/Header.png"alt="Hero" className="w-full object-cover h-[100vw] md:h-[56.25vw] brightness-75 pointer-events-none"/>
           {/* <Image src="/assets/images/Header.png" width={1000} height={1000} alt="Hero" className="w-full object-cover h-[100vw] md:h-[56.25vw] brightness-75 pointer-events-none"/> */}
           <div className={` ${poppins.className} absolute top-[45%] md:top-[45%] lg:top-[40%] ml-4 md:ml-20 lg:ml-40 `}>
                <p className="text-red-500 font-bold h-full leading-normal text-[25px] md:text-4xl lg:text-7xl drop-shadow-lg">PT. ANDIRACON</p>
                <p className="w-[90%] md:w-[60%] lg:w-[50%] font-medium lg:leading-10 text-white text-[15px] md:text-xl lg:text-3xl drop-shadow-lg">Melayani Permintaan Beton Berkualitas Yang Terjamin Berstandar ISO Dengan Ketentuan Yang Sudah Diuji.</p>
           </div>
        </div>
    )
}

export default Hero;