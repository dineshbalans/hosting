import React from "react";
import BgSection from "../../../components/General/BgSection";
import InfoHeader from "../../../components/General/InfoHeader";
import Solution from "../../../components/Solution/Solution";
import CallToAction from "../../../components/General/CallToAction";
import Features from "../../../components/Features/Features";
import Review from "../../../components/Review/Review";
import MainContext from "../../../components/General/MainContext";
import ServiceTiles from "../../../components/ServiceTiles/ServiceTiles";

const Services = () => {
  return (
    <BgSection>
      <InfoHeader
        title="Services"
        desc="Credibly transform low-risk high-yield strategic theme areas through market positioning interfaces.
            Rapidiously synthesize cutting-edge bandwidth."
      />
      <div className="bg-white pddng space-y-10">
        <MainContext
          title="Why Choose Us?"
          subTitle='Completely expedite holistic e-markets without synergistic "outside the box" thinking. Synergistically enable.'
          tStyle="w-full"
          stStyle="mr-auto text-start"
        />
        <ServiceTiles />
      </div>
      <Solution  />
      <CallToAction />
      <Features  />
      <Review  />
    </BgSection>
  );
};

export default Services;
