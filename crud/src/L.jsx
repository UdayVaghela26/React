import React, { useEffect } from 'react'

const L = () => {

  useEffect(() => {
    {localStorage.setItem("name", "local")}
  })
  return (
    <div>
      
      <h1>ls</h1>
    </div>
  )
}

export default L  
