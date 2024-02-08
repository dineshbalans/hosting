import React from "react";

const FeatureItems = ({ style, pStyle, data, iconStyle, txtStyle }) => {
  return (
    <ul className={`flex flex-wrap justify-between ${pStyle}`}>
      {data.map(({ id, Icon, title, desc }) => (
        <li
          key={id}
          className={`flex justify-between gap-8 items-baseline ${style}`}
        >
          <Icon className={`translate-y-2 text-primary ${iconStyle}`} />
          <div className={`space-y-2 ${txtStyle}`}>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="leading-7">{desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeatureItems;
