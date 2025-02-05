import React, {useState} from "react";


export default function TestComponent2(props) {
    let [value, setState] = useState(0);


    function handleClick() {
        setState(value + 1)
    }


    return (
        <div>
            <h1>Clicked {value} times!</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}