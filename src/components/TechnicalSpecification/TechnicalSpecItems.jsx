import React from "react";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { technicalSpecData } from "./data/technicalSpec";

const TechnicalSpecItems = () => {
  return (
    <ul className="flex flex-wrap gap-3 text-quadra justify-between items-center">
      {technicalSpecData.map(({ id, Icon, items, title }) => (
        <li key={id} className="w-full md:w-[47%] lg:w-[32%] py-5">
          <Icon className="scale-[1.9] text-primeBlue translate-x-2" />
          <h1 className="text-lg font-semibold text-ternary pt-5 pb-3">
            {title}
          </h1>
          <ul className="space-y-[10px]">
            {items.map(({ id, item, bItem }) => (
              <li key={id} className="flex text-sm gap-2 items-center">
                <PiCaretDoubleRightDuotone className="text-primeBlue" />
                <h1>
                  <span className="font-semibold">{bItem} </span>
                  <span> {item}</span>
                </h1>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default TechnicalSpecItems;
