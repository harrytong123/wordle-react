import React from 'react'
import Tile from './Tile'

const Row = ({attemptNumber}) => {
  return (
    <div className='row'>
      <Tile letterPos={0} attemptNumber = {attemptNumber}/>
      <Tile letterPos={1} attemptNumber = {attemptNumber}/>
      <Tile letterPos={2} attemptNumber = {attemptNumber}/>
      <Tile letterPos={3} attemptNumber = {attemptNumber}/>
      <Tile letterPos={4} attemptNumber = {attemptNumber}/>
    </div>
  )
}

export default Row