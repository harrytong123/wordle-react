import React from 'react'
import { FaBackspace } from 'react-icons/fa'
import App, { AppContext } from '../App'
import { useContext } from 'react'

const Delete = () => {

    const { board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile } = useContext(AppContext)

    const Delete = () => {
        if (currentTile != 0){
            const newBoard = [...board, board[currentRow][currentTile - 1]['char'] = ""]
            setBoard(newBoard)
            setCurrentTile(currentTile - 1)
        }
    }

    return (
        <div className='key noSelect' id='big' onClick = {Delete}><FaBackspace/></div>
    )
}

export default Delete