import React from "react";
import { Carousel } from "@material-tailwind/react";
import carouselThree from "./assets/img/hero-4.jpg";
import carouselTwo from "./assets/img/hero-10.jpg";
import carouselOne from "./assets/img/hero-17.jpg";

import Plans from "../../../components/Plans/Plans";
import GenTechFeatures from "../../../components/GenTechFeatures/GenTechFeatures";
import CallToAction from "../../../components/General/CallToAction";
import ActiveTransfer from "../../../components/ActiveTransfer/ActiveTransfer";
import Network from "../../../components/Network/Network";
import Review from "../../../components/Review/Review";
import MainContext from "../../../components/General/MainContext";
import DomainItems from "../DomainSearchTwo/components/DomainItems";
import { domainData } from "../Home/data/homeData";
import Input from "../../../components/General/Input";
import BgSection from "../../../components/General/BgSection";
import { Link } from "react-router-dom";

const DomainSlider = () => {
  return (
    <BgSection>
      <Carousel
        transition={{ duration: 2 }}
        className="h-[900px] mdl:h-[600px] xl:h-auto"
      >
        <div className="relative h-full w-full">
          <img
            src={carouselOne}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 grid h-full w-full items-center
            bg-gradient-to-r from-secondary from-3% to-secondary/[0.5] pddng"
          >
            <div className="centerContainer">
              <div className="w-full mdl:w-[75%] mxl:w-[60%] space-y-5">
                <MainContext
                  title="Managed Cloud Hosting"
                  subTitle="Synergistically leverage existing robust best practices whereas integrated manufactured products.
                  Intrinsicly evisculate value-added."
                  tStyle="text-white w-full"
                  stStyle="text-white text-start"
                  flagWidth={false}
                />
                <DomainItems style="text-white" iconStyle="text-white" />
                <p className="text-white">
                  Get all the essentials features{" "}
                  <strong>Starting at $2.59/mo</strong>
                </p>
                <div className="flex gap-5">
                  <button className="whiteBttn">Check Prices</button>
                  <button className="transparentBttn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={carouselTwo}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 grid h-full w-full items-center
             bg-gradient-to-r from-secondary from-3% to-secondary/[0.5] pddng "
          >
            <div className="centerContainer">
              <div className="w-full mdl:w-[75%] mxl:w-[60%] space-y-5">
                <MainContext
                  title="Search Your Unique Domain"
                  subTitle="If your WordPress website is your personal business, we
                want you to succeed. We made our Mergosoft hosting platform."
                  tStyle="text-white w-full"
                  stStyle="text-white text-start"
                  flagWidth={false}
                />
                <Input style="w-[75%]" />
                <ul className="flex gap-8 pt-4">
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
                        <img
                          src={img}
                          alt=""
                          className="w-[50px] object-contain"
                        />
                        <span className="text-[#A9B1D4]">{price}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={carouselThree}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 grid h-full w-full items-center
             bg-gradient-to-r from-secondary from-3% to-secondary/[0.5] pddng "
          >
            <div className="centerContainer">
              <div className="w-full mdl:w-[75%] mxl:w-[60%] space-y-5 border-l-2 border-b-2   border-dashed  pl-12 pb-12">
                <MainContext
                  title="VPS Hosting"
                  subTitle="Completely harness extensive testing procedures via ubiquitous processes. Globally envisioneer cross"
                  tStyle="text-white w-full"
                  stStyle="text-white text-start"
                  flagWidth={false}
                />
                <div className="flex gap-5">
                  <button
                    className="bttn bg-white text-quadra hover:bg-transparent
                  hover:text-white transition-all ease-linear"
                  >
                    Check Prices
                  </button>
                  <button
                    className="bttn hover:bg-white hover:text-quadra 
                  text-white transition-all ease-linear"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <Plans />
      <GenTechFeatures />
      <CallToAction />
      <ActiveTransfer />
      <Network />
      <Review />
    </BgSection>
  );
};

export default DomainSlider;
