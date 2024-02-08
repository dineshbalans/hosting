import React from "react";
import { supportItemsData } from "../data/supportData";

const SupportItem = () => {
  return (
    <ul className="flex flex-wrap lg:flex-nowrap gap-7 justify-center">
      {supportItemsData.map(({ id, URL, title, desc }) => (
        <li
          key={id}
          className="w-full mdl:w-[45%] lg:w-1/3 flex flex-col justify-center items-center 
          space-y-2 bg-cement/50 p-12 border rounded"
        >
          <img src={URL} alt={title} className="w-16" />
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-center">{desc}</p>
        </li>
      ))}
    </ul>
  );
};

export default SupportItem;
