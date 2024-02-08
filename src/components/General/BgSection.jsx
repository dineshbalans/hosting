import React from "react";
import heroBg from "../../assets/img/hero-bg-4.jpg";

const BgSection = ({ children }) => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-fixed bg-center sml:bg-left-top bg-no-repeat bg-cover lg:bg-contain"
    >
      {children}
    </section>
  );
};

export default BgSection;
