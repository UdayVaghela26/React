import React,{ useEffect, useState } from 'react'


const Count = () => {
    const [count, setCount] =useState(0)

    let plus = () =>{
        setCount(count + 1)
    }

    let min = () =>{
        setCount(count - 1)
    }
    useEffect(() =>{
        alert("hiiii")
    })

  return (
    <>
        <h1>count -{count}</h1>
        <button onClick={plus}>click to +</button>
        <button onClick={min}>click to -</button>
    </>
  )
}

export default Count
