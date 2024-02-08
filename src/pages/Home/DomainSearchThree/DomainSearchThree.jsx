import React from "react";
import heroBg from "../../../assets/img/hero-bg-4.jpg";
import bannerBg from "./assets/img/hero-bg-banner.jpg";
import DomainItems from "../DomainSearchTwo/components/DomainItems";

import Plans from "../../../components/Plans/Plans";
import CallToAction from "../../../components/General/CallToAction";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Network from "../../../components/Network/Network";
import Review from "../../../components/Review/Review";
import PlatformFeatures from "../../../components/Features/PlatformFeatures";
import MainContext from "../../../components/General/MainContext";
import BgSection from "../../../components/General/BgSection";

const DomainSearchThree = () => {
  return (
    <BgSection>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="pddng bg-cover bg-center bg-no-repeat"
      >
        <div className="centerContainer">
          <div className="w-full mdl:w-[75%] mxl:w-1/2 space-y-7">
            <MainContext
              title="Unbeatable WordPress Hosting"
              subTitle="Launch a world-class mobile app for your brand. No coding required. 
            Dramatically grow customized potentialities vis-a-vis synergistic alignments."
              tStyle="text-white w-full"
              stStyle="text-start text-white"
              flagWidth={false}
            />
            <DomainItems style="text-white" iconStyle="text-white" />
            <div className="flex gap-3">
              <button
                className="bttn bg-white text-quadra hover:bg-transparent
          hover:text-white transition-all ease-linear"
              >
                Get Started Now
              </button>
              <button
                className="bttn text-white hover:bg-white hover:text-quadra
            transition-all ease-linear"
              >
                Contact With Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <Plans />
      <PlatformFeatures />
      <CallToAction />
      <ActiveTransfer />
      <Network />
      <Review />
    </BgSection>
  );
};

export default DomainSearchThree;
