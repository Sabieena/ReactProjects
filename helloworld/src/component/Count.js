import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>
            <p>You clicked {count} times</p>
            </h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
            
        </div>
    )
}

export default Count
