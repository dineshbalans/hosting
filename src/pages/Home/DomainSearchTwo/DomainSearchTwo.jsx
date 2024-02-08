import React from "react";
import dataCenter from "./assets/svg/data-center.svg";

import DomainList from "./components/DomainList";
import DomainItems from "./components/DomainItems";
import MainContext from "../../../components/General/MainContext";
import Input from "../../../components/General/Input";
import PopularDomain from "../../../components/Domain/PopularDomain";
import CallToAction from "../../../components/General/CallToAction";
import BgSection from "../../../components/General/BgSection";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Review from "../../../components/Review/Review";
import GenTechFeatures from "../../../components/GenTechFeatures/GenTechFeatures";
import DifferenceTable from "../../../components/Table/DifferenceTable";

const DomainSearchTwo = () => {
  return (
    <BgSection>
      <div className="px-6 md:px-12 lg:px-[75px] py-[155px] text-white bg-secondary space-y-8">
        <MainContext
          title="Find Your Best Domain Name and Create Your Website"
          subTitle="Up to 50% Off domain and hosting, Starting from $2.99/month,
           free SSL certificate, 24/7/365 support, money back guarantee."
          tStyle="text-white lg:w-[60%] text-center"
          stStyle="text-white"
        />
        <Input style="w-full mdl:w-1/2 mx-auto" />
      </div>
      <DomainList />
      <div className="bg-white">
      <div className="px-6 md:px-12 lg:px-[75px] pt-[880px] sm:pt-96 md:pt-64 mxl:pt-60 xl:pt-48 pb-24
      flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 
        justify-center items-center centerContainer">
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
      </div>
      <PopularDomain />
      <GenTechFeatures />
      <CallToAction />
      <ActiveTransfer />
      <DifferenceTable />
      <Review />
    </BgSection>
  );
};

export default DomainSearchTwo;
