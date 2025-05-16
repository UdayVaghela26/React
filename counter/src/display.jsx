import React from 'react'
import { useSelector } from 'react-redux'

const display = () => {

const counte = useSelector ((state => state.counte));
  return (
    <>
      <h1>{counte}</h1>
    </>
  )
}

export default display
