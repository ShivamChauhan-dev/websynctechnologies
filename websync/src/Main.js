import React from "react";
import "./App.css";

const iconRows = [
  ["kotlin", "java", "firebase", "docker", "css3"], // Row 1
  ["ethereum", "ccavenue", "wordpress", "maps"],   // Row 2
  ["react", "aws", "laravel", "c", "angular"], // Row 3 

];

function App() {
  return (
    <div className="icon-container">
      {iconRows.map((row, rowIndex) => (
        <div className="icon-row" key={rowIndex}>
          {row.map((icon, iconIndex) => (
            <div className="icon" key={iconIndex}>
              <img src={`path-to-your-icons/${icon}.png`} alt={icon} />
            </div>
          ))}
        </div>
        
      ))}

    </div>
  );
}

export default App;
