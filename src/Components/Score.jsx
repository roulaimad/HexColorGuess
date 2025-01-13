import React from "react";

function Score({ score }) {
  return (
    <div className=" text-black font-bold text-xl flex gap-14 mt-8">
      <div>Won: {score?.won} </div>
      <div>Lost: {score?.lost}</div>
      <div>Ratio:{score?.ratio}% </div>

    </div>
  );
}

export default Score;
