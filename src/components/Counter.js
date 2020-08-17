import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Le compteur est  à 
      <input type="number" value={value}  onChange={(e) => setValue(parseInt(e.target.value))}
        /></p>
      <button onClick={() => setValue(value + 1)}>
        +1
      </button>
      <button onClick={() => setValue(value - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;