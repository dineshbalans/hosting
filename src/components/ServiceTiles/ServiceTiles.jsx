import React from "react";
import { Link } from "react-router-dom";
import { serviceTilesData } from "./data/serviceTilesData.js";

const ServiceTiles = ({ style }) => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-between">
      {serviceTilesData.map(({ id, Icon, title, subTitle }) => (
        <Link
          to="#"
          key={id}
          className={`w-full  md:w-[32%] px-10 py-16 rounded-xl space-y-7 hover:shadow-shadowOne
          transition-all ease-linear ${style} bg-cement/40 mb-5 md:mb-0`}
        >
          <Icon className="text-white scale-[3] bg-[#1934A7] p-1 rounded-sm mx-auto" />
          <div className="text-center space-y-1 ">
            <h1 className="text-ternary font-semibold text-lg">{title}</h1>
            <h5 className="text-quadra">{subTitle}</h5>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ServiceTiles;
