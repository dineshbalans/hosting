import React, { useState } from "react";
import { vpsHostingData } from "../../../Hosting/VpsHosting/data/vpsHostingData";

const SpaceSlider = () => {
  const [priceRange, setPriceRange] = useState(6);
  return (
    <div className="centerContainer relative pb-[450px] md:pb-52">
      <div
        className="flex flex-wrap lg:flex-nowrap justify-center px-6 md:px-12 lg:px-[75px] bg-transparent -translate-y-12  
       absolute w-full"
      >
        <div
          className="w-full lg:w-[70%] bg-white p-10 rounded-lg space-y-5 flex flex-col justify-center
         shadow-xl hover:-translate-y-2 transition-all ease-linear"
        >
          <input
            type="range"
            name="spaceSlider"
            id="spaceSlider"
            min={1}
            max={12}
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value)}
            className="w-full border accent-primeBlue cursor-pointer"
          />
          <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-between items-center">
            {/* <div className="flex w-[40%]  justify-between"> */}
            <div className="w-full md:w-auto text-quadra  border border-dashed p-2 flex flex-col items-center md:items-start">
              <h2 className="text-[17px]">Total Price</h2>
              <h4 className="text-3xl text-orange-600 font-medium pt-2">
                {priceRange * 1000}
                <span className="text-[15px] font-normal">INR /mo</span>
              </h4>
              <h6 className="text-[14px]">excluding VAT</h6>
            </div>
            <div className="w-full md:w-auto text-quadra border border-dashed p-2 flex flex-col items-center md:items-start">
              <h2 className="text-[17px]">Backup Space</h2>
              <h4 className="text-3xl text-ternary font-medium pt-2">
                {priceRange * 100}
                <span className="text-[15px] font-normal">GB</span>
              </h4>
              <h6 className="text-[14px]">update any time</h6>
            </div>
            {/* </div> */}
            <div className="w-full md:w-auto border border-dashed p-2 flex flex-col items-center md:items-start">
              <h2 className="text-center md:text-left">
                Place Your Order Here:
              </h2>
              <div className="mt-4 primeBttn w-fit mx-auto">
                <a
                  href="https://portal.HostIT.com/order/main/index/Hosting"
                  target="_blank"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceSlider;
