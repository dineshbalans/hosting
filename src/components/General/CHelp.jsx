import React from "react";
import MainContext from "./MainContext";
import WButton from "../UI/WButton";
import GButton from "../UI/GButton";

const CHelp = () => {
  return (
    <div className="bg-secondary">
      <div className="pdng centerContainer space-y-5">
        <MainContext
          title="Need Some Help?"
          subTitle="Whether you’re stuck or just want some tips on where to start, hit up our experts anytime.
          Sales Chat: MON-FRI 8AM-4PM PT | Customer Support Chat: Every Day 5:30AM–9:30PM PT"
          tStyle="text-white"
          stStyle="text-white"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <WButton context="Chat With Us" />
          <GButton context="Send us an Email" />
        </div>
      </div>
    </div>
  );
};

export default CHelp;
