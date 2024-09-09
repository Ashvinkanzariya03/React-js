import React, { useState } from "react";

function Mousemove() {
  const [position, setposition] = useState({ X: 0, Y: 0 });

  const test = (e) => {
    console.log(e);

    setposition({
      X: e.clientX,
      Y: e.clientY,
    });
  };

  window.addEventListener("mousemove", test);
  return (
    <div
      style={{
        height: "150px",
        width: "150px",
        background: "blue",
        transform: `translate(${position.X}px,${position.Y}px)`,
        position: "absolute",
        border: "20px solid lightblue",
        top: -70,
        left: -70,
        borderRadius: "50%",
      }}
    ></div>
  );
}

export default Mousemove;

