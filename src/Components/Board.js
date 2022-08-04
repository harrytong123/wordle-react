import React from 'react'
import { useState } from 'react'
import Row from './Row'

const Board = () => {

    return (
        <div className = 'board'>
            <Row attemptNumber = {0}/>
            <Row attemptNumber = {1}/>
            <Row attemptNumber = {2}/>
            <Row attemptNumber = {3}/>
            <Row attemptNumber = {4}/>
            <Row attemptNumber = {5}/>
        </div>
    )
}

export default Board