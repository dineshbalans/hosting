import React from "react";
import bannerBg from "./assets/img/hero-bg5.jpg";
import BgSection from "../../../components/General/BgSection";
import MainContext from "../../../components/General/MainContext";
import Plans from "../../../components/Plans/Plans";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Review from "../../../components/Review/Review";
import { wooCommerceData } from "./data/wooCommerceData";
import { IoCheckmark } from "react-icons/io5";
import CallToAction from "../../../components/General/CallToAction";
import Package from "../SharedHosting/Components/Package";

const WoocommerceHosting = () => {
  return (
    <BgSection>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]">
          <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
            <div className="w-full mdl:w-[60%] space-y-7">
              <MainContext
                title="Make Selling Easier with WooCommerce"
                subTitle="Sell anything, anywhere, anytime on the world's biggest eCommerce platform.
                Up to 50% Off domain and hosting, Starting from $2.99/month."
                tStyle="text-white w-full"
                stStyle="text-white text-start"
                flagWidth={false}
              />
              <ul className={`text-[15px] space-y-2 text-white`}>
                {wooCommerceData.map(({ id, txt }) => (
                  <li className="flex items-center gap-2" key={id}>
                    <IoCheckmark className={`scale-110 `} />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
              <h5>
                Get all the essentials features{" "}
                <strong>Starting at $6.59/mo</strong>
              </h5>
            </div>
            <div
              className="rounded-lg px-12 py-8 bg-secondary/50 hover:bg-secondary/80
            flex flex-col items-center gap-4 transition-all ease-linear"
            >
              <h5 className="text-lg font-medium">Special intro offer</h5>
              <div className="flex">
                <span className="text-6xl pt-[10px]">$</span>
                <span className="text-9xl font-medium">2</span>
                <div className="flex flex-col gap-[18px]">
                  <span className="text-6xl pt-[10px]">.99</span>
                  <span>/month</span>
                </div>
              </div>
              <p className="">
                Regular Price <strong>$8.99/mo</strong>
              </p>
              <button className="primeBttn">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
      <Plans showPlansBttn={false} />
      <Package />
      <TechnicalSpec />
      <CallToAction />
      <ActiveTransfer/>
      <Review />
    </BgSection>
  );
};

export default WoocommerceHosting;
