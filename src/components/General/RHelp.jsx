import React from "react";
import WButton from "../UI/WButton";
import GButton from "../UI/GButton";

const RHelp = () => {
  return (
    <section className="bg-secondary">
      <div
        className="pddng centerContainer space-y-5 
      flex flex-wrap md:flex-nowrap justify-between items-center"
      >
        <div className="space-y-4 md:w-[65%] ">
          <h1 className={`title text-white`}>Need Some Help?</h1>
          <h5 className={`sub-title text-white text-base leading-8`}>
            Whether you’re stuck or just want some tips on where to start, hit
            up our experts anytime. Sales Chat: MON-FRI 8AM-4PM PT | Customer
            Support Chat: Every Day 5:30AM–9:30PM PT
          </h5>
        </div>
        <div className="flex w-full md:w-auto flex-col justify-center items-center gap-3 ">
          <WButton context="Chat With Us" />
          <GButton context="Send us an Email" />
        </div>
      </div>
    </section>
  );
};

export default RHelp;
