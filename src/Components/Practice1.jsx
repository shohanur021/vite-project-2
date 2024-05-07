import React from "react";
import { useRef } from "react";

const Practice1 = () => {
    
  const nameShow = useRef();
  const cityList = useRef();
  const watchAll = () => {
    nameShow.current.innerText = "Shohanur rahman";
    cityList.current.innerHTML = "<ol><li>Dhaka</li><li>Pabna</li></ol>";
  };

  return (
    <div>
      <h1 ref={nameShow}></h1>
      <div ref={cityList}></div>
      <button onClick={watchAll}>See</button>
    </div>
  );
};

export default Practice1;
 