import React from "react";
import MainContext from "../General/MainContext";
import { packageTableData } from "./data/tableData";

const PackageTable = () => {
  return (
    <section className="bg-white">
    <section className={`pdng space-y-12 centerContainer`}>
      <MainContext
        title="Packages Details"
        subTitle="Globally incubate next-generation e-services via state of the art
            technology. Appropriately iterate quality."
      />
      <div className="overflow-scroll md:overflow-auto">
        <table className="w-full cursor-default">
          <thead>
            <tr>
              {packageTableData.thead.map(
                ({ id, title, isPopular, subTitle }) => (
                  <th className={`p-5 border w-1/4 space-y-1`} key={id}>
                    <h2 className="flex items-center justify-center gap-3 text-lg font-semibold text-ternary">
                      <span>{title}</span>
                      {isPopular && (
                        <span className="redTile rounded px-2">Popular</span>
                      )}
                    </h2>
                    <h5 className="text-quadra text-[17px] font-medium">
                      {subTitle}
                    </h5>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {packageTableData.tbody.map(({ id, items }, globeIndex) => (
              <tr key={id} className={`hover:bg-gray-200/80`}>
                {items.map(({ id, txt, Icon }, index) => (
                  <td key={id} className={`border p-3`}>
                    {Icon ? (
                      <Icon className={`mx-auto scale-120 text-primeBlue`} />
                    ) : (
                      <h3
                        className={`text-sm ${index != 0 && "text-center"} ${
                          index != 0 &&
                          globeIndex === 0 &&
                          "text-[22px] font-bold text-ternary/80 space-y-2 py-1"
                        }`}
                      >
                        <h4>
                          <span>{txt}</span>
                          {index != 0 && globeIndex === 0 && (
                            <span className="text-quadra font-medium text-sm">
                              {" "}
                              /month
                            </span>
                          )}
                        </h4>
                        {globeIndex === 0 && index != 0 && (
                          <button className="primeBttn">Get Started</button>
                        )}
                      </h3>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </section>
  );
};

export default PackageTable;
