import './App.css';
import { useState } from 'react';
import { startingBoard } from './Words'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext } from 'react'

export const AppContext = createContext()

function App() {

  const [board, setBoard] = useState(startingBoard)
  const { innerWidth, innerHeight } = window;
  const [currentRow, setCurrentRow] = useState(0)
  const [currentTile, setCurrentTile] = useState(0)
  const [correctWord, setCorrectWord] = useState(["I", "R", "A", "T", "E"])

  const checkBoard = (checkRow) => {

    const newBoard = [...board]

    const row = board[checkRow]
    const almost = row.map(tile => {
      return correctWord.includes(tile['char'])
    })

    for (let i = 0; i < 5; i++){
      if (almost[i]){
          newBoard[checkRow][i]['state'] = "almost"
      }
    }

    const correct = [false, false, false, false, false]
    for (let i = 0; i < 5; i++){
      if (correctWord[i] == row[i]['char']){
        correct[i] = true;
      }
    }

    setBoard(newBoard)
  }

  return (
    <div className="App">
      <nav>
        <h1 className="noSelect">Harry's Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile, correctWord }}>
        <div style={{ height: innerHeight, width: innerWidth, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Board />
          </div>
          <Keyboard checkBoard={checkBoard} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
