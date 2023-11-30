import { useState } from "react";
import { Input } from "./Input";

function App() {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    const updatedColors = [...colors];

    updatedColors.splice(index, 0, newColor);

    setColors(updatedColors);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default App;
