import React from "react";
import bannerBg from "./assets/img/hero-bg4.jpg";
import BgSection from "../../../components/General/BgSection";
import MainContext from "../../../components/General/MainContext";
import DomainItems from "../../Home/DomainSearchTwo/components/DomainItems";
import Plans from "../../../components/Plans/Plans";
import Package from "../SharedHosting/Components/Package";
import TFeatures from "../../../components/Features/TFeatures";
import CallToAction from "../../../components/General/CallToAction";
import Review from "../../../components/Review/Review";

const SharedWpHosting = () => {
  return (
    <BgSection>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]">
          <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
            <div className="w-full mdl:w-1/2 space-y-5">
              <MainContext
                title="Shared WordPress Hosting"
                subTitle="Build and grow the perfect WordPress website with WooCommerce Pro."
                tStyle="text-white w-full"
                stStyle="text-white text-start"
                flagWidth={false}
              />
              <DomainItems iconStyle="text-white" style="text-white" />
              <h5>
                Get all the essentials features{" "}
                <strong>Starting at $2.59/mo</strong>
              </h5>
            </div>
            <div
              className="rounded-lg px-12 py-8 bg-secondary/50 hover:bg-secondary/80
            flex flex-col items-center gap-4 transition-all ease-linear"
            >
              <h5 className="text-lg font-medium">Special intro offer</h5>
              <div className="flex">
                <span className="text-6xl pt-[10px]">$</span>
                <span className="text-9xl font-medium">0</span>
                <div className="flex flex-col gap-[18px]">
                  <span className="text-6xl pt-[10px]">.99</span>
                  <span>/month</span>
                </div>
              </div>
              <p className="">
                Regular Price <strong>$7.99/mo</strong>
              </p>
              <button className="primeBttn">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
      <Plans showPlansBttn={false} />
      <Package style="bg-secondary" txtColor="text-white" />
      <TFeatures style="bg-white" />
      <CallToAction />
      <Review style="bg-cement" />
    </BgSection>
  );
};

export default SharedWpHosting;
