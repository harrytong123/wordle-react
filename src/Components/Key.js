import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import App, { AppContext } from '../App'

const Key = ({ val }) => {

  const { board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile } = useContext(AppContext)

  const clickKey = () => {

    if (currentTile != 5) {
      const newBoard = [...board]

      newBoard[currentRow][currentTile]['char'] = val

      setCurrentTile(currentTile + 1)

      setBoard(newBoard)
    }
  }

  return (
    <div className='key noSelect' onClick={clickKey}>{val}</div>
  )
}

export default Key