import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import bannerBg from "../../../assets/img/hero-16.jpg";
import { emailHostingData } from "./data/emailHostingData";
import emailHosting from "./assets/svg/email-hosting-white.svg";
import MainContext from "../../../components/General/MainContext";
import Features from "../../../components/Features/Features";
import MnyBckGuarantee from "../../../components/General/MnyBckGuarantee";
import FAQ from "../../../components/FAQ/FAQ";
import Review from "../../../components/Review/Review";
import PackageTable from "../../../components/Table/PackageTable";

const EmailHosting = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-gradient-to-r from-secondary from-3% to-secondary/[0.5]">
          <div className="pddng w-full h-full text-white flex flex-wrap mdl:flex-nowrap justify-center gap-10 lg:justify-between items-center centerContainer">
          <div className="w-full mdl:w-[60%] space-y-7">
            <MainContext
              title="Managed Professional Email"
              tStyle="text-white w-full"
              subTitle="Promote your site with every message you send with an email address that matches
                your website. Professional email with Microsoft Office 365.              "
              stStyle="text-white text-start"
              flagWidth={false}
            />
            <ul className="space-y-3">
              {emailHostingData.map(({ id, title }) => (
                <li key={id} className="flex gap-3 items-center">
                  <IoCheckmarkOutline />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-5">
              <button className="whiteBttn">View Princing</button>
              <button className="transparentBttn">Package Comparision</button>
            </div>
          </div>
          <div className="">
            <img src={emailHosting} alt="" className="w-80" />
          </div>
        </div>
        </div>
      </div>
      <PackageTable style="bg-white" />
      <Features />
      <MnyBckGuarantee />
      <FAQ />
      <Review />
    </section>
  );
};

export default EmailHosting;
