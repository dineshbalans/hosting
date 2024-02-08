import React from "react";
import MainContext from "../General/MainContext";
import { freqAskQstnData } from "./data/freqAskQstnData";

const FreqAskQstn = () => {
  return (
    <section className="bg-white">
    <div className={`pddng space-y-10 centerContainer`}>
      <MainContext
        title="Frequently Asked Questions"
        subTitle="Quickly morph client-centric results through performance based applications. Proactively facilitate professional human capital for cutting-edge."
      />
      <ul className="flex flex-wrap justify-between">
        {freqAskQstnData.map(({ id, qstn, aswr }) => (
          <li key={id} className="w-full mdl:w-[48%] mb-7 space-y-1">
            <h2 className="text-[18px] font-semibold">{qstn}</h2>
            <h5 className="text-[15px] text-quadra leading-7">{aswr}</h5>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default FreqAskQstn;
