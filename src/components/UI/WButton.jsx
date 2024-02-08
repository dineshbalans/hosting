import React from "react";

const WButton = ({ context }) => {
  return (
    <button
      className="bg-white border text-quadra px-7 py-3 font-medium 
            text-sm rounded hover:bg-secondary hover:text-white transition-all ease-linear"
    >
      {context}
    </button>
  );
};

export default WButton;
