import React from "react";
import bannerBg from "./assets/img/hero-1.jpg";
import Input from "../../../components/General/Input";
import MainContext from "../../../components/General/MainContext";
import { domainData } from "../../Home/Home/data/homeData";
import { Link } from "react-router-dom";
import BgSection from "../../../components/General/BgSection";
import Features from "../../../components/Features/Features";
import PopularDomain from "../../../components/Domain/PopularDomain";
import CallToAction from "../../../components/General/CallToAction";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import PickDomain from "../../../components/Domain/PickDomain";

const DomainSearch = () => {
  return (
    <BgSection>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-center bg-cover"
      >
        <div
          className="bg-secondary/[0.7] 
            pddng w-full h-full text-white flex justify-center items-center"
        >
          <div className="centerContainer py-[40px] space-y-4 ">
            <MainContext
              title="Use Domain Checker to Find Unique Domains!"
              subTitle="Up to 50% Off domain and hosting, Starting from $2.99/month,
            free SSL certificate, 24/7/365 support, money back guarantee."
              tStyle="text-white lg:w-[60%] text-center text-4xl"
              stStyle="text-white"
            />
            <Input style="w-full mdl:w-1/2 mx-auto" />
            <ul className="flex flex-wrap justify-center gap-8 pt-4">
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
      </div>
      <PickDomain />
      <Features style="bg-white" />
      <PopularDomain />
      <CallToAction />
      <ActiveTransfer style="bg-cement" />
      <FreqAskQstn style="bg-white" />
    </BgSection>
  );
};

export default DomainSearch;
