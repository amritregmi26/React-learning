import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>add</button>
      <button onClick={() => setCount(count-1)}>sub</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default App
