import React from "react";
import BgSection from "../../../components/General/BgSection";
import bannerBg from "./assets/img/hero-bg1.jpg";
import Plans from "../../../components/Plans/Plans";
import CallToAction from "../../../components/General/CallToAction";
import TechnicalSpec from "../../../components/TechnicalSpecification/TechnicalSpec";
import Review from "../../../components/Review/Review";
import BusinessFeature from "../../../components/Features/BusinessFeature";
import FreqAskQstn from "../../../components/FAQ/FreqAskQstn";
import MainContext from "../../../components/General/MainContext";
import DomainItems from "../DomainSearchTwo/components/DomainItems";

const ResellerHosting = () => {
  return (
    <BgSection>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center "
      >
        <div className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]">
          <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
            <div className="w-full mdl:w-1/2 space-y-5">
              <MainContext
                title="Reseller Hosting with WHM & cPanel"
                subTitle="Sell anything, anywhere, anytime on the world's biggest eCommerce platform.
                Up to 50% Off domain and hosting, Starting from $2.99/month."
                tStyle="text-white w-full"
                stStyle="text-white text-start"
                flagWidth={false}
              />
              <DomainItems iconStyle="text-white" style="text-white" />
            </div>
            <div
              className="rounded-lg px-12 py-8 bg-secondary/50 hover:bg-secondary/80
            flex flex-col items-center gap-4 transition-all ease-linear"
            >
              <h5 className="text-lg font-medium">Special intro offer</h5>
              <div className="flex">
                <span className="text-6xl pt-[10px]">$</span>
                <span className="text-9xl font-medium">4</span>
                <div className="flex flex-col gap-[18px]">
                  <span className="text-6xl pt-[10px]">.99</span>
                  <span>/month</span>
                </div>
              </div>
              <p className="">
                Regular Price <strong>$10.99/mo</strong>
              </p>
              <button className="primeBttn">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
      <Plans />
      <BusinessFeature />
      <CallToAction />
      <TechnicalSpec />
      <FreqAskQstn />
      <Review />
    </BgSection>
  );
};

export default ResellerHosting;
