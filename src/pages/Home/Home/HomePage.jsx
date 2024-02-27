import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { domainData } from "./data/homeData";
import server from "./assets/svg/servers.svg";
import animatedImg1 from "./assets/img/animated-icon-1.png";
import animatedImg2 from "./assets/img/animated-icon-2.png";
import animatedImg3 from "./assets/img/animated-icon-3.png";
import animatedImg4 from "./assets/img/animated-icon-4.png";

import MainContext from "../../../components/General/MainContext";
import CHelp from "../../../components/General/CHelp";
import RHelp from "../../../components/General/RHelp";
import Plans from "../../../components/Plans/Plans";
import Features from "../../../components/Features/Features";
import Solution from "../../../components/Solution/Solution";
import ServiceTiles from "../../../components/ServiceTiles/ServiceTiles";
import FAQ from "../../../components/FAQ/FAQ";
import Review from "../../../components/Review/Review";

const HomePage = () => {
  return (
    <section className="">
      <div className="bg-secondary">
        <div className="px-6 py-20 md:px-12 lg:py-0 lg:px-[75px] text-white flex flex-wrap lg:flex-nowrap gap-20 centerContainer">
          <div className="w-full lg:w-1/2 lg:py-[200px] space-y-4 ">
            <h1 className="title text-white">
              HostIT Best Hosting Provider in World
            </h1>
            <h4 className="sub-title text-white">
              If your WordPress website is your personal business, we want you
              to succeed. We made our HostIT hosting & domain service
              provider platform.
            </h4>
            {/* Search Domain */}
            <div className="flex">
              <input
                type="text"
                className="rounded-l w-full 
              px-6 placeholder:text-sm text-ternary"
                placeholder="example.com"
              />
              <button
                className="bg-primeBlue text-white px-6 py-3 flex 
            items-center gap-2 rounded-r"
              >
                <IoSearchSharp className="scale-110" />
                <span>Search</span>
              </button>
            </div>
            <ul className="flex flex-wrap justify-center sml:justify-start gap-8 pt-4">
              {domainData.map(({ id, img, URL, price }) => (
                <li
                  key={id}
                  className="flex items-center justify-between
              text-ternary font-medium text-[15px] "
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
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
            <img src={server} alt="" className="" />
            <div className="absolute w-full flex -translate-y-[80px]">
              <div className="w-[50%] flex justify-end pr-[60px]">
                <img src={animatedImg1} alt="" className="z-50" />
              </div>
              <div className="w-[50%] flex justify-end pr-[68px]">
                <img src={animatedImg3} alt="" className="z-50" />
              </div>
            </div>
            <div
              className="absolute  h-96 flex flex-col justify-between
          -translate-y-[100px] -translate-x-[200px]"
            >
              <div>
                <img src={animatedImg2} alt="" className="z-50" />
              </div>
              <div>
                <img src={animatedImg4} alt="" className="z-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pddng space-y-12 bg-white centerContainer">
        <MainContext
          title="HostIT Helps You Succeed"
          subTitle="Grow your website faster by using HostIT as your foundation.
          Dynamically streamline principle-centered technologies."
        />
        <ServiceTiles />
      </div>
      <Solution />
      <CHelp />
      <Plans />
      <Features />
      <RHelp />
      <FAQ />
      <Review />
    </section>
  );
};

export default HomePage;
