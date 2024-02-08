import React from "react";
import fiveStar from "../assets/svg/stars-5.svg";
import trustPilot from "../assets/svg/trustpilot_logo_white.svg";

const Star = () => {
  return (
    <div className="w-32 space-y-4">
      <img src={trustPilot} alt="" />
      <img src={fiveStar} alt="" />
    </div>
  );
};

export default Star;
