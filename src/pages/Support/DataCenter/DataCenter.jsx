import React from "react";
import BgSection from "../../../components/General/BgSection";
import InfoHeader from "../../../components/General/InfoHeader";
import Network from "../../../components/Network/Network";
import CallToAction from "../../../components/General/CallToAction";
import Review from "../../../components/Review/Review";

const DataCenter = () => {
  return (
    <BgSection>
      <InfoHeader
        title="Network"
        desc="Intrinsicly supply extensible outsourcing before robust channels. 
      Uniquely utilize market-driven technologies before vertical."
      />
      <Network />
      <CallToAction />
      <Review />
    </BgSection>
  );
};

export default DataCenter;
