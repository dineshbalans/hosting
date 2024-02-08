import React from "react";

const MainContext = ({
  title,
  subTitle,
  style,
  tStyle,
  stStyle,
  flagWidth = true,
}) => {
  return (
    <div
      className={`${style} flex flex-col justify-center items-center space-y-2 centerContainer`}
    >
      <h1 className={`title ${tStyle} `}>{title}</h1>
      <h5
        className={`${stStyle} sub-title text-center  ${
          flagWidth ? "w-full md:w-[72%]" : "w-[100%]"
        }`}
      >
        {subTitle}
      </h5>
    </div>
  );
};

export default MainContext;
