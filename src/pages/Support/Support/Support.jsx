import React from "react";
import BgSection from "../../../components/General/BgSection";
import InfoHeader from "../../../components/General/InfoHeader";
import CallToAction from "../../../components/General/CallToAction";
import Review from "../../../components/Review/Review";
import { categoryData } from "./data/supportData";
import MainContext from "../../../components/General/MainContext";
import SupportItem from "./components/SupportItem";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <BgSection>
      <InfoHeader
        title="Support"
        desc="Continually strategize orthogonal core competencies for interdependent 
        potentialities. Collaboratively pursue end-to-end processes through bleeding-edge 
        e-tailers."
      />
      <div className="bg-white">
        <div className="pddng space-y-12 centerContainer">
          <MainContext
            title="Our Support and Commitment"
            subTitle="Globally seize extensive channels through go forward strategic theme areas. 
          Dramatically aggregate quality."
          />
          <SupportItem />
        </div>
        <div className="pddng space-y-12 centerContainer">
          <MainContext
            title="How we Define our Support Services"
            subTitle="Distinctively productize team driven niches with 24/7 outsourcing. 
          Conveniently enable functional ROI with compelling imperatives."
          />
          <div className="flex flex-wrap mdl:flex-nowrap gap-10 mdl:gap-0 justify-between">
            <div className="w-full mdl:w-[65%] space-y-3">
              <h1 className="text-2xl font-bold">Most popular categories</h1>
              <ul className="space-y-4">
                {categoryData.map(
                  ({
                    id,
                    Icon,
                    URL,
                    title,
                    desc,
                    iconStyle,
                    iconWrapperStyle,
                  }) => (
                    <li key={id} className="border rounded-md p-6">
                      <Link to={URL} className="flex  items-center gap-6">
                        <div
                          className={`${iconWrapperStyle} border rounded p-5`}
                        >
                          <Icon className={`${iconStyle} scale-[2]`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{title}</h3>
                          <p className="text-quadra">{desc}</p>
                        </div>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full mdl:w-[30%] space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">
                  Need some immediate help?
                </h1>
                <p className="text-quadra text-lg leading-7">
                  Seamlessly deliver pandemic e-services and next-generation
                  initiatives.
                </p>
                <button className="flex justify-center items-center gap-3 primeWhiteBttn">
                  <span>Chat With US</span>
                  <GoArrowRight />
                </button>
              </div>
              <hr />
              <div className="space-y-1 text-quadra">
                <h1 className="font-semibold text-ternary text-lg">
                  Get In Touch
                </h1>
                <h5>Our support team here for you 24/7</h5>
                <h6 className="pt-2">Phone: +1234567890123</h6>
                <h6>Email: email@yourdomain.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Review />
    </BgSection>
  );
};

export default Support;
