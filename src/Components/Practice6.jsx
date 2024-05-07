import React, { useRef } from "react";

const Practice6 = () => {
  let APIData = useRef();
  let myPTag = useRef();
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    APIData.current = await response.json();
  };
  const showAllData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  }
  return (
    <div>
     <p ref={myPTag}></p>
      <button onClick={fetchData}>call API</button>
      <button onClick={showAllData}>Show Data</button>
    </div>
  );
};

export default Practice6;
