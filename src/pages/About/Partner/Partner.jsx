import React from "react";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import InfoHeader from "../../../components/General/InfoHeader";
import BgSection from "../../../components/General/BgSection";
import CallToAction from "../../../components/General/CallToAction";
import Review from "../../../components/Review/Review";

const Partner = () => {
  return (
    <BgSection>
      <InfoHeader
        title="Partner"
        desc="Enthusiastically provide access to multidisciplinary 
        communities and reliable quality vectors. Globally administrate robust."
      />
      <TrustedCompanies />
      <CallToAction />
      <Review />
    </BgSection>
  );
};

export default Partner;
