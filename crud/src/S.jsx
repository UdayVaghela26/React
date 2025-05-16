import React from 'react'

const S = () => {
  return (
    <div>
      {sessionStorage.setItem("name", "session")}
      <h1>ss</h1>
    </div>
  )
}

export default S;
