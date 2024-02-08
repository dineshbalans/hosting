import React from "react";

const TestimoRev = () => {
  return (
    <section className="bg-white">
    <section className={`flex flex-wrap mdl:flex-nowrap gap-8 pddng justify-between centerContainer`}>
      <div className="w-full mdl:w-[49%] bg-cement/40 rounded shadow-shadowOne border p-10 space-y-4">
        <h2 className="text-[26px] font-bold text-ternary leading-9">
          100% Uptime Guarantee
        </h2>
        <h5 className="text-quadra leading-7">
          Made possible by our multiple datacenter locations, redundant cooling,
          emergency generators. Mono drive business e-markets after distinctive
          functionalities.
        </h5>
        <button className="primeWhiteBttn">Learn More</button>
      </div>
      <div className="w-full mdl:w-[49%] bg-cement/40 rounded shadow-shadowOne border p-10 space-y-4">
        <h2 className="text-[26px] font-bold text-ternary leading-9">
          24/7 365 Day Support
        </h2>
        <h5 className="text-quadra leading-7">
          Our experts are on standby for friendly, pro-level support 24/7, 365.
          No question is too Objectively envisioneer stand-alone growth
          strategies whereas market.
        </h5>
        <div className="flex gap-3">
          <button className="primeBttn">Chat With Us</button>
          <button className="primeWhiteBttn">Email Us</button>
        </div>
      </div>
    </section>
    </section>
  );
};

export default TestimoRev;
