import React from "react";
import { pickDomainData } from "./data/domainData";
import GButton from "../UI/GButton";

const PickDomain = () => {
  return (
    <section  className="bg-cement">
    <div className="centerContainer pddng flex flex-wrap lg:flex-nowrap justify-between">
      <div className="w-full lg:w-[24%] mb-10 lg:mb-0 p-5 bg-white space-y-3 rounded h-fit">
        <h3 className="font-semibold text-lg">Filter Results</h3>
        <ul className="space-y-1 text-quadra flex flex-wrap gap-5 justify-center items-baseline lg:block">
          {pickDomainData.filterResult.map(({ id, txt }) => (
            <li key={id} className="flex items-center gap-2">
              <input type="checkbox" id={txt} />
              <label htmlFor={txt} className="cursor-pointer">
                {txt}
              </label>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center">
        <button className="primeWhiteBttn w-full md:w-1/2 lg:w-full">Apply Now</button>
        </div>
      </div>
      <div className="w-full lg:w-[73.5%] space-y-12">
        <div
          className="bg-white p-5 flex flex-wrap gap-4 mdl:gap-0 mdl:flex-nowrap justify-center mdl:justify-between border border-secondary
        hover:scale-[1.03] transition-all ease-linear"
        >
          <div className="w-full mdl:auto">
            <h3 className="font-medium text-lg text-center mdl:text-left">
              Domain <span className="text-primeBlue">example.com</span> is
              available!
            </h3>
            <h6 className="text-sm text-center mdl:text-left">Get this domain now</h6>
          </div>
          <div className="w-full mdl:auto">
            <h2 className="text-primeBlue text-[24px] font-bold text-center mdl:text-left">
              {`$3.95 `}
              <span className="text-[13px] text-ternary/50 font-semibold">
                /month
              </span>
            </h2>
            <h5 className="text-[14px] text-ternary/50 text-center mdl:text-left">
              On Sale -{" "}
              <span
                className={`px-[6px] py-[1px] rounded bg-primeBlue/20 text-primeBlue text-[12px]`}
              >{`Save 30%`}</span>
            </h5>
          </div>
          <GButton context="Add to Cart" style="border-secondary" />
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-2xl text-ternary text-center">
            More domain options
          </h2>
          <ul className="space-y-2 md:space-y-1">
            {pickDomainData.domainOptions.map(
              ({ id, tileStyle, domain, percentage, price }) => (
                <li
                  key={id}
                  className="bg-white p-5 flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center md:justify-between border
                  hover:scale-[1.02] transition-all ease-linear"
                >
                  <h3 className="font-medium my-auto w-full md:w-1/5 text-center md:text-left">
                    HostIT<span className="text-primeBlue">{domain}</span>
                  </h3>
                  <div className="w-full md:w-auto">
                    <h2 className="text-primeBlue text-[24px] font-bold text-center md:text-left">
                      {`$${price} `}
                      <span className="text-[13px] text-ternary/50 font-semibold">
                        /month
                      </span>
                    </h2>
                    <h5 className="text-[14px] text-ternary/50 text-center md:text-left">
                      On Sale -{" "}
                      <span
                        className={`px-[6px] py-[1px] rounded ${tileStyle} text-[12px]`}
                      >{`Save ${percentage}%`}</span>
                    </h5>
                  </div>
                  <button className="primeBttn">Add to Cart</button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PickDomain;
