import React, {useState, useEffect} from 'react';

function TestComponent(){
const [count, setCount] = useState(5);
const handleClick = () =>{
    setCount(count + 2);
};
    return (
        <div>
            <button onClick={handleClick}>This is a button</button>
            <textarea value={count}></textarea>
        </div>
    );
}

export default TestComponent;