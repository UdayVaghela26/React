import React from 'react'
import cookie from 'js-cookie'

const C = () => {
  return (
    <div>
      {cookie.set("name", "cookie" , { expires: 7 })}
    </div>
  )
}

export default C
