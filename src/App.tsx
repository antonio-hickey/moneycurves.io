import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ExampleChart from "./components/exampleChart"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <ExampleChart
          xAxis={["ES", "ZN", "GE", "NG", "CL"]}
          yAxis={[1215.50, 7818.25, -120.25, -1025.75, -375.00]}
        />
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
