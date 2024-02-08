import React from "react";
import { Link } from "react-router-dom";

import DomainItems from "../DomainSearchTwo/components/DomainItems";
import dataCenter from "./assets/svg/shared-cloud-hosting.svg";
import bgVideo from "./assets/server-room.mp4";
import { domainData } from "../Home/data/homeData";
import PromoSection from "./components/PromoSection";

import MnyBckGuarantee from "../../../components/General/MnyBckGuarantee";
import Features from "../../../components/Features/Features";
import DifferenceTable from "../../../components/Table/DifferenceTable";
import Network from "../../../components/Network/Network";
import Review from "../../../components/Review/Review";
import MainContext from "../../../components/General/MainContext";
import Input from "../../../components/General/Input";

const DomainSearchFour = () => {
  return (
    <section>
      <div className="text-white bg-secondary/[0.45]">
        <video
          autoPlay
          loop
          muted
          className="absolute -z-10 w-auto min-w-full min-h-[160vh] md:min-h-[120vh] object-cover"
          src={bgVideo}
        >
          Your browser does not support the video tag.
        </video>
        <div className="px-6 md:px-12 lg:px-[75px] py-[180px] space-y-4">
          <MainContext
            title="Find Your Best Domain Name and Create Your Website"
            subTitle="Up to 50% Off domain and hosting, Starting from $2.99/month,
           free SSL certificate, 24/7/365 support, money back guarantee."
            tStyle="text-white lg:w-[60%] text-center"
            stStyle="text-white"
          />
          <Input style="w-full md:w-1/2 mx-auto" />
          <ul className="flex flex-wrap gap-8 pt-4 justify-center">
            {domainData.map(({ id, img, URL, price }) => (
              <li
                key={id}
                className="flex items-center justify-between
              text-ternary font-medium text-[15px]"
              >
                <Link
                  to={URL}
                  className="flex flex-col gap-[10px] items-center justify-center h-full"
                >
                  <img src={img} alt="" className="w-[50px] object-contain" />
                  <span className="text-[#A9B1D4]">{price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PromoSection />
      <div className="bg-white">
        <div className="px-6 md:px-12 lg:px-[75px] md:pt-[400px] lg:pt-48 pb-24 centerContainer flex flex-wrap lg:flex-nowrap items-center">
          <div className="w-full lg:w-1/2 space-y-5">
            <MainContext
              title="Hosting For Every Website"
              tStyle="w-full"
              subTitle="Globally parallel task granular alignments through excellent intellectual capital. Globally deploy vertical leadership."
              stStyle="text-start"
              flagWidth={false}
            />
            <DomainItems />
            <button className="primeBttn">Get Started Now</button>
          </div>
          <div className="w-full lg:w-1/2 pt-6 lg:pt-0 flex items-center justify-center lg:justify-end">
            <img src={dataCenter} alt="" className="w-[450px]" />
          </div>
        </div>
      </div>
      <MnyBckGuarantee />
      <Features />
      <DifferenceTable />
      <Network />
      <Review />
    </section>
  );
};

export default DomainSearchFour;
