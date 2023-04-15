const Content = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <img src="/images/Tentang.jpg" alt="Tentang" className=" w-[100vw] md:w-[40vw] lg:w-[30vw] ml-0 lg:ml-10 " />
        <div className="ml-0 md:ml-0 lg:ml-[75px] text-center md:text-left lg:text-left">
          <p className="font-bold  text-[25px] lg:text-[32px] mb-5">
            TENTANG <span className="text-red-500">PT. ANDIRACON</span>
          </p>
          <p className="w-[100%] md:w-[90%] lg:w-[85%] font-medium text-[15px] lg:text-[20px] text-justify mb-8">
            Perusahaan <span className="font-bold text-red-500">PT. ANDIRACON</span> adalah salah satu produsen beton U-Ditch
            terkemuka di Indonesia. Kami memiliki pengalaman lebih dari 20 tahun
            dalam bidang beton pra cetak dan telah banyak mensupply proyek
            proyek baik dari Pemerintah Pusat, Pemerintah Daerah, dan Swasta.
            Kami memiliki fasilitas produksi yang modern dan berkualitas, serta
            tim profesional yang berkompeten dan berdedikasi.
          </p>
          <a href="/Tentang" className="font-semibold text-white bg-red-500 px-4 py-2 rounded-md">Selengkapnya</a>
        </div>
      </div>
    </div>
  );
};

export default Content;
