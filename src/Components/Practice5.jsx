import React, { useRef } from 'react';

const Practice5 = () => {
    
    let myheading = useRef();
    const change = () => {
        myheading.current.classList.remove('text-success','text-uppercase');
        myheading.current.classList.add('text-danger');
    }

    return (
        <div>
            <h1 className="text-success text-uppercase" ref={myheading}>Sajib</h1>
            <button onClick={change}>submit</button>
        </div>
    );
};

export default Practice5;