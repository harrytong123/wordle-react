import React from 'react'
import { useContext } from 'react'
import App, { AppContext } from '../App'

const Tile = ({ letterPos, attemptNumber }) => {
  const { board } = useContext(AppContext)
  const letter = board[attemptNumber][letterPos]
  
  return (
    <div className="letter noSelect" id = {letter['state']}>
      {letter['char']}
    </div>
  )
}

export default Tile