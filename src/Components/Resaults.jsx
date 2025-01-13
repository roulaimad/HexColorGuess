import React from "react";

function Resaults({ resaults, isVisible }) {
  return (
    <div className="text-4xl font-bold mt-6">
      {isVisible && (
        <div>
          {resaults ? (
            <h3 className="text-green-500">Correct</h3>
          ) : (
            <h3 className="text-red-700">Wrong</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Resaults;
