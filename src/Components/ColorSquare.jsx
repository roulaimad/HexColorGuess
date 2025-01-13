import React from "react";

function ColorSquare({ color }) {
  return (
    <div>
      <div
        className="text-white p-10 w-[40vh] h-[40vh] mt-[5vh] text-4xl"
        style={{ backgroundColor: color }}
      >
      </div>
    </div>
  );

}

export default ColorSquare;
