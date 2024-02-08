import React from "react";
import { sharedHostingData } from "../data/sharedHostingData";
import MainContext from "../../../../components/General/MainContext";
import FeatureItems from "../../../../components/Features/FeatureItems";

const Package = ({ style = "bg-white", txtColor }) => {
  return (
    <section className={style}>
      <section className={`pddng space-y-12 centerContainer`}>
        <MainContext
          title="Why Choose This Package"
          subTitle="Distinctively recaptiualize principle-centered core competencies through
            client-centered core competencies. Enthusiastically provide access."
          tStyle={txtColor}
          stStyle={txtColor}
        />
        <FeatureItems
          data={sharedHostingData}
          style="flex-col w-full md:w-[43%] lg:w-1/4 mb-8"
          pStyle="lg:flex-nowrap gap-6"
          iconStyle="mx-auto scale-[1.7]"
          txtStyle={`text-center ${txtColor} w-full`}
        />
      </section>
    </section>
  );
};

export default Package;
