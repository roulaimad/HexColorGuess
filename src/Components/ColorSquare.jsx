import React from "react";

function ColorSquare({ color }) {
  return (
    <div>
      <div
        className="text-white p-10 w-[500px] h-[500px] mt-[80px] text-4xl"
        style={{ backgroundColor: color }}
      >
        {" "}
      </div>
    </div>
  );
}

export default ColorSquare;
