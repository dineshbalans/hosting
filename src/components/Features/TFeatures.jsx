import React, { useReducer } from "react";
import sharedHosting from "./assets/svg/icon-shared-hosting.svg";
import wordpressHosting from "./assets/svg/icon-wordpress-hosting.svg";
import dedicatedHosting from "./assets/svg/icon-dadicate-hosting.svg";

const initialArg = {
  wordPressHosting: false,
  dedicatedHosting: false,
  sharedHosting: false,
};

const reducerFn = (prevState, action) => {
  return action.type === "wordPress"
    ? { ...initialArg, wordPressHosting: action.payload }
    : action.type === "dedicated"
    ? { ...initialArg, dedicatedHosting: action.payload }
    : action.type === "shared"
    ? { ...initialArg, sharedHosting: action.payload }
    : initialArg;
};

const TFeatures = () => {
  const [feature, dispatchFn] = useReducer(reducerFn, {
    ...initialArg,
    wordPressHosting: !initialArg.wordPressHosting,
  });

  //   DATA
  const tFeaturesData = [
    {
      id: "tfd_1",
      img: wordpressHosting,
      isList: true,
      state: feature.wordPressHosting,
      typeAction: { type: "wordPress", payload: true },
      tileTxt: "Wordpress Hosting",
      title: "Better support for your wordpress website",
      subTitle:
        "Progressively matrix mission-critical core competencies without magnetic paradigms. Appropriately develop flexible ROI without goal-oriented customer service. Seamlessly.",
      items: [
        {
          id: "tfdi_1",
          title: "WordPress Optimization",
          liItems: [
            {
              id: "tfdli_1",
              liItem: "Latest and Fastest PHP/MySQL version",
            },
            {
              id: "tfdli_2",
              liItem: "SSD-only cloud with guaranteed CPU",
            },
            {
              id: "tfdli_3",
              liItem: "HTTP/2 and free CloudFlare CDN",
            },
            {
              id: "tfdli_4",
              liItem: "Observer Resource Monitoring",
            },
          ],
        },
        {
          id: "tfdi_2",
          title: "Extra RocketBooster",
          liItems: [
            {
              id: "tfdli_1",
              liItem: "Varnish Static and Dynamic caching",
            },
            {
              id: "tfdli_2",
              liItem: "LiteSpeed LSPHP Technology",
            },
            {
              id: "tfdli_3",
              liItem: "Opcode Caching",
            },
            {
              id: "tfdli_4",
              liItem: "Optimized static content processing",
            },
          ],
        },
      ],
    },
    {
      id: "tfd_2",
      img: dedicatedHosting,
      isList: false,
      state: feature.dedicatedHosting,
      typeAction: { type: "dedicated", payload: true },
      tileTxt: "Dedicated Hosting",
      title: "Resource monitoring that actually matters",
      subTitle:
        "Completely streamline magnetic collaboration and idea-sharing with market positioning portals. Objectively pontificate intuitive value whereas client-centered deliverables.",
      items: [
        {
          id: "tfdi_1",
          title: "Website Monitoring",
          liItems: [
            {
              id: "tfdli_1",
              liItem:
                "See exactly how much resources your website is using to optimize performance and reduce cost scenarios pandemic mindshare.",
            },
          ],
        },
        {
          id: "tfdi_2",
          title: "Optimization Reports",
          liItems: [
            {
              id: "tfdli_1",
              liItem:
                "Daily reports with detailed statistics and optimization tips to improve Rapidiously orchestrate multimedia based.",
            },
          ],
        },
      ],
    },
    {
      id: "tfd_3",
      img: sharedHosting,
      isList: true,
      state: feature.sharedHosting,
      typeAction: { type: "shared", payload: true },
      tileTxt: "Shared Hosting",
      title: "Better wordpress security",
      subTitle:
        "Efficiently reintermediate long-term high-impact channels without equity invested technology. Quickly brand backend web-readiness without cross-platform e-services.",
      items: [
        {
          id: "tfdi_1",
          title: "Exclusive Features",
          liItems: [
            {
              id: "tfdli_1",
              liItem: "Daily Backups & free backup restore",
            },
            {
              id: "tfdli_2",
              liItem: "Security Updates and Patching",
            },
            {
              id: "tfdli_3",
              liItem: "Performance and resource monitoring",
            },
            {
              id: "tfdli_4",
              liItem: "Step-by-step Tutorials & Knowledgebase",
            },
          ],
        },
        {
          id: "tfdi_2",
          title: "WordPress Services",
          liItems: [
            {
              id: "tfdli_1",
              liItem: "1-click WordPress Installation",
            },
            {
              id: "tfdli_2",
              liItem: "Free WordPress Transfer",
            },
            {
              id: "tfdli_3",
              liItem: "Themes and plugins installation",
            },
            {
              id: "tfdli_4",
              liItem: "Malware Scan & Reports",
            },
          ],
        },
      ],
    },
  ];

  return (
  <section className="bg-white">
    <div className={`pddng space-y-10 centerContainer`}>
      <ul className="flex flex-wrap md:flex-nowrap w-full md:w-fit">
        {tFeaturesData.map(({ id, tileTxt, img, typeAction, state }) => (
          <li
            key={id}
            onClick={() => dispatchFn(typeAction)}
            className={`w-full md:w-auto flex gap-2 border px-6 py-[10px]  items-center
            cursor-pointer hover:text-primary transition-colors ease-linear
            ${state ? "bg-white" : "bg-[#F8F9FA]"}`}
          >
            <img src={img} alt="" className="w-6" />
            <span className="text-[15px] font-medium">{tileTxt}</span>
          </li>
        ))}
      </ul>
      {tFeaturesData.map(
        ({ id, img, title, state, subTitle, items, isList }) => (
          <React.Fragment key={id}>
            {state && (
              <div className="flex flex-wrap-reverse lg:flex-nowrap justify-between items-center text-quadra">
                <div className="w-full lg:w-[65%] space-y-7">
                  <div className="space-y-[10px]">
                    <h1 className="text-[27px] font-bold text-ternary leading-8">
                      {title}
                    </h1>
                    <h3>{subTitle}</h3>
                  </div>
                  <div className="flex flex-wrap gap-6 justify-between">
                    {items.map(({ id, title, liItems }) => (
                      <div key={id} className="w-full md:w-[45%] space-y-3">
                        <h2 className="text-lg font-semibold text-ternary">
                          {title}
                        </h2>
                        <ul
                          className={`${
                            isList
                              ? "list-disc list-inside space-y-3"
                              : "list-none"
                          }`}
                        >
                          {liItems.map(({ id, liItem }) => (
                            <li
                              key={id}
                              className={`${
                                isList ? "text-sm" : "text-[15px]"
                              }`}
                            >
                              {liItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button className="primeBttn">Start Now</button>
                    <button className="primeWhiteBttn">Pricing Plans</button>
                  </div>
                </div>
                <img src={img} alt="" className="w-full pb-10 lg:pb-0 lg:w-[30%]" />
              </div>
            )}
          </React.Fragment>
        )
      )}
    </div>
    </section>
  );
};

export default TFeatures;
