import React from "react";
import MainContext from "../General/MainContext";
import { diffTableData } from "./data/tableData";

const DifferenceTable = () => {
  return (
    <section className="bg-white">
      <div className={`pdng space-y-12 centerContainer`}>
        <MainContext
          title="Mergosoft head to head comparison"
          subTitle="Globally incubate next-generation e-services via state of the art technology.
         Appropriately iterate quality."
        />
        <div className="overflow-scroll md:overflow-auto">
          <table className="w-full cursor-default">
            <thead>
              <tr>
                {diffTableData.thead.map(({ id, logo }, index) => (
                  <th
                    className={`p-3 ${index != 0 && "border"} ${
                      index === 1 && "bg-primary"
                    } ${index === 0 ? "w-[17%]" : "w-1/6"}`}
                    key={id}
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt=""
                        className="w-24 object-contain mx-auto"
                      />
                    ) : (
                      <span> </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diffTableData.tbody.map(({ id, items }, index) => (
                <tr
                  key={id}
                  className={`${
                    index % 2 === 0 && "bg-[#F2F2F2]"
                  } hover:bg-gray-200/80`}
                >
                  {items.map(({ id, Icon, txt }, index) => (
                    <td
                      key={id}
                      className={`border p-2 ${
                        index === 1 && "bg-primeBlue text-white"
                      }`}
                    >
                      {Icon ? (
                        <Icon
                          className={`mx-auto scale-120 ${
                            index != 1 && "text-red-500"
                          }`}
                        />
                      ) : (
                        <span
                          className={`flex text-sm ${
                            index === 0 ? "justify-start" : "justify-center text-center"
                          }`}
                        >
                          {txt}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DifferenceTable;
