import React from "react";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import bannerBg from "./assets/img/offer-bg-3.png";
import { timerData } from "./data/offerData";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import CallToAction from "../../../components/General/CallToAction";
import DifferenceTable from "../../../components/Table/DifferenceTable";
import Review from "../../../components/Review/Review";
import ThreeTierPlans from "../../../components/Plans/ThreeTierPlans";
import BgSection from "../../../components/General/BgSection";

const Offer = () => {
  return (
    <BgSection>
      <div
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
        className="pddng bg-cover bg-center flex justify-center
        text-center text-white"
      >
        <div className="space-y-9">
          <div className="space-y-4">
            <h1 className="scale-75 md:scale-100 text-[40px] font-bold leading-tight">
              Black Friday Sale
            </h1>
            <h5 className="font-semibold text-xl">Up To</h5>
            <h2 className="text-8xl font-bold">90% OFF</h2>
          </div>
          <button
            className="bttn hover:bg-white hover:text-quadra
            transition-all ease-linear"
          >
            Get Started Now
          </button>
          <h5 className="text-lg font-semibold scale-75 md:scale-100">
            Hurry up, limited time offer is ticking down
          </h5>
          <div className="hidden md:flex gap-8 items-center ">
            <AiOutlineCaretRight className="scale-[4]" />
            {timerData.map(({ id, num, txt }) => (
              <div key={id}>
                <h2 className="text-3xl font-semibold">{num}</h2>
                <h6 className="text-cement/80 font-semibold">{txt}</h6>
              </div>
            ))}
            <AiOutlineCaretLeft className="scale-[4]" />
          </div>
        </div>
      </div>
      <ThreeTierPlans />
      <TechnicalSpec />
      <CallToAction />
      <DifferenceTable />
      <Review />
    </BgSection>
  );
};

export default Offer;
