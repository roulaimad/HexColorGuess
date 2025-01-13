import React from "react";

function ColorBox({ color, handleColorBoxClick, isEnabled, correctColor }) {
  return (
    <div onClick={() => handleColorBoxClick(color)} className="cursor-pointer">
      <button
        disabled={isEnabled}
        className="bg-slate-300 text-2xl font-bold p-7"
        style={{
          backgroundColor:
            isEnabled && color === correctColor
              ? "#00ff00"
              : isEnabled && color != correctColor
              ? "#ffdddd"
              : "#dddddd",
        }}
      >
        {color}
      </button>
    </div>
  );
}

export default ColorBox;
