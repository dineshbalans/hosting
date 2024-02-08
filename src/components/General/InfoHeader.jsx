import React from "react";
import MainContext from "./MainContext";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import bgImage from "../../assets/img/hero-14.jpg";

const InfoHeader = ({ title, desc, bannerBg = bgImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="bg-cover bg-center"
    >
      <div
        className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]
            pddng w-full h-full text-white "
      >
        <MainContext
          title={title}
          subTitle={desc}
          style="w-full md:w-1/2 py-3"
          tStyle="text-white w-full"
          stStyle="text-white text-start"
          flagWidth={false}
        />
      </div>
      <div className="bg-[#F8F9FA]">
        <div className="px-[75px] py-3 border-y flex gap-[10px] items-center centerContainer">
          <Link to={"#"} className="text-[13px] text-primary/70 font-medium">
            Home
          </Link>
          <GoChevronRight />
          <Link to={"#"} className="text-[13px] text-primary/70 font-medium">
            Pages
          </Link>
          <GoChevronRight />
          <Link to={"#"} className="text-[13px] text-quadra font-medium">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
