import React from 'react';
import { useRef } from 'react';

const Practice4 = () => {

    let firstName, lastName = useRef();
    const change = () => {
        let fName = firstName.value;
        let lName =lastName.value;
        alert(fName+" "+lName);
    }

    return (
        <div>
            <input ref={(f) => firstName=f} placeholder='First Name'></input><br/>
            <input ref={(l) => lastName=l} placeholder='Last Name'></input><br/>
            <button onClick={change}>Submit</button>
        </div>
    );
};

export default Practice4;