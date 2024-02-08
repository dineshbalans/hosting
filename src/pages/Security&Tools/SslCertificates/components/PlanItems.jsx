import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoRibbonOutline } from "react-icons/io5";
import { sslPlanData } from "../data/sslData";

const PlanItems = ({
  id,
  title,
  price,
  warranty,
  showFeatures,
  setShowFeatures,
}) => {
  return (
    <div
      className={`w-full mdl:w-[31.5%] rounded-xl border text-center p-8 lg:p-10 space-y-6 hover:border-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20
      transition-all ease-linear bg-cement/50`}
      key={id}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-ternary/90 font-semibold text-[27.5px] leading-10">
          {title} Wildcard SSL
        </h1>
      </div>
      <h5 className="text-orange-600 text-3xl font-medium">
        {price} INR{" "}
        <span className="text-ternary text-sm font-normal"> /yr ex VAT</span>
      </h5>
      {/* Order Button */}
      <div className="mt-4 primeBttn">
        <a
          href="https://portal.mergosoft.com/order/main/index/Hosting"
          target="_blank"
        >
          Order Now
        </a>
      </div>
      <hr />
      <ul className="text-[15px] space-y-4">
        <li className="">
          <div className="flex gap-4 items-baseline">
            <IoRibbonOutline className="text-primeBlue scale-[1.4]" />
            <h1>{`${warranty} Warranty`}</h1>
          </div>
          {showFeatures && (
            <p className=" text-quadra text-start text-[13.5px] py-2 pl-7 transition-all ease-linear">
              Issued by Globalsign, this protects you against incorrect
              issuance.
            </p>
          )}
        </li>
        {sslPlanData.features.map(({ id, Icon, title, desc }) => (
          <li key={id} className="">
            <div className="flex gap-4 items-baseline">
              <Icon className="text-primeBlue scale-[1.4]" />
              <h1 className="text-start">{title}</h1>
            </div>
            {showFeatures && (
              <p className=" text-quadra text-start text-[13.5px] py-2 pl-7 transition-all ease-linear">
                {desc}
              </p>
            )}
          </li>
        ))}
      </ul>
      <h6
        className={`flex gap-2 items-center justify-center mx-auto cursor-pointer`}
        onClick={() => setShowFeatures((prevState) => !prevState)}
      >
        {showFeatures ? <IoIosArrowUp /> : <IoIosArrowDown />}
        <span>Expand Features</span>
      </h6>
    </div>
  );
};

export default PlanItems;
