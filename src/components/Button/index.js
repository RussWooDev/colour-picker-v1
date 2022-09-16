import { useState } from "react";

const colourList = ["red", "green", "yellow", "blue", "orange"];

const Button = () => {
  const [colours, setColour] = useState(colourList);

  const handleClick = (color) => {
    setColour(color);
  };
  //perhaps lets use a switch statement
  return (
    <div>
      {colourList.map((colour) => {
        return (
          <div
            style={{
              backgroundColor: colours
            }}
          >
            <button onClick={() => handleClick(colour)}> {colour} </button>
          </div>
        );
      })}
    </div>
  );
};

export default Button;
