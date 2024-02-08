import React from "react";
import privateCloudServer from "./assets/svg/private-cloud-server.svg";
import wordpressLogo from "./assets/svg/wordpress-logo.svg";
import mapImg from "./assets/img/map-bg.png";
import { IoCheckmark } from "react-icons/io5";

import { landingData } from "../../../data/imageData";
import WButton from "../../../components/UI/WButton";
import GButton from "../../../components/UI/GButton";
import MainContext from "../../../components/General/MainContext";
import HostingPlans from "../../../components/Plans/Plans";
import HostingSolution from "../../../components/Solution/Solution";
import Review from "../../../components/Review/Review";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import RHelp from "../../../components/General/RHelp";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Network from "../../../components/Network/Network";
import BSearch from "../../../components/BSearch/BSearch";

const Imagepage = () => {
  return (
    <section>
      <div className="bg-secondary">
        <div className="pdng centerContainer text-white flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 
        mb-10 justify-center items-center">
          <div className="w-full lg:w-1/2  space-y-8 flex flex-col justify-center">
            <MainContext
              title=" Fully Managed WordPress Hosting Services"
              subTitle="Globally parallel task granular alignments through excellent
            intellectual capital. Globally deploy vertical leadership."
              tStyle="text-white  w-full"
              stStyle="text-start text-white"
              flagWidth={false}
            />
            <ul className="space-y-4">
              {landingData.map(({ id, context }) => (
                <li className="flex gap-2 text-white" key={id}>
                  <IoCheckmark />
                  <h6>{context}</h6>
                </li>
              ))}
            </ul>
            <div className="flex gap-6 ">
              <WButton context="Get Started Now" />
              <GButton context="See Price Plan" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
            <img
              src={wordpressLogo}
              alt=""
              className="w-20 absolute left-[90px] translate-y-10 "
            />
            <img src={privateCloudServer} alt="" className="" />
          </div>
        </div>
      </div>
      <div
        className="pddng space-y-5 bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${mapImg})` }}
      >
        <MainContext
          title="Search Unique Domain!"
          subTitle="Get your perfect domain name starting from 9.99$ 
          for the first year and free domain privacy included build."
        />
        <BSearch style="w-full sml:w-[60%] mx-auto space-y-5" />
      </div>
      <HostingPlans />
      <HostingSolution />
      <TechnicalSpec />
      <RHelp />
      <ActiveTransfer />
      <Network />
      <Review />
    </section>
  );
};

export default Imagepage;
