import React from "react";
import { domainSearchTwoData } from "../data/domainSearchTwoData";

const DomainList = () => {
  return (
    <div className="relative centerContainer flex justify-center w-full">
    <ul className=" px-6  md:px-12 lg:px-[75px] absolute flex flex-wrap items-center list-none justify-between
      gap-[32px] -translate-y-16">
      {domainSearchTwoData.map(
        ({ id, img, URL, actualPrice, discountPrice }) => (
          <li
            key={id}
            className="w-full sm:w-auto bg-white px-9 py-6 space-y-1 rounded-2xl cursor-pointer border 
            hover:-translate-y-2 transition-all ease-linear hover:shadow-xl"
          >
            <img src={img} alt="" className="w-12 mx-auto pb-1" />
            <div className="flex justify-center items-center gap-[6px]">
              <h2 className="text-[17px] font-semibold">
                {discountPrice}
              </h2>
              <h5 className="bg-red-600 text-white rounded px-1 py-[1px] text-xs">
                SELL
              </h5>
            </div>
            <h1 className="text-gray-400 text-[15px] w-fit mx-auto font-semibold line-through">
              {actualPrice}
            </h1>
          </li>
        )
      )}
    </ul>
    </div>
  );
};

export default DomainList;
