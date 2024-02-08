import React from "react";

const Reason = ({ why, isLeft = false }) => {
  return (
    <section className={why.image ? "bg-secondary" : "bg-white"}>
      <div
        className={`centerContainer pdng flex ${
          isLeft ? "flex-wrap-reverse" : "flex-wrap"
        } mxl:flex-nowrap 
        justify-center gap-10 lg:justify-between items-center`}
      >
        {isLeft && (
          <div
            className={`${
              why.image ? "w-full mxl:w-1/2 flex justify-center" : "hidden"
            }`}
          >
            <img src={why.image} alt="" className="w-[500px]" />
          </div>
        )}
        <div className={`${why.image ? "w-full  mxl:w-1/2" : "w-full"}`}>
          <h1 className={`title ${why.image && "text-white"}`}>
            {why.question}
          </h1>
          {why.answer && (
            <h3
              className={`title font-light text-[27px] pt-2 pb-5 ${
                why.image && "text-white"
              }`}
            >
              {why.answer}
            </h3>
          )}
          <hr className="w-1/6 border border-primeBlue" />
          <p className={`pt-5 leading-8 ${why.image && "text-white"}`}>
            {why.description}
          </p>
        </div>
        {!isLeft && (
          <div
            className={`${
              why.image ? "w-full mxl:w-1/2 flex justify-center" : "hidden"
            }`}
          >
            <img src={why.image} alt="" className="w-[500px]" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Reason;
