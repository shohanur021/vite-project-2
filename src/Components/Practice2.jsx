import React from "react";
import { useRef } from "react";

const Practice2 = () => {
  let nameShow = useRef();
  let watchAll = () => {
    nameShow.innerText = "Shohanur rahman";
  };

  return (
    <div>
      <h1 ref={(h1) => nameShow=h1}></h1>
      <button onClick={watchAll}>See</button>
    </div>
  );
};

export default Practice2;
