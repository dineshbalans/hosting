import React from "react";
import wpHosting from "./assets/svg/wordpress-hosting-white.svg";
import BgSection from "../../../components/General/BgSection";
import Plans from "../../../components/Plans/Plans";
import MainContext from "../../../components/General/MainContext";
import ServiceTiles from "../../../components/ServiceTiles/ServiceTiles";
import GenTechFeatures from "../../../components/GenTechFeatures/GenTechFeatures";
import CallToAction from "../../../components/General/CallToAction";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Review from "../../../components/Review/Review";
import { IoCheckmarkOutline } from "react-icons/io5";

const WordpressHosting = () => {
  return (
    <BgSection>
      <div className="bg-secondary">
        <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
          <div className="w-full mdl:w-[60%] space-y-7">
            <MainContext
              title="We Make WordPress Easier"
              tStyle="text-white w-full"
              subTitle="Sell anything, anywhere, anytime on the world's biggest eCommerce
                platform. Up to 50% Off domain and hosting, Starting from $2.99/month."
              stStyle="text-white text-start"
              flagWidth={false}
            />
            {/* <ul className="space-y-3">
            {emailHostingData.map(({ id, title }) => (
              <li key={id} className="flex gap-3 items-center">
                <IoCheckmarkOutline />
                <span>{title}</span>
              </li>
            ))}
          </ul> */}
            <button className="whiteBttn">Set Started Now</button>
          </div>
          <div className="">
            <img src={wpHosting} alt="" className="w-80" />
          </div>
        </div>
      </div>
      <div className="bg-white">
      <div className="centerContainer pddng space-y-10">
        <MainContext
          title="Why Choose Us?"
          subTitle='Completely expedite holistic e-markets without synergistic "outside the box" thinking. Synergistically enable.'
          tStyle="w-full"
          stStyle="mr-auto text-start"
        />
        <ServiceTiles style="border" />
      </div>
      </div>
      <Plans showPlansBttn={false} />
      <GenTechFeatures style="bg-cement" />
      <CallToAction />
      <ActiveTransfer style="bg-white" />
      <Review style="bg-cement" />
    </BgSection>
  );
};

export default WordpressHosting;
