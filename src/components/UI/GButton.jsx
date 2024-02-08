import React from "react";

const GButton = ({ context, style }) => {
  return (
    <button
      className={`bg-secondary border text-white px-7 py-3 font-medium ${style}
      text-sm rounded hover:bg-white hover:text-quadra transition-all ease-linear`}
    >
      {context}
    </button>
  );
};

export default GButton;
