import React from "react";
import MainContext from "./MainContext";
import GButton from "../UI/GButton";
import WButton from "../UI/WButton";

const CallToAction = () => {
  return (
    <section className="pddng bg-secondary/[0.75] space-y-5">
      <MainContext
        title="Already have a domain that you love?"
        subTitle="No problem! It 's quick and painless to transfer your hosting, domain registrations, or both to HostIT maximize market positioning solutions and enterprise services."
        tStyle="text-white"
        stStyle="text-white"
      />
      <div className="flex flex-wrap justify-center gap-3">
        <WButton context="Existing Customer" />
        <GButton context="New Customer" />
      </div>
    </section>
  );
};

export default CallToAction;
