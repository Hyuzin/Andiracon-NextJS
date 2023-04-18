import { useState, useCallback, useEffect, useRef } from "react";
import { BiChevronUpCircle } from "react-icons/bi";

interface productCardProps {
  image: String;
  title: String;
  description: String;
  classFalse: String;
}

const ProductCard: React.FC<productCardProps> = ({image, title, description, classFalse}) => {

  const [clicked, setClicked] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const toggleClicked = useCallback(() => {
    setClicked((current) => !current)
  }, []);

  useEffect(() => {
    if(!clicked) return;

    const handler = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    }

    window.addEventListener('mousedown', handler)

    return() => window.removeEventListener('mousedown', handler)
  }, [clicked])

  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/10 h-[300px] w-[300px] mx-auto rounded-lg" onClick={toggleClicked} ref={cardRef} >
      <div className="h-[300px] w-[300px] ">
        <img
          src={`/assets/images/${image}.jpg`}
          alt="product"
          className={`${clicked ? 'rotate-3 scale-125 blur-[2px]' : ''} h-full w-full object-cover transition-transform duration-500 rounded-lg group-hover:rotate-3 group-hover:scale-125 group-hover:blur-[2px] pointer-events-none `}
        />
      </div>
      <div className={`${clicked ? 'bg-black/40 ' : ''} absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 bg-black/0 group-hover:bg-black/40 transition duration-500`}></div>
      <div className={`${clicked ? 'translate-y-0' : classFalse} absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 `}>
        <BiChevronUpCircle className={`${clicked ? 'rotate-180' : ''} fill-white transform-all group-hover:rotate-180 w-full h-[20px] transition`}/>
        <h1 className="font-dmserif text-xl font-bold text-white mt-1">{title}</h1>
        <p className={`${clicked ? 'opacity-100' : ''} mb-3 text-[15px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
          {description}
        </p>
        <button className="rounded-lg bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
