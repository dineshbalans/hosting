import React from "react";
import dataCenter from "./assets/svg/data-center.svg";
import bannerBg from "./assets/img/offer-bg-3.png";
import { blackFridaySaleData } from "./data/blackFridaySaleData";
import { FaCaretDown } from "react-icons/fa6";
import MainContext from "../../../components/General/MainContext";
import DomainItems from "../../Home/DomainSearchTwo/components/DomainItems";
import Solution from "../../../components/Solution/Solution";
import CHelp from "../../../components/General/CHelp";
import DifferenceTable from "../../../components/Table/DifferenceTable";
import Review from "../../../components/Review/Review";

const BlackFridaySale = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
        className="bg-cover bg-center"
      >
        <div
          className="pddng flex flex-wrap lg:flex-nowrap justify-center
        text-center text-white items-center centerContainer gap-10 lg:gap-3"
        >
          <div className="w-full lg:w-1/2 space-y-6">
            <MainContext
              title="Fast and Secure Shared Web Hosting"
              tStyle="w-full text-white text-start"
              subTitle="Up to 90% OFF shared hosting plans. Hurry up, limited time offer 
            is ticking down, the deal ends soon"
              stStyle="text-white text-start"
              flagWidth={false}
            />
            <div className="flex justify-start">
              <button className="transparentBttn">Get Started Now</button>
            </div>
          </div>
          <ul className="w-full lg:w-1/2 flex flex-wrap justify-between gap-6 xl:gap-7">
            {blackFridaySaleData.map(({ id, title, price }) => (
              <li key={id} className="w-full md:w-[47%] bg-secondary/80 p-3 rounded-md">
                <div className="relative border rounded-md space-y-4 pb-3">
                  <h1 className="bg-white font-medium text-ternary rounded-t-md p-2 text-sm flex justify-center">
                    <span>{title}</span>
                    <FaCaretDown className="text-white absolute scale-[2] scale-x-[3.3] translate-y-[19px]" />
                  </h1>
                  <h3>Starting From</h3>
                  <h4 className="text-3xl font-bold">
                    {price}
                    <span className="text-base font-normal">/mo</span>
                  </h4>
                  <button
                    className="border rounded px-5 py-1 text-sm font-medium
                    hover:bg-white hover:text-quadra transition-all ease-linear"
                  >
                    Save Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="px-6 md:px-12 lg:px-[75px]
      flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 
        justify-center items-center centerContainer"
      >
        <div className="w-full lg:w-1/2 py-16 lg:py-[200px] space-y-6">
          <MainContext
            title="Create Your Own Professional Website"
            subTitle="Globally parallel task granular alignments through excellent intellectual capital. Globally deploy vertical leadership."
            stStyle="text-start"
            flagWidth={false}
          />
          <DomainItems />
          <button className="primeBttn">Get Started Now</button>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <img src={dataCenter} alt="" className="w-[450px]" />
        </div>
      </div>
      <Solution />
      <CHelp />
      <DifferenceTable />
      <Review />
    </section>
  );
};

export default BlackFridaySale;
