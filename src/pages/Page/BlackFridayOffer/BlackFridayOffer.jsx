import React from "react";
import bannerBg from "./assets/img/offer-bg-3.png";
import { FaCircleRight } from "react-icons/fa6";
import Plans from "../../../components/Plans/Plans";
import Solution from "../../../components/Solution/Solution";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import RHelp from "../../../components/General/RHelp";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Network from "../../../components/Network/Network";
import Review from "../../../components/Review/Review";
import DomainItems from "../../Home/DomainSearchTwo/components/DomainItems";
import MainContext from "../../../components/General/MainContext";

const BlackFridayOffer = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center "
      >
        <div className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]">
          <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
            <div className="w-full mdl:w-1/2 space-y-5">
              <MainContext
                title="Reliable hosting to make any website"
                subTitle="We Offer Shared Hosting Easy To Manage"
                tStyle="text-white w-full text-lg font-medium"
                stStyle="text-white text-start text-4xl font-bold"
                flagWidth={false}
              />
              <DomainItems iconStyle="text-white" style="text-white" />
              <h5>
                Get all the essentials features{" "}
                <strong>Starting at $2.59/mo</strong>
              </h5>
              <button className="transparentBttn">Get Started Now</button>
            </div>
            <div
              className="rounded-lg px-12 py-8 bg-secondary/50 hover:bg-secondary/80
            flex flex-col items-center gap-4 transition-all ease-linear mdl:w-1/3"
            >
              <h5 className="text-xl font-medium bg-orange-600 rounded-3xl px-5 py-1">
                Shared Hosting
              </h5>
              <div className="flex">
                <span className="text-6xl pt-[10px]">$</span>
                <span className="text-9xl font-medium">0</span>
                <div className="flex flex-col gap-[18px]">
                  <span className="text-6xl pt-[10px]">.99</span>
                  <span>/month</span>
                </div>
              </div>
              <p className="text-lg">Limited Time Offer!</p>
              <button className="transparentBttn flex items-center gap-2">
                <span>Save Now</span>
                <FaCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Plans showPlansBttn={false} />
      <Solution />
      <TechnicalSpec />
      <RHelp />
      <ActiveTransfer />
      <Network />
      <Review />
    </section>
  );
};

export default BlackFridayOffer;
