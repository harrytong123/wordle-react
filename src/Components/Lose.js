import React from 'react'

const Lose = ({height, width, correctWord}) => {
  return (
    <div style = {{height: height, width: width}} className = "end">
        <h1>You Lose</h1>   
        <h2>Correct Word: {correctWord}</h2>
        <h2>Refresh to Play Again</h2>
    </div>
  )
}

export default Lose