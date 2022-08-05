import React from 'react'
import Key from './Key'
import Enter from './Enter'
import Delete from './Delete'

const Keyboard = ({onClickKey, onEnter, keyMap}) => {

  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key, index) => <Key key = {index} val = {key} onClickKey = {onClickKey} keyMap = {keyMap}/>)}
      </div>
      <div className="line2">
        {keys2.map((key, index) => <Key key = {index + 100} val = {key} onClickKey = {onClickKey} keyMap = {keyMap}/>)}
      </div>
      <div className="line3">
        <Enter onEnter = {onEnter}/>
        {keys3.map((key, index) => <Key key = {index + 200} val = {key} onClickKey = {onClickKey} keyMap = {keyMap}/>)}
        <Delete/>
      </div>
    </div>
  )
}

export default Keyboard