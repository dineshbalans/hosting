import React from "react";
import MainContext from "../General/MainContext";
import { activetransferData } from "./data/activeTransferData";
import { Link } from "react-router-dom";

const ActiveTransfer = () => {
  return (
    <section className="bg-white">
      <div className={`pdng space-y-10 centerContainer`}>
        <MainContext
          title="Easy to Start and Hassle free Transfer"
          subTitle="Get Immediate Activation or Express Transfer service free of charge. Enthusiastically enhance testing procedures and cross."
        />
        <div className="w-full flex flex-wrap justify-center shadow-shadowOne border">
          {activetransferData.map(
            ({ id, isTile, Icon, title, items, bttnTxt, signUpTxt }) => (
              <div
                key={id}
                className={`w-full lg:w-1/2 p-8 sml:p-16 space-y-7 ${
                  isTile
                    ? "bg-cement/50 text-quadra"
                    : "bg-primeBlue text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 flex w-fit rounded ${
                      isTile ? "bg-primeBlue" : "bg-white"
                    }`}
                  >
                    <Icon
                      className={`scale-[1.6] ${
                        isTile ? "text-white" : "text-primeBlue "
                      }`}
                    />
                  </div>
                  <div className="flex flex-wrap item-center gap-4">
                    <h1
                      className={`text-lg font-semibold ${
                        isTile && "text-ternary"
                      }`}
                    >
                      {title}
                    </h1>
                    {isTile && (
                      <span className="text-xs text-[#FF416F] bg-[#FFDCE5] p-1 rounded font-medium">
                        Easy to Start
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-5">
                  {items.map(({ id, title, subTitle }) => (
                    <li key={id} className="space-y-1">
                      <h5 className="font-medium">{title}</h5>
                      <h6 className="text-sm">{subTitle}</h6>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    to="#"
                    className={`bttn ${
                      isTile
                        ? "bg-primeBlue text-white hover:bg-primeBlue/90"
                        : "bg-white text-primeBlue hover:bg-white/90"
                    }`}
                  >
                    {bttnTxt}
                  </Link>
                </div>
                <p className="text-sm leading-7">{signUpTxt}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ActiveTransfer;
