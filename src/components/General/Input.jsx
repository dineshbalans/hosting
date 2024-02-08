import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Input = ({ style }) => {
  return (
    <section className={`flex ${style} `}>
      <input
        type="text"
        className="rounded-l w-full border
              px-6 placeholder:text-sm text-ternary"
        placeholder="example.com"
      />
      <button
        className="bg-primeBlue text-white px-3 sml:px-6 py-3 flex 
            items-center gap-2 rounded-r"
      >
        <IoSearchSharp className="scale-110" />
        <span>Search</span>
      </button>
    </section>
  );
};

export default Input;
