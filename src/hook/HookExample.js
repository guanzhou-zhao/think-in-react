import React, { useState } from 'react';

function HookExample() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default HookExample;
