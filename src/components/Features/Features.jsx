import React from "react";
import { featuresData } from "./data/featuresData";
import MainContext from "../General/MainContext";
import FeatureItems from "./FeatureItems";

const Features = () => {
  return (
    <section className="bg-white">
      <div className={`pddng space-y-16  centerContainer`}>
        <MainContext
          title="Hosting Features For Your Big Ideas"
          subTitle="These features come standard in all of our hosting plans.
        Dynamically extend imperatives through open-source quickly niche markets."
        />
        <FeatureItems
          pStyle="gap-10"
          style="w-full mdl:w-[47%]"
          data={featuresData}
          iconStyle="scale-[6]"
        />
      </div>
    </section>
  );
};

export default Features;
