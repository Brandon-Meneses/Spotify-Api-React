import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Curso de React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador esta en: {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guardalo para testear HMR
        </p>
      </div>
      <p className="read-the-docs">
        Da click en los logos de Vite y React para ver más
      </p>
    </>
  )
}

export default App
