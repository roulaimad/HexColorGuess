import { useEffect, useReducer } from "react";
import { useState } from "react";
import ColorBox from "./Components/ColorBox";
import ColorSquare from "./Components/ColorSquare";
import Navbar from "./Components/Navbar";
import Resaults from "./Components/Resaults";
import Score from "./Components/Score";
import ScoreReducer from "./reducers/ScoreReducer";

function App() {
  const [colorList, setColorList] = useState([]);
  const [correctColor, setCorrectColor] = useState("");
  const [resaults, setResaults] = useState();
  const [resaultsVisibility, setResaultsVisibility] = useState(false);
  const initialValue = {
    won: 0,
    lost: 0,
    ratio: 0,
  };
  const [score, dispatch] = useReducer(ScoreReducer, initialValue);
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
    return colorList[index];
  }

  const handleColorBoxClick = (color) => {
    if (color === correctColor) {
      setResaults(true);
      dispatch({ type: "won" });
    } else {
      setResaults(false);
      dispatch({ type: "lost" });
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

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Score score={score} />
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
