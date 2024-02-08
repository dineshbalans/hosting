import React from "react";

const Highlights = ({ title, subTitle, items }) => {
  return (
    <section className="bg-white centerContainer pdng space-y-3">
      <h1 className="title">{title}</h1>
      {subTitle && (
        <h3 className="title font-light text-[27px] pb-5">{subTitle}</h3>
      )}
      <hr className="w-1/4 border border-primeBlue" />
      <ul className="flex flex-wrap justify-between gap-9 pt-9">
        {items.map(({ id, Icon, itemTitle, itemDesc }) => (
          <li className="md:w-[45%] lg:w-[30%] mb-6" key={id}>
            <Icon className="text-primeBlue scale-[2] translate-x-2" />
            <h5 className="pt-6 pb-3 text-[17px] font-medium">{itemTitle}</h5>
            <h6 className="leading-7">{itemDesc}</h6>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Highlights;
