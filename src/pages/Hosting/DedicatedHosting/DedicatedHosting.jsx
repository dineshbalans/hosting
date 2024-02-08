import React from "react";
import bannerBg from "./assets/img/hero-1.jpg";
import { dedicatedHostingData } from "./data/dedicatedHostingData";
import MainContext from "../../../components/General/MainContext";
import Plans from "../../../components/Plans/Plans";
import Features from "../../../components/Features/Features";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import DifferenceTable from "../../../components/Table/DifferenceTable";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import Review from "../../../components/Review/Review";
import TestimoRev from "../../../components/General/TestimoRev";

const DedicatedHosting = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center rounded-b-[375px]"
      >
        <div
          className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5] gap-16 rounded-b-[375px]
            pddng w-full h-full text-white flex flex-col justify-between items-center"
        >
          <MainContext
            title="Fully-Managed Dedicated Server Hosting"
            subTitle="Progressively integrate cost effective methods of empowerment vis-a-vis
                standardized information. Uniquely whiteboard functionalized."
            tStyle="text-white"
            stStyle="text-white"
          />
          <ul className="flex flex-wrap md:flex-nowrap justify-center gap-10">
            {dedicatedHostingData.map(({ id, Icon, txt }) => (
              <li key={id} className="space-y-4">
                <Icon className="mx-auto scale-[1.9]" />
                <h3 className="font-semibold text-lg">{txt}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Plans />
      <Features />
      <TechnicalSpec />
      <TestimoRev />
      <DifferenceTable />
      <FreqAskQstn />
      <Review />
    </section>
  );
};

export default DedicatedHosting;
