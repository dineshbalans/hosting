import React from "react";
import MainContext from "./MainContext";
import WButton from "../UI/WButton";

const MnyBckGuarantee = () => {
  return (
    <div className="pddng bg-secondary space-y-6">
      <MainContext
        title="30-day Money-back Guarantee"
        subTitle="Globally parallel task granular alignments through excellent intellectual capital.
        Globally deploy vertical leadership."
        tStyle="text-white"
        stStyle="text-white"
      />
      <div className="flex justify-center">
        <WButton context="Get Started Now" />
      </div>
    </div>
  );
};

export default MnyBckGuarantee;
