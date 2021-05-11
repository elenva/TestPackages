import React, { useState } from 'react';

const App: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  return <>
    <p>{count}</p>
    <button onClick={() => setCount(() => count + 1)}>zzz</button>
  </>
};

export default App;