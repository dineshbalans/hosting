import React from "react";
import dataCenter from "./assets/svg/data-center.svg";

import BSearch from "../../../components/BSearch/BSearch";
import MainContext from "../../../components/General/MainContext";
import TSolution from "../../../components/Solution/TSolution";
import CHelp from "../../../components/General/CHelp";
import Plans from "../../../components/Plans/Plans";
import MnyBckGuarantee from "../../../components/General/MnyBckGuarantee";
import FAQ from "../../../components/FAQ/FAQ";
import Review from "../../../components/Review/Review";
import Network from "../../../components/Network/Network";
import TFeatures from "../../../components/Features/TFeatures";
import TestimoRev from "../../../components/General/TestimoRev";

const DomainSearchOne = () => {
  return (
    <section className="2xl:container 2xl:mx-auto">
      <div className="pdng bg-white text-quadra flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 
        justify-center items-center">
        <div className="w-full lg:w-1/2 py-16 lg:py-[200px] space-y-6">
          <MainContext
            title="For Unique Domain Search!"
            subTitle="Searching for that perfect domain? Progressively benchmark turnkey innovation after quality channels."
            tStyle="w-full"
            stStyle="w-full text-start"
            flagWidth={false}
          />
          {/* Search Domain */}
          <BSearch style="space-y-5 w-[90%]" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <img src={dataCenter} alt="" className="w-[450px]" />
        </div>
      </div>
      <TSolution />
      <TFeatures />
      <CHelp />
      <Plans />
      <MnyBckGuarantee />
      <FAQ />
      <Review />
      <Network />
      <TestimoRev />
    </section>
  );
};

export default DomainSearchOne;
