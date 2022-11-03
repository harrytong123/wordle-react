import React from 'react'
import { FaBackspace } from 'react-icons/fa'
import App, { AppContext } from '../App'
import { useContext } from 'react'

const Delete = ({onDelete}) => {

    const { board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile } = useContext(AppContext)

    return (
        <div className='key noSelect' id='big' onClick = {onDelete}><FaBackspace/></div>
    )
}

export default Delete