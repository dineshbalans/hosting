import React from "react";
import { FiArrowRight } from "react-icons/fi";
import InfoHeader from "../../../components/General/InfoHeader";
import MainContext from "../../../components/General/MainContext";
import { blogData } from "./data/blogData";

const Blog = () => {
  return (
    <section className="space-y-12 pb-16">
      <InfoHeader
        title="Blog"
        desc="Authoritatively deploy empowered total linkage vis-a-vis fully 
        researched channels. Dramatically extend inexpensive supply chains for
        distinctive e-tailers."
      />

      <div className="space-y-8 centerContainer">
        <MainContext
          title="Our Latest News"
          subTitle="Enthusiastically drive revolutionary opportunities before emerging
           leadership. Distinctively transform tactical methods of empowerment via resource 
           sucking core."
        />
        <ul className="flex flex-wrap justify-between px-6 md:px-12 lg:px-[75px]">
          {blogData.map(
            ({
              id,
              URL,
              DMY,
              comments,
              share,
              title,
              desc,
              category,
              tileStyle,
            }) => (
              <li key={id} className="w-full lg:w-[31%] mb-7 bg-cement/50">
                <img src={URL} alt="" className="w-full"/>
                <div className="p-2 md:p-6 bg-white space-y-3">
                  <div className="flex text-xs font-medium gap-5 text-ternary/80">
                    <h6 className="w-fit text-center">{DMY}</h6>
                    <h6 className="w-fit text-center">{`${comments} comments`}</h6>
                    <h6 className="w-fit text-center">{`${share} share`}</h6>
                  </div>
                  <h3 className="font-semibold hover:text-primeBlue transition-all ease-linear">
                    {title}
                  </h3>
                  <p className="text-[15px]">{desc}</p>
                  <h6 className="flex items-center gap-1 cursor-pointer group">
                    <span className="text-sm group-hover:text-primeBlue transition-all ease-linear">
                      Read More
                    </span>
                    <FiArrowRight className="text-primeBlue group-hover:translate-x-2 transition-all ease-linear" />
                  </h6>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
