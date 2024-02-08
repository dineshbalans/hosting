import React from "react";
import MainContext from "../General/MainContext";
import TechnicalSpecItems from "./TechnicalSpecItems";

const TechnicalSpec = () => {
  return (
    <section className="bg-white">
      <div className={` pdng space-y-12 centerContainer`}>
        <MainContext
          title="Technical Specifications"
          subTitle="Compellingly morph quality users for granular leadership. Authoritatively build accurate technology after economically sound leadership."
        />
        <TechnicalSpecItems />
      </div>
    </section>
  );
};

export default TechnicalSpec;
