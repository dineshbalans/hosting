import React from "react";
import { bSearchData } from "./data/bSearchData";
import Input from "../General/Input";
import { Link } from "react-router-dom";

const BSearch = ({ style }) => {
  return (
    <section className={` ${style}`}>
      <Input />
      <ul className="flex flex-wrap justify-around gap-8">
        {bSearchData.map(({ id, img, URL, price }) => (
          <li key={id} className="text-ternary font-medium text-[15px] w-fit">
            <Link
              to={URL}
              className="flex flex-col gap-[6px] items-center justify-center h-full"
            >
              <img src={img} alt="" className="w-[50px] object-contain" />
              <span className="text-[#A9B1D4]">{price}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BSearch;
