import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black h-screen m-0">
        <div className="flex items-center justify-center h-96">
          <img src="https://upload.wikimedia.org/wikipedia/en/4/48/Vaudevillevillain.jpg" className="object-center" alt="" />
        </div>
        <code>Ha Ha Ha!</code>
      </div>
    </>
  )
}

export default App
