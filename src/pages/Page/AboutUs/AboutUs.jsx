import React from "react";
import bannerBg from "./assets/img/hero-14.jpg";
import BgSection from "../../../components/General/BgSection";
import InfoHeader from "../../../components/General/InfoHeader";
import Network from "../../../components/Network/Network";
import CallToAction from "../../../components/General/CallToAction";
import Review from "../../../components/Review/Review";
import Features from "../../../components/Features/Features";
import TFeatures from "../../../components/Features/TFeatures";
import ProfessionalTeam from "../../../components/ProfessionalTeam/ProfessionalTeam";

const AboutUs = () => {
  return (
    <BgSection>
      <InfoHeader
        title="About Us"
        desc="Compellingly conceptualize ubiquitous methodologies and progressive total linkage.
            Credibly reconceptualize enabled models after open-source applications."
        bannerBg={bannerBg}
      />
      <TFeatures />
      <Network />
      <CallToAction />
      <Features />
      <ProfessionalTeam />
      <Review />
    </BgSection>
  );
};

export default AboutUs;
