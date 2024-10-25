import React from "react";
import "./middle.css";

const MiddlePart = () => {
  const boxes = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="middleDiv">
      {boxes.map((num) => (
        <div key={num} className={`box box${num}`}>
          {num}
        </div>
      ))}
       
    </div>
  );
};

export default MiddlePart;
