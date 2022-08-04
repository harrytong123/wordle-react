import React from 'react'
import App, { AppContext } from '../App'
import { useContext } from 'react'

const Enter = ({checkBoard}) => {
    const { board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile } = useContext(AppContext)

    const Check = () => {
        if (currentTile != 5){
            alert("Not enough characters")
        }

        else{
            checkBoard(currentRow)
            setCurrentRow(currentRow + 1)
            setCurrentTile(0)
        }
    }
    
    return (
        <div className='key noSelect' id='big' onClick= {Check}>Enter</div>
    )
}

export default Enter