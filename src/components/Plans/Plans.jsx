import React, { useReducer, useState } from "react";
import { BsRepeat } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { offersProvided, offerFeatuesData } from "./data/plansData";
import MainContext from "../General/MainContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdSsidChart } from "react-icons/md";

const initialState = {
  monthlyBttn: false,
  yearlyBttn: false,
  biannualBttn: false,
  triennalbttn: false,
};

const reducerInitializer = (initialState) => ({
  ...initialState,
  monthlyBttn: true,
});

const reducerFn = (prevState, action) => {
  if (action.type === "monthly") {
    return {
      ...initialState,
      monthlyBttn: true,
    };
  }
  if (action.type === "yearly") {
    return {
      ...initialState,
      yearlyBttn: true,
    };
  }
  if (action.type === "biannual") {
    return {
      ...initialState,
      biannualBttn: true,
    };
  }
  if (action.type === "triennal") {
    return {
      ...initialState,
      triennalbttn: true,
    };
  }
};
const Plans = ({ showPlansBttn = false }) => {
  const [showFeatures, setShowFeatures] = useState(false);

  const data = useSelector((state) => state.data.data);
  console.log((+data[0]?.pricing[0]?.price).toFixed(2));
  const [state, dispatchFn] = useReducer(
    reducerFn,
    initialState,
    reducerInitializer
  );

  return (
  <section className="bg-white">
    <section className="pdng space-y-12 centerContainer">
      <MainContext
        title="Managed Our Hosting Price"
        subTitle="Professional hosting at an affordable price. 
          Distinctively recaptiualize principle-centered core competencies through core competencies."
      />
      {/* Plan buttons */}
      {showPlansBttn && (
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="flex justify-center">
            {state.monthlyBttn && (
              <IoCheckmarkCircleOutline
                className="text-primeBlue bg-white rounded-full 
            scale-[1.6] absolute z-50 -translate-y-2"
              />
            )}
            <button
              className={
                state.monthlyBttn ? "planBttnActive relative" : "planBttn"
              }
              onClick={() => dispatchFn({ type: "monthly" })}
            >
              {data[0]?.pricing[0].term}
              <span className="capitalize"> {data[0]?.pricing[0].period}</span>
            </button>
          </div>
          <div className="flex justify-center">
            {state.yearlyBttn && (
              <IoCheckmarkCircleOutline
                className="text-primeBlue bg-white rounded-full 
            scale-[1.6] absolute z-50 -translate-y-2"
              />
            )}
            <button
              className={state.yearlyBttn ? "planBttnActive" : "planBttn"}
              onClick={() => dispatchFn({ type: "yearly" })}
            >
              {data[0]?.pricing[1].term}
              <span className="capitalize"> {data[0]?.pricing[1].period}</span>
            </button>
          </div>
          <div className="flex justify-center">
            {state.biannualBttn && (
              <IoCheckmarkCircleOutline
                className="text-primeBlue bg-white rounded-full 
            scale-[1.6] absolute z-50 -translate-y-2"
              />
            )}
            <button
              className={state.biannualBttn ? "planBttnActive" : "planBttn"}
              onClick={() => dispatchFn({ type: "biannual" })}
            >
              {data[0]?.pricing[2].term}
              <span className="capitalize"> {data[0]?.pricing[2].period}</span>
            </button>
          </div>
          <div className="flex justify-center">
            {state.triennalbttn && (
              <IoCheckmarkCircleOutline
                className="text-primeBlue bg-white rounded-full 
            scale-[1.6] absolute z-50 -translate-y-2"
              />
            )}
            <button
              className={state.triennalbttn ? "planBttnActive" : "planBttn"}
              onClick={() => dispatchFn({ type: "triennal" })}
            >
              {data[0]?.pricing[3].term}
              <span className="capitalize"> {data[0]?.pricing[3].period}</span>
            </button>
          </div>
        </div>
      )}
      {/*v2 Packages */}
      <div className="flex flex-wrap mdl:flex-nowrap justify-between gap-9 mdl:gap-0 px-0 sml:px-10 mdl:px-0">
        {offersProvided.map(
          ({
            id,
            title,
            subTitle,
            isPopular,
            hosting,
            domain,
            price,
            bandwidth,
            storage,
            ssd,
            mysql
          }) => (
            <div
              className={`w-full mdl:w-[31.5%] rounded-xl border text-center p-8 lg:p-10 space-y-6 ${
                isPopular &&
                "border-primary border-2 shadow-xl shadow-primary/20"
              } hover:border-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20
              transition-all ease-linear`}
              key={id}
            >
              <div className="">
                <div className="flex justify-center items-center gap-2">
                  <h1 className="text-ternary font-semibold text-lg">
                    {title}
                  </h1>
                  {isPopular && (
                    <span className="text-xs text-[#FF416F] bg-[#FFDCE5] p-1 rounded font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-quadra">{subTitle}</p>
              </div>
              {/* <h2 className="text-primary font-medium text-[15px]">
                <span className="text-4xl font-bold">
                  {
                    +(state.monthlyBttn
                      ? data[0]?.pricing[0].price
                      : state.yearlyBttn
                      ? data[0]?.pricing[1].price
                      : state.biannualBttn
                      ? data[0]?.pricing[2].price
                      : data[0]?.pricing[3].price)
                  }
                </span>
                {data[0]?.pricing[0].currency}
              </h2> */}
              <select className="text-primary font-medium text-[15px] p-3 outline-none border rounded-lg">
                <option>
                  <h5>{+data[0]?.pricing[0].price}</h5>
                  <small> INR</small>
                </option>
                <option>
                  <h5>{+data[0]?.pricing[1].price}</h5>
                  <small> INR</small>
                </option>
                <option>
                  <h5>{+data[0]?.pricing[2].price}</h5>
                  <small> INR</small>
                </option>
                <option>
                  <h5>{+data[0]?.pricing[3].price}</h5>
                  <small> INR</small>
                </option>
              </select>

              <div className="mt-4 ">
                <a
                  href="https://portal.HostIT.com/order/main/index/Hosting"
                  target="_blank"
                  className={`px-4 lg:px-10 py-[10px] text-[15px] font-medium rounded border 
              border-primary text-primary hover:bg-primary hover:text-white
              ${isPopular && `bg-primary text-white hover:bg-primary/90`}
               transition-all ease-linear`}
                >
                  Purchase Now
                </a>
              </div>

              <hr />

              <ul className="text-[15px] space-y-3">
                <li className="w-fit mx-auto">
                  <div className="flex gap-4 items-center">
                    <GoRocket className="text-primeBlue scale-[1.4]" />
                    <h1>{`${ssd}GB SSD Storage`}</h1>
                  </div>
                  {showFeatures && (
                    <p className=" text-quadra text-start text-[13.5px] py-2 pl-7 transition-all ease-linear">
                      {`${ssd}GB of UK based, high speed storage.`}
                    </p>
                  )}
                </li>
                <li className="w-fit mx-auto">
                  <div className="flex gap-4 items-center">
                    <BsDatabase className="text-primeBlue scale-[1.4]" />
                    <h1>{`${mysql} MySQL Databases`}</h1>
                  </div>
                  {showFeatures && (
                    <p className=" text-quadra text-start text-[13.5px] py-2 pl-7 transition-all ease-linear">
                      {`Create up to ${mysql} MySQL database.`}
                    </p>
                  )}
                </li>
                {offerFeatuesData.map(({ id, Icon, title, desc }) => (
                  <li key={id} className="w-fit mx-auto">
                    <div className="flex gap-4 items-center">
                      <Icon className="text-primeBlue scale-[1.4]" />
                      <h1>{title}</h1>
                    </div>
                    {showFeatures && (
                      <p className=" text-quadra text-start text-[13.5px] py-2 pl-7 transition-all ease-linear">
                        {desc}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              <h6
                className={`flex gap-2 items-center justify-center mx-auto`}
                onClick={() => setShowFeatures((prevState) => !prevState)}
              >
                {showFeatures ? <IoIosArrowUp /> : <IoIosArrowDown />}
                <span>Expand Features</span>
              </h6>

              
            </div>
          )
        )}
      </div>
      <div className="flex justify-center items-center gap-3">
        <BsRepeat className="text-primary font-bold scale-110" />
        <h1 className="font-medium text-lg">
          Choose Your{" "}
          <Link to="/" className="text-primary">
            Compare Hosting Plans
          </Link>
        </h1>
      </div>
    </section>
    </section>
  );
};

export default Plans;

// Not Being Used By this component (v1 Packages)
{
  /* <div className="flex justify-between">
  {offersProvided.map(
    ({
      id,
      title,
      subTitle,
      isPopular,
      hosting,
      domain,
      price,
      bandwidth,
      storage,
    }) => (
      <div
        className={`w-[31.5%] rounded-xl border text-center px-10 py-10 space-y-6 ${
          isPopular && "border-primary border-2 shadow-xl shadow-primary/20"
        } hover:border-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20
              transition-all ease-linear`}
        key={id}
      >
        <div className="">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-ternary font-semibold text-lg">{title}</h1>
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
                  {
                    +(state.monthlyBttn
                      ? data[0]?.pricing[0].price
                      : state.yearlyBttn
                      ? data[0]?.pricing[1].price
                      : state.biannualBttn
                      ? data[0]?.pricing[2].price
                      : data[0]?.pricing[3].price)
                  }
                </span>
                {data[0]?.pricing[0].currency}
              </h2>
        <select className="text-primary font-medium text-[15px] p-3 outline-none border rounded-lg">
          <option>
            <h5>{+data[0]?.pricing[0].price}</h5>
            <small> INR</small>
          </option>
          <option>
            <h5>{+data[0]?.pricing[1].price}</h5>
            <small> INR</small>
          </option>
          <option>
            <h5>{+data[0]?.pricing[2].price}</h5>
            <small> INR</small>
          </option>
          <option>
            <h5>{+data[0]?.pricing[3].price}</h5>
            <small> INR</small>
          </option>
        </select>
        <hr />
        <ul className="text-sm text-quadra space-y-4">
          <li>
            <span className="font-[610]">{hosting}</span> Hosted Domains
          </li>
          <li>
            <span className="font-[610]">{storage} GB</span> RAID 10 Storage
          </li>
          <li>
            <span className="font-[610]">{bandwidth} GB</span> Bandwidth
          </li>
          <li>
            <span className="font-[610]">{domain} Free</span> Domain included
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
        <div>
          <a
            href="https://portal.HostIT.com/order/main/index/Hosting"
            target="_blank"
            className={`px-6 py-[10px] text-[15px] font-medium rounded border
              border-primary text-primary hover:bg-primary hover:text-white
              ${isPopular && `bg-primary text-white hover:bg-primary/90`}
               transition-all ease-linear`}
          >
            Purchase Now
          </a>
        </div>
      </div>
    )
  )}
</div>; */
}
