import React, { useReducer } from "react";
import { featuresData } from "../Features/data/featuresData";
import MainContext from "../General/MainContext";
import FeatureItems from "../Features/FeatureItems";
import TechnicalSpecItems from "../TechnicalSpecification/TechnicalSpecItems";

const initialArg = {
  genFeature: false,
  techFeature: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "genFeature"
    ? { ...initialArg, genFeature: !prevState.genFeature }
    : action.type === "techFeature"
    ? { ...initialArg, techFeature: !prevState.techFeature }
    : initialArg;
};

const GenTechFeatures = () => {
  const [state, dispatchFn] = useReducer(reducerFn, {
    ...initialArg,
    techFeature: !initialArg.techFeature,
  });
  return (
    <section className={`bg-white`}>
      <div className={`pdng space-y-10 bg-white centerContainer`}>
        <MainContext
          title="Best Hosting Features For You"
          subTitle="These features come standard in all of our hosting plans. Dynamically extend imperatives through open-source quickly niche markets."
        />
        <div className="flex justify-center">
          <button
            onClick={() => dispatchFn({ type: "genFeature" })}
            className={`px-3 sml:px-6 py-3 text-sm font-medium border rounded-l ${
              state.genFeature
                ? "border-primeBlue bg-primeBlue text-white"
                : "border-primeBlue text-primeBlue"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => dispatchFn({ type: "techFeature" })}
            className={`px-3 sml:px-6 py-3 text-sm font-medium border rounded-r ${
              state.techFeature
                ? "border-primeBlue bg-primeBlue text-white"
                : "border-primeBlue text-primeBlue"
            }`}
          >
            Technical Features
          </button>
        </div>
        {state.genFeature ? (
          <FeatureItems
            pStyle="gap-5"
            style="w-full mdl:w-[47%] lg:w-[31.5%] xl:w-[32%] mb-5"
            iconStyle="scale-[7] sml:scale-[4] mdl:scale-[7]"
            data={featuresData}
          />
        ) : (
          <TechnicalSpecItems />
        )}
      </div>
    </section>
  );
};

export default GenTechFeatures;
