import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("Loading...")

  useEffect(() => {
    const timer = setTimeout(() => {
      setName("Hello, World!")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <p>{name}</p>
  )
}

export default App
