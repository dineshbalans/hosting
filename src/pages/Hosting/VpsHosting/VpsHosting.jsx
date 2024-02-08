import React, { useState } from "react";
import PlatformFeatures from "../../../components/Features/PlatformFeatures";
import MnyBckGuarantee from "../../../components/General/MnyBckGuarantee";
import Review from "../../../components/Review/Review";
import FAQ from "../../../components/FAQ/FAQ";
import MainContext from "../../../components/General/MainContext";
import VpsPricePlan from "./components/VpsPricePlan";
import { vpsHostingData } from "./data/vpsHostingData";

const VpsHosting = () => {
  const [priceRange, setPriceRange] = useState(6);

  return (
    <section>
      <div className="bg-secondary py-52">
        <div className="pdng flex justify-center items-center centerContainer">
          <MainContext
            title="Managed Your VPS Servers"
            tStyle="text-white"
            subTitle="Interactively seize pandemic human capital before web-enabled systems.
            Dramatically architect web-enabled applications and distinctive e-services."
            stStyle="text-white"
          />
        </div>
      </div>
      <div className="centerContainer relative pb-[850px] sml:pb-[530px] mdl:pb-96 lg:pb-0">
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between px-6 md:px-12 lg:px-[75px] bg-transparent -translate-y-24  
       absolute w-full"
        >
          <div
            className="w-full lg:w-[70%] bg-white p-10 rounded-lg space-y-5 flex flex-col justify-center
         shadow-xl hover:-translate-y-2 transition-all ease-linear"
          >
            <input
              type="range"
              name="Slider"
              id="slider"
              min={1}
              max={12}
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              className="w-full border accent-primeBlue cursor-pointer"
            />
            <ul className="flex flex-wrap mdl:flex-nowrap gap-3">
              {vpsHostingData.map(({ id, txt, Icon, multiplier }) => (
                <li
                  key={id}
                  className="w-full sml:w-[48%] mdl:w-1/4 border text-center rounded border-dashed p-5 font-semibold text-[17px]"
                >
                  <Icon className="text-primeBlue mx-auto scale-150" />
                  <h1 className="pt-3 pb-2">{txt}</h1>
                  <h3>{`${priceRange * multiplier} GB`}</h3>
                </li>
              ))}
            </ul>
          </div>
          <div
            className=" lg:w-[28%] bg-white mt-5 lg:mt-0 p-10 space-y-4 rounded-lg
        shadow-xl hover:-translate-y-2 transition-all ease-linear"
          >
            <h2 className="font-semibold text-[17px]">Order Summary</h2>
            <h4 className="text-quadra">
              Flexible hosting platform to deploy your online projects.
            </h4>
            <h1 className="text-primeBlue font-bold text-3xl">{`$${
              20 * priceRange
            }`}</h1>
            <button className="primeBttn">Order Now</button>
          </div>
        </div>
      </div>
      <VpsPricePlan />
      <PlatformFeatures style="bg-white" />
      <MnyBckGuarantee />
      <FAQ />
      <Review />
    </section>
  );
};

export default VpsHosting;
