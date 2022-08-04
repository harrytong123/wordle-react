import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { startingBoard, validWordList, possibleWordList } from './Words'
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { createContext } from 'react'
import Win from './Components/Win';
import Lose from './Components/Lose';

export const AppContext = createContext()

const random_index = Math.floor(Math.random() * 2314)

const random_word = (possibleWordList[random_index].toUpperCase()).split("")

function App() {

  const [board, setBoard] = useState(startingBoard)
  const { innerWidth, innerHeight } = window;
  const [currentRow, setCurrentRow] = useState(0)
  const [currentTile, setCurrentTile] = useState(0)
  const [correctWord, setCorrectWord] = useState(random_word)
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  console.log(correctWord)

  const checkBoard = (checkRow) => {

    let newBoard = [...board]

    let row = board[checkRow]
    const almost = row.map(tile => {
      return correctWord.includes(tile['char'])
    })

    let correct = [false, false, false, false, false]
    for (let i = 0; i < 5; i++) {
      if (correctWord[i] == row[i]['char']) {
        correct[i] = true;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (almost[i]) {
        newBoard[checkRow][i]['state'] = "almost"
      }
      if (correct[i]) {
        newBoard[checkRow][i]['state'] = "correct"
      }
      if (!almost[i] && !correct[i]) {
        newBoard[checkRow][i]['state'] = "error"
      }
    }


    setBoard(newBoard)
    console.log(checkRow)
    checkGame(checkRow)
  }

  const clickKey = (val) => {
    if (currentTile != 5) {
      const newBoard = [...board]

      newBoard[currentRow][currentTile]['char'] = val

      setCurrentTile(currentTile + 1)

      setBoard(newBoard)
    }
  }

  const checkGame = (rowtocheck) => {
    console.log(rowtocheck)
    const row = board[rowtocheck]
    let check = true

    for (let i = 0; i < 5; i++) {
      if (row[i]['char'] != correctWord[i]) {
        console.log(row[i]['char'])
        check = false
      }
    }

    if (check) {
      setWin(true)
    }

    else {
      if (rowtocheck == 5) {
        setLose(true)
      }
    }
  }

  const enterKey = () => {
    if (currentTile != 5) {
      alert("Not enough characters")
    }

    else {
      const rowarray = board[currentRow].map(tile => {
        return tile['char']
      })
      const rowstring = rowarray.join("").toLowerCase()

      console.log(rowstring)

      if (!validWordList.includes(rowstring)) {
        alert('Invalid Word')
      }

      else {
        const temp = currentRow
        checkBoard(currentRow)
        setCurrentRow(currentRow + 1)
        setCurrentTile(0)
        if (temp == 5) {
          checkGame()
        }
      }
    }
  }

  return (
    <div className="App">
      {lose && <Lose height={innerHeight} width={innerWidth} />}
      {win && <Win height={innerHeight} width={innerWidth} correctWord = {correctWord}/>}
      <nav>
        <h1 className="noSelect">Harry's Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile, correctWord }}>
        <div style={{ height: innerHeight, width: innerWidth, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Board />
          </div>
          <Keyboard onClickKey={clickKey} onEnter={enterKey} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
