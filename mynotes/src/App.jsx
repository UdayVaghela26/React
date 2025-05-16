import React, { useState, useEffect } from 'react'

const App = () => {

  const [name, setName] = useState('')

  
  useEffect(() => {
    console.log(localStorage.getItem('name', name))
  }, [name])

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])



  return (
    <>
      <h1>Welcome {name || "Guest"}</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default App
