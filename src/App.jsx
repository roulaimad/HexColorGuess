import { useEffect } from "react";
import { useState } from "react";
import ColorBox from "./Components/ColorBox";
import ColorSquare from "./Components/ColorSquare";
import Navbar from "./Components/Navbar";
import Resaults from "./Components/Resaults";

function App() {
  const [colorList, setColorList] = useState([]);
  const [correctColor, setCorrectColor] = useState("");
  const [resaults, setResaults] = useState();
  const [resaultsVisibility, setResaultsVisibility] = useState(false);

  function generateHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    const hexColor = `#${hex.padStart(6, "0")}`;
    return hexColor;
  }

  function pickColors() {
    [...Array(3)].forEach(() => {
      setColorList((prev) => {
        const hexColor = generateHexColor();
        return [...prev, hexColor];
      });
    });
  }

  function pickRandomCorrectColor() {
    const index = Math.floor(Math.random() * 3);
    setCorrectColor(colorList[index]);
    console.log("index:", index);
    return colorList[index];
  }

  const handleColorBoxClick = (color) => {
    if (color === correctColor) {
      console.log("Correct!!!");
      setResaults(true);
    } else {
      console.log("Wrooong!");
      setResaults(false);
    }
    setResaultsVisibility(true);
    setTimeout(() => {
      setColorList([]);
      setCorrectColor("");
      pickColors();
      setResaultsVisibility(false);
    }, 2500);
  };

  useEffect(() => {
    setColorList([]);
    pickColors();
  }, []);

  useEffect(() => {
    pickRandomCorrectColor();
  }, [colorList]);

  useEffect(() => {
    console.log("Color List:", colorList);
    console.log("Correct Color:", correctColor);
  }, [correctColor]);

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <ColorSquare color={correctColor} />

      <div className="flex flex-row items-center gap-4 mt-8">
        {colorList?.map((item, index) => (
          <ColorBox
            key={index}
            index={index}
            color={item}
            handleColorBoxClick={handleColorBoxClick}
            isEnabled={resaultsVisibility}
            correctColor={correctColor}
          />
        ))}
      </div>
      <Resaults resaults={resaults} isVisible={resaultsVisibility} />
    </div>
  );
}

export default App;
