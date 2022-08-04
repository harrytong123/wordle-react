import React from 'react'

const Key = ({ val , onClickKey}) => {

  return (
    <div className='key noSelect' onClick={() => onClickKey(val)}>{val}</div>
  )
}

export default Key