import React from 'react'

const Key = ({ val, onClickKey, keyMap }) => {

  const state = keyMap.get(val)

  return (
    <div className = {`key noSelect`} id = {state} onClick={() => onClickKey(val)}>{val}</div>
  )
}

export default Key