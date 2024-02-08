import React from "react";
import InfoHeader from "../../../components/General/InfoHeader";
import MainContext from "../../../components/General/MainContext";
import {
  statusTilesData,
  serviceData,
  serviceStatusCmtData,
} from "./data/statusData";
import { RxInfoCircled } from "react-icons/rx";
import { GiAlarmClock } from "react-icons/gi";

const Status = () => {
  return (
    <section>
      <InfoHeader
        title="Status"
        desc="Credibly transform low-risk high-yield strategic theme areas through 
        market positioning interfaces. Rapidiously synthesize cutting-edge bandwidth."
      />
      <div className="space-y-12 pddng centerContainer">
        <MainContext
          title="Our Services Status"
          subTitle="Dynamically create extensible convergence after resource maximizing 
          potentialities. Enthusiastically restore cutting-edge scenarios vis-a-vis."
        />
        <ul className="flex flex-wrap md:flex-nowrap gap-6">
          {statusTilesData.map(({ id, number, text }) => (
            <li
              key={id}
              className="flex flex-col items-center justify-center w-full md:w-1/3 p-12 space-y-2 rounded bg-cement/90"
            >
              <h6 className="text-[28px] font-bold">{number}</h6>
              <p className="font-medium text-quadra">{text}</p>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {serviceData.map(({ id, title, countires, isOperational }) => (
            <li
              key={id}
              className="flex flex-wrap md:flex-nowrap gap-5 md:gap-0 items-center  justify-center md:justify-between p-6 transition-all ease-linear border-2 rounded cursor-pointer bg-cement/50 hover:border-b-2 hover:border-b-secondary/80 hover:shadow-xl"
            >
              <div className="w-full md:w-auto space-y-3">
                <h1 className="font-semibold text-[17px] flex gap-2 items-center w-fit mx-auto md:mx-0">
                  <span>{title}</span>
                  {isOperational && <RxInfoCircled className="text-lg" />}
                </h1>
                <ul className="flex flex-wrap justify-center gap-3 w-fit mx-auto md:mx-0">
                  {countires.map(({ id, name: country }) => (
                    <li
                      key={id}
                      className="bg-blue-500/20 text-blue-600 text-xs px-2 
                      py-[2px] rounded font-medium"
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
              <h1
                className={`px-2 py-1 rounded text-sm font-medium ${
                  isOperational
                    ? "bg-green-500/20 text-green-500"
                    : "bg-red-500/20 text-red-500"
                }`}
              >
                {isOperational ? "Operational" : "Not Operational"}
              </h1>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {serviceStatusCmtData.map(({ id, title, date, comments }, index) => (
            <li key={id}>
              <div className="flex items-center gap-4 py-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cement/90">
                  <GiAlarmClock className="scale-150" />
                </div>
                <h1 className="w-full py-2 text-lg font-medium border-b-2 text-quadra">{date}</h1>
              </div>
              <div className="pl-5 space-y-3 border-l-2">
                {comments.length != 0 ? (
                  <h2
                    className={`text-lg font-medium ${
                      index % 2 === 0 ? "text-red-600" : "text-yellow-700"
                    }`}
                  >
                    {title}
                  </h2>
                ) : (
                  <h2 className="text-quadra">No incidents reported</h2>
                )}
                <ul className="space-y-4 text-quadra ">
                  {comments.map(({ id, comment, date }) => (
                    <li key={id} className="space-y-2">
                      <h5 className="leading-7">{comment}</h5>
                      <h6 className="text-sm">{date}</h6>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Status;
