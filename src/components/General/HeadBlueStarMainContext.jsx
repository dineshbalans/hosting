import React from "react";
import MainContext from "./MainContext";
import Star from "../../pages/Servers/components/Star";

const HeadBlueStarMainContext = ({ mcTitle, mcStitle, desc, img }) => {
  return (
    <div className="bg-secondary">
      <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
        <div className="w-full mdl:w-[50%] space-y-5">
          <Star />
          <MainContext
            title={mcTitle}
            tStyle="text-white w-full"
            subTitle={mcStitle}
            stStyle="text-white text-start text-2xl leading-9"
            flagWidth={false}
          />
          <p className="text-white leading-8">{desc}</p>
          <button className="whiteBttn">Get Started Now</button>
        </div>
        <div className="">
          <img src={img} alt="" className="w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default HeadBlueStarMainContext;
