import React from "react";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { domainItemsData } from "../data/domainSearchTwoData";

const DomainItems = ({ style, iconStyle }) => {
  return (
    <ul className={`text-[15px] space-y-2 text-quadra ${style}`}>
      {domainItemsData.map(({ id, bItem, item }) => (
        <li className="flex items-center gap-1" key={id}>
          <PiCaretDoubleRightDuotone
            className={`text-primeBlue ${iconStyle}`}
          />
          <span>
            {bItem && <strong className="pr-1 font-semibold">{bItem}</strong>}
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DomainItems;
