import React from "react";
import { popularDomainData } from "./data/domainData";
import MainContext from "../General/MainContext";

const PopularDomain = () => {
  return (
    <section className="bg-white">
    <div className="pddng centerContainer space-y-12">
      <MainContext
        title="Popular Top Level Domains Fit For You"
        subTitle="Assertively benchmark bricks-and-clicks opportunities and process-centric supply chains. Credibly deliver extensible growth strategies."
      />
      <ul className="flex flex-wrap  justify-between gap-[10px] xl:gap-7">
        {popularDomainData.map(
          ({ id, img, isPopular, desc, actualPrice, discountPrice }) => (
            <li
              key={id}
              className="w-full mxl:w-[45.5%] lg:w-[31.5%] xl:w-[30.5%] bg-white p-10 space-y-5 shadow-shadowOne border rounded mb-3"
            >
              <div className="flex justify-between items-center">
                <img src={img} alt="" />
                {isPopular && (
                  <div className="redTile px-2 rounded">Most Popular</div>
                )}
              </div>
              <h5 className="leading-7">{desc}</h5>
              <div className="flex gap-2 items-baseline">
                <h6 className="text-gray-400 font-medium line-through">
                  {actualPrice}
                </h6>
                <h6 className="text-xl font-semibold">{discountPrice}</h6>
              </div>
              <div className="flex flex-wrap xl:flex-nowrap gap-3 justify-center lg:justify-start">
                <button className="primeBttn">Register</button>
                <button className="primeWhiteBttn">Transfer</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
    </section>
  );
};

export default PopularDomain;
