import React, { useState } from "react";
import PlanItems from "./PlanItems";
import { sslPlanData } from "../data/sslData";

const PlanList = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  return (
    <section className="bg-white">
      <section className="pdng space-y-12 centerContainer">
        <div className="flex flex-wrap mdl:flex-nowrap justify-between gap-9 mdl:gap-0 px-0 sml:px-10 mdl:px-0">
          {sslPlanData.items.map(({ id, title, price, warranty }) => (
            <PlanItems
              id={id}
              title={title}
              price={price}
              warranty={warranty}
              showFeatures={showFeatures}
              setShowFeatures={setShowFeatures}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default PlanList;
