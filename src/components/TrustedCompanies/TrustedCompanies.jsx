import React from "react";
import MainContext from "../General/MainContext";
import { trustedCompData } from "./data/trustedCompdata";

const TrustedCompanies = ({ style = "bg-white" }) => {
  return (
    <section className="bg-white">
      <section className={`pddng space-y-8 centerContainer  ${style}`}>
        <MainContext
          title="Trusted by Companies"
          subTitle="Rapidiously morph transparent internal or 'organic' 
        sources whereas resource sucking e-business. Conveniently innovate compelling internal."
        />
        <ul className="flex flex-wrap gap-3 justify-center lg:justify-between">
          {trustedCompData.map(({ id, logo }) => (
            <li key={id} className="w-full md:w-[32%] lg:w-[23%] p-14">
              <img src={logo} className="w-full" alt="" />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default TrustedCompanies;
