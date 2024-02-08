import React from "react";
import InfoHeader from "../../../components/General/InfoHeader";
import Review from "../../../components/Review/Review";
import TrustedCompanies from "../../../components/TrustedCompanies/TrustedCompanies";
import bannerBg from "./assets/img/hero-bg-2.jpg";

const Reviews = () => {
  return (
    <section>
      <InfoHeader
        title="Reviews"
        desc="Efficiently evolve efficient collaboration and idea-sharing before installed
          base materials rather than customer directed leadership skills."
        bannerBg={bannerBg}
      />
      <Review haveSix />
      <TrustedCompanies />
    </section>
  );
};

export default Reviews;
