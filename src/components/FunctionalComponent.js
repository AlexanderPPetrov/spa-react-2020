import React, { useState, useEffect } from 'react';

const FunctionalComponent = props => {

    // Use state in a functional component
    const [count, setCount] = useState(props.count);

    // Life cycle hooks in functional component
    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [])

    return (
        <div>
            <div>{count}</div>
            <button
                onClick={() => setCount(count + props.step)} 
                type="button" 
                className="btn btn-primary"
                >Increment</button>
            <button
                onClick={() => setCount(count - props.step)} 
                type="button" 
                className="btn btn-primary"
                >Decrement</button>
        </div>
    )
}
export default FunctionalComponent