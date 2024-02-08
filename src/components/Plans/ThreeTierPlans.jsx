import React, { useReducer } from "react";
import cloud from "./assets/svg/icon-cloud-hosting.svg";
import vps from "./assets/svg/icon-vps-hosting.svg";
import wp from "./assets/svg/icon-wordpress-hosting.svg";
import { threeTierPlanData } from "./data/plansData";
import { BsRepeat } from "react-icons/bs";
import { Link } from "react-router-dom";

const initialArg = {
  cloud: false,
  wp: false,
  vps: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "cloud"
    ? { ...initialArg, cloud: !prevState.cloud }
    : action.type === "wp"
    ? { ...initialArg, wp: !prevState.wp }
    : action.type === "vps"
    ? { ...initialArg, vps: !prevState.vps }
    : initialArg;
};

const ThreeTierPlans = ({ style }) => {
  const [state, dispatchFn] = useReducer(reducerFn, {
    ...initialArg,
    cloud: !initialArg.cloud,
  });
  const data = [
    {
      id: "data_1",
      title: "Cloud",
      image: cloud,
      state: state.cloud,
      action: { type: "cloud" },
    },
    {
      id: "data_2",
      title: "Wordpress",
      image: wp,
      state: state.wp,
      action: { type: "wp" },
    },
    {
      id: "data_3",
      title: "VPS",
      image: vps,
      state: state.vps,
      action: { type: "vps" },
    },
  ];
  return (
    <section className="bg-white">
    <div className={`pddng ${style} space-y-16 centerContainer`}>
      <ul className="flex flex-wrap mdl:flex-nowrap justify-center rounded">
        {data.map(({ id, title, state, image, action }, index) => (
          <li
            key={id}
            className={`border flex gap-2 items-center justify-center p-2 w-full mdl:w-1/4
            ${!state && "bg-cement"} cursor-pointer ${
              index === 0 && "rounded-l"
            } ${index === 2 && "rounded-r"}`}
            onClick={() => dispatchFn(action)}
          >
            <img src={image} alt="" className="w-8" />
            <h1 className="font-medium">{`${title} Hosting`}</h1>
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap mdl:flex-nowrap justify-between gap-9 mdl:gap-0 px-0 sml:px-10 mdl:px-0">
        {threeTierPlanData.map(
          ({
            id,
            price,
            domain,
            hosting,
            bandwidth,
            isPopular,
            storage,
            subTitle,
            title,
          }) => (
            <li
              className={`w-full mdl:w-[31.5%] rounded-xl border text-center px-10 py-10 space-y-6 ${
                isPopular &&
                "border-primary border-2 shadow-xl shadow-primary/20"
              } hover:border-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20
              transition-all ease-linear`}
              id={id}
            >
              <div className="">
                <div className="flex justify-center items-center gap-2">
                  <h1 className="text-ternary font-semibold text-lg">
                    {`${
                      state.cloud
                        ? title.cloud
                        : state.wp
                        ? title.wp
                        : title.vps
                    } Hosting`}
                  </h1>
                  {isPopular && (
                    <span className="text-xs text-[#FF416F] bg-[#FFDCE5] p-1 rounded font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-quadra">{subTitle}</p>
              </div>
              <h2 className="text-primary font-medium text-[15px]">
                <span className="text-4xl font-bold">
                  {`$${
                    state.cloud ? price.cloud : state.wp ? price.wp : price.vps
                  }`}
                </span>
                {" /month"}
              </h2>
              <hr />
              <ul className="text-sm text-quadra space-y-4">
                <li>
                  <span className="font-[610]">
                    {state.cloud
                      ? hosting.cloud
                      : state.wp
                      ? hosting.wp
                      : hosting.vps}
                  </span>{" "}
                  Hosted Domains
                </li>
                <li>
                  <span className="font-[610]">
                    {state.cloud
                      ? storage.cloud
                      : state.wp
                      ? storage.wp
                      : storage.vps}{" "}
                  </span>{" "}
                  RAID 10 Storage
                </li>
                <li>
                  <span className="font-[610]">
                    {state.cloud
                      ? bandwidth.cloud
                      : state.wp
                      ? bandwidth.wp
                      : bandwidth.vps}{" "}
                  </span>{" "}
                  Bandwidth
                </li>
                <li>
                  <span className="font-[610]">
                    {state.cloud
                      ? domain.cloud
                      : state.vps
                      ? domain.vps
                      : domain.wp}{" "}
                    Free
                  </span>{" "}
                  Domain included
                </li>
                <li>
                  <span className="font-[610]">Super Fast</span> SSD Storage
                </li>
                <li>
                  <span className="font-[610]">Free</span> SSL Certificate
                </li>
                <li>99.95% Uptime</li>
                <li>24/7 Phone Support</li>
              </ul>
              <button
                className={`px-6 py-[10px] text-[15px] font-medium rounded border
              border-primary text-primary hover:bg-primary hover:text-white
              ${isPopular && `bg-primary text-white hover:bg-primary/90`}
               transition-all ease-linear`}
              >
                Purchase Now
              </button>
            </li>
          )
        )}
      </ul>
      <div className="flex justify-center items-center gap-3">
        <BsRepeat className="text-primary font-bold scale-110" />
        <h1 className="font-medium text-lg">
          Choose Your{" "}
          <Link to="#" className="text-primary">
            Compare Hosting Plans
          </Link>
        </h1>
      </div>
    </div>
    </section>
  );
};

export default ThreeTierPlans;
