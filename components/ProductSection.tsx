import Image from "next/image";

type ProductSectionProps = {
  imageName?: String;
  title: String;
  hashUrl: String;
  height?: String;
  children?: React.ReactNode;
};

const ProductSection = ({
  imageName,
  title,
  hashUrl,
  children,
  height = "h-[50vw] md:h-[40vw] lg:h-[20vw]",
}: ProductSectionProps) => {
  return (
    <div id={`${hashUrl}`} className="pb-20 scroll-m-24">
      <p className="font-semibold text-4xl pb-10">{title}</p>
      <div className="text-justify text-[17px] pb-20">{children}</div>
      <p className="font-semibold pb-3 text-center">Foto Produk {title} </p>
      <div className={`overflow-hidden  ${height} `}>
        <Image
          src={`/assets/images/${imageName}`}
          width={1000}
          height={1000}
          alt={`${title}`}
          className=" w-full object-cover h-full"
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ProductSection;
