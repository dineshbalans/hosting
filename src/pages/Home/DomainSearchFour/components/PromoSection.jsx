import React from "react";
import { promoSectionData } from "../data/domainSearchFourData";

const PromoSection = () => {
  return (
    <div className="relative centerContainer flex justify-center w-full bg-white py-14 md:py-0">
      <ul
        className="px-6  md:px-12 lg:px-[75px] relative md:absolute flex flex-wrap lg:flex-nowrap items-center 
        list-none justify-center lg:justify-between
      gap-[32px] md:-translate-y-20"
      >
        {promoSectionData.map(({ id, Icon, title, desc }) => (
          <li
            key={id}
            className="bg-white p-8 space-y-4 rounded-2xl cursor-pointer border text-center w-full md:w-auto
             transition-all ease-linear hover:shadow-xl md:h-52 flex flex-col items-center justify-center"
          >
            <Icon className="text-primeBlue scale-[1.6] mx-auto" />
            <div>
              <h1 className="text-lg font-medium">{title}</h1>
              <h5 className="text-[15px] text-quadra">{desc}</h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromoSection;
