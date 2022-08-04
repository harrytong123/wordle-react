import React from 'react'

const Win = ({height, width}) => {
  return (
    <div style = {{height: height, width: width}} className = "end">
        <h1>You Win!</h1>
        <h2>Refresh to Play Again</h2>
    </div>
  )
}

export default Win