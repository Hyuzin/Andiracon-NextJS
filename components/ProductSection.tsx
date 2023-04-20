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
      <div className="overflow-hidden h-[50vw] md:h-[40vw] lg:h-[30vw] rounded-t-xl md:rounded-l-xl md:pr-10">
        <Image
          src={`/assets/images/${imageName}`}
          width={500}
          height={500}
          alt="u-ditch"
          className=" w-full object-cover h-full rounded-t-xl"
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
