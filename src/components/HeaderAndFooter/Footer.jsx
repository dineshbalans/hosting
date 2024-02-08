import React, { useState } from "react";
import {
  securedBrandData,
  footerData,
  paymentMethodImages,
} from "./data/footerData";
import { Link } from "react-router-dom";

/**
 * Footer Component
 *
 * Renders the footer section of the page.
 * The footer includes secured brand logos, menu items, and copyright information.
 */
const Footer = () => {
  const [visible, setVisible] = useState(0);
  return (
    <footer className="bg-secondary">
      {/* Secured Brand Logos */}
      <div className="px-12 lg:px-[75px] py-16 centerContainer flex flex-wrap lg:flex-nowrap gap-10 text-white">
        <div className="w-full lg:w-[27%] space-y-3">
          {/* Section title */}
          <h1
            className="text-left font-semibold"
            onClick={() => visible === 11 && setVisible(0)}
          >
            SECURED BY
          </h1>
          <div className="flex flex-wrap items-baseline w-full md:w-1/2 lg:w-full">
            {/* Display secured brands */}
            {securedBrandData.map(({ id, brand }) => (
              <img
                src={brand}
                alt=""
                key={id}
                className=" w-1/2 lg:w-1/2 pr-5 py-1 cursor-text"
                onClick={() => setVisible((prevState) => prevState + 1)}
              />
            ))}
          </div>
        </div>

        {/* Footer Menu */}
        <div className="w-full lg:w-[72%] flex flex-wrap md:flex-nowrap gap-10 justify-between">
          {/* Iterate over each item in footerData */}
          {footerData.map(({ id, items, title }) => (
            <div key={id} className="w-full sml:w-1/3 md:w-1/4 space-y-6">
              {/* Display the title */}
              <h1
                className="uppercase font-semibold"
                onClick={() =>
                  visible > 11 && setVisible((prevState) => prevState - 1)
                }
              >
                {title}
              </h1>
              <ul className="space-y-3">
                {/* Iterate over each item in items */}
                {items.map(({ id, item }) => (
                  <li key={id}>
                    {/* Display the item as a link */}
                    <Link key={id} className="text-sm font-light">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Information */}
      <div className="bg-white">
        <div className="px-12 lg:px-[75px] py-5  centerContainer text-quadra flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between items-center">
          {/* Header */}
          <h6 className="font-medium text-sm text-center lg:text-left">
            {/* Copyright */}
            Copyrights © 2023. All rights reserved by {/* Company Name */}
            <span className="text-primeBlue">Mergosoft</span>
          </h6>

          {/* Payment Method Images */}
          <div className="flex gap-3">
            {paymentMethodImages.map(({ id, image }) => (
              // Individual Payment Method Image
              <img
                src={image}
                alt=""
                key={id}
                className="w-10 sml:w-12 object-contain"
              />
            ))}
          </div>
          {visible === 11 && (
            <a
              href="https://dineshbalan.vercel.app/"
              target="_blank"
              className="cursor-default md:absolute right-0 -translate-x-11"
              onClick={() => setVisible(0)}
            >
              ......
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
