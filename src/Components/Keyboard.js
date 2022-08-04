import React from 'react'
import Key from './Key'
import Enter from './Enter'
import Delete from './Delete'

const Keyboard = ({checkBoard}) => {

  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map(key => <Key val = {key}/>)}
      </div>
      <div className="line2">
        {keys2.map(key => <Key val = {key}/>)}
      </div>
      <div className="line3">
        <Enter checkBoard = {checkBoard}/>
        {keys3.map(key => <Key val = {key}/>)}
        <Delete/>
      </div>
    </div>
  )
}

export default Keyboard