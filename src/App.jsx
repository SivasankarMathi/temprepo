import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Hello, React! ⚛️</h1>
      <p>A simple counter app built with React and Vite.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </main>
  )
}

export default App
