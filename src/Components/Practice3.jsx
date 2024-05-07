import React, { useRef } from 'react';

const Practice3 = () => {
    let myImg = useRef(null);
     
    const change = () => {
        myImg.current.src="https://placehold.co/600x400?text=Hello+World";
        myImg.current.setAttribute('height','200px');
        myImg.current.setAttribute('width','300px');
    }


    return (
        <div>
            <img src="https://placehold.co/600x400" ref={myImg}></img>
            <button onClick={change}>Submit</button>
        </div>
    );
};

export default Practice3;