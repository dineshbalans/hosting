import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import MainContext from "../General/MainContext.jsx";
import { hostingSolutionData } from "./data/solutionData.js";

const Solution = () => {
  return (
    <section className={`pdng space-y-12 bg-white centerContainer`}>
      <MainContext
        title="We Have a Hosting Solution For You"
        subTitle="Synergistically architect plug-and-play without next-generation
          manufactured products. Assertively develop synergistic networks."
      />
      <ul className="flex flex-wrap gap-[26px] justify-between">
        {hostingSolutionData.map(({ id, image, title, subTitle, price }) => (
          <li
            key={id}
            className="w-full md:w-[47%] lg:w-[31%] bg-cement/40 p-12 space-y-5 shadow-[0px_0px_1.5px_0px_rgba(0,0,0,0.3)]
            rounded"
          >
            <img src={image} alt="" className="w-12 object-contain mx-auto" />
            <div className="space-y-2 text-center">
              <h1 className="text-ternary text-lg font-semibold">{title}</h1>
              <p className="text-quadra">{subTitle}</p>
            </div>
            <p className="text-quadra text-center text-sm">
              Starting at: <b>{`$${price}/mo`}</b>
            </p>
            <p className="flex gap-2 text-[#007BFF] items-center justify-center">
              <span className="cursor-pointer hover:underline">
                View Details
              </span>
              <FaLongArrowAltRight />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Solution;
