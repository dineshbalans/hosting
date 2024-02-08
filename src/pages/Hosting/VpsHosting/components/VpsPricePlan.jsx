import React from "react";
import { paymentMethodImages } from "../../../../components/HeaderAndFooter/data/footerData";
import { VpsPricingPlanData } from "../data/vpsHostingData";
import { Progress } from "@material-tailwind/react";
import MainContext from "../../../../components/General/MainContext";

const VpsPricePlan = () => {
  return (
    <section className="bg-white">
      <section className="pddng space-y-14 centerContainer">
        <MainContext
          title="VPS Hosting Pricing Plane"
          subTitle="Uniquely restore open-source products via open-source relationships.
            Enthusiastically deliver competitive systems and client-centric."
        />
        <div className="space-y-6 hidden lg:block">
          <ul className="flex gap-[13px]">
            {VpsPricingPlanData.vpsHead.map(({ id, txt }) => (
              <li key={id} className="text-[13px] font-medium px-5">
                {txt}
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {VpsPricingPlanData.vpsBody.map(
              ({ id, vcpu, memory, power, price, sale, score }) => (
                <li
                  key={id}
                  className="bg-cement/50 p-5 flex justify-between rounded shadow-lg
                font-medium hover:scale-[1.03] hover:shadow-xl transition-all ease-linear"
                >
                  {/* VCPU */}
                  <h4 className="my-auto">{`${vcpu} vCPU`}</h4>
                  {/* MEMORY */}
                  <h4 className="my-auto">{`${memory}GB`}</h4>
                  {/* CPU POWER	 */}
                  <div className="">
                    <h5>{`${power} GHz`}</h5>
                    <h6 className="text-ternary/90 font-normal text-sm text-center">{`${vcpu} core`}</h6>
                  </div>
                  {/* STORAGE */}
                  <h4 className="my-auto">{`${memory * 10}GB`}</h4>
                  {/* 	GEEKBENCH SCORE	 */}
                  <div className="flex items-center gap-3">
                    <h6 className="text-ternary/90 font-normal">
                      {score.number}
                    </h6>
                    <Progress
                      color="blue"
                      label
                      value={score.percentage}
                      size="sm"
                      className="w-24 scale-[0.8]"
                    />
                  </div>
                  {/* BANDWIDTH	 */}
                  <h4 className="  my-auto">{`${vcpu * 1000}GB`}</h4>
                  {/* PRICE */}
                  <div>
                    <h2 className="text-primeBlue text-[24px] font-bold">
                      {`$${price} `}
                      <span className="text-[13px] text-ternary/50 font-semibold">
                        /month
                      </span>
                    </h2>
                    <h5 className="text-[14px] text-ternary/50">
                      On Sale -{" "}
                      <span
                        className={`px-[6px] py-[1px] rounded ${sale.color} text-[12px]`}
                      >{`Save ${sale.percentage}%`}</span>
                    </h5>
                  </div>
                  {/* BUTTON */}
                  <button className="primeBttn ">Order Now</button>
                </li>
              )
            )}
          </ul>
        </div>
        <ul className="flex flex-wrap justify-between gap-5 lg:hidden">
          {VpsPricingPlanData.vpsBody.map(
            ({ id, vcpu, memory, power, price, sale, score }) => (
              <li
                key={id}
                className="bg-cement/50 w-full mdl:w-[48%] border p-6 space-y-3"
              >
                <div className="flex justify-between">
                  <h6 className="w-1/3">vCPU</h6>
                  <h5 className="w-1/2">{vcpu} vCPU</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">Memory</h6>
                  <h5 className="w-1/2">{memory} GB</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">CPU Power</h6>
                  <h5 className="w-1/2">{power} GHz</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">Storage</h6>
                  <h5 className="w-1/2">{vcpu * 10} GB</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">Geekbench Score</h6>
                  <div className="flex items-center gap-3 w-1/2">
                    <h6 className="text-ternary/90 font-normal">
                      {score.number}
                    </h6>
                    <Progress
                      color="blue"
                      label
                      value={score.percentage}
                      size="sm"
                      className="w-24 scale-[0.8]"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">Bandwidth</h6>
                  <h5 className="w-1/2">{vcpu * 1000} GB</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="w-1/3">Price</h6>
                  <div className="w-1/2">
                    <h2 className="text-primeBlue text-[24px] font-bold">
                      {`$${price} `}
                      <span className="text-[13px] text-ternary/50 font-semibold">
                        /month
                      </span>
                    </h2>
                    <h5 className="text-[14px] text-ternary/50">
                      On Sale -{" "}
                      <span
                        className={`px-[6px] py-[1px] rounded ${sale.color} text-[12px]`}
                      >{`Save ${sale.percentage}%`}</span>
                    </h5>
                  </div>
                </div>
                <button className="primeBttn w-full">Order Now</button>
              </li>
            )
          )}
        </ul>
        <div className="flex gap-3 justify-center">
          {paymentMethodImages.map(({ id, image }) => (
            // Individual Payment Method Image
            <img src={image} alt="" key={id} className="w-12 object-contain" />
          ))}
        </div>
      </section>
    </section>
  );
};

export default VpsPricePlan;
