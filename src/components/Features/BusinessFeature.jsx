import React from "react";
import MainContext from "../General/MainContext";
import FeatureItems from "./FeatureItems";
import { businessFeatureData } from "./data/featuresData";

const BusinessFeature = () => {
  return (
    <section className="bg-white">
      <section className={`pddng space-y-10 centerContainer`}>
        <MainContext
          title="Why Choose HostIT For Reseller Hosting Business"
          tStyle="w-[60%] text-center"
          subTitle="Distinctively centered core competencies through client-centered core competencies. Enthusiastically provide access."
        />
        <FeatureItems
          style="w-full md:w-[43%] lg:w-[31%] flex-col mb-8"
          iconStyle="mx-auto scale-[1.8]"
          txtStyle="text-center"
          data={businessFeatureData}
        />
      </section>
    </section>
  );
};

export default BusinessFeature;
