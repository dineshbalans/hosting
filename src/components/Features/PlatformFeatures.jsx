import React from "react";
import MainContext from "../General/MainContext";
import FeatureItems from "./FeatureItems";
import { platformFeatureData } from "./data/featuresData";

const PlatformFeatures = () => {
  return (
    <section className="bg-white">
      <div className={`pddng space-y-10 centerContainer`}>
        <MainContext
          title="Hosting Platform Features"
          subTitle="These features come standard in all of our hosting plans. Dynamically extend imperatives through open-source quickly niche markets."
        />
        <FeatureItems
          style="w-full md:w-[43%] lg:w-[31%] flex-col mb-6"
          iconStyle="mx-auto scale-[1.7]"
          txtStyle="text-center"
          data={platformFeatureData}
        />
      </div>
    </section>
  );
};

export default PlatformFeatures;
