import Image from "next/image";

type ProductSectionProps = {
  imageName: String;
  title: String;
  hashUrl: String;
  children: React.ReactNode;
};

const ProductSection = ({
  imageName,
  title,
  hashUrl,
  children,
}: ProductSectionProps) => {
  return (
    <div id={`${hashUrl}`} className="pb-20">
      <div className="overflow-hidden w-[100%] h-[50vw] md:w-[97%] md:h-[40vw] lg:w-[58vw] lg:h-[30vw] rounded-t-xl md:rounded-l-xl">
        <Image
          src={`/assets/images/${imageName}`}
          width={500}
          height={500}
          alt="u-ditch"
          className=" w-full object-cover h-full"
        />
      </div>
      <div className="md:pl-10">
        <p className="font-semibold text-[30px] rounded-b-lg md:rounded-r-lg text-white bg-red-500 px-1 mb-10">
          {title}
        </p>
      </div>
      <div className=" md:pl-10 text-justify text-[17px] ">{children}</div>
    </div>
  );
};

export default ProductSection;
