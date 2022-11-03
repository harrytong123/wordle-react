import './App.css';
import { useState, useEffect } from 'react';
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

  const dict = new Map([
    ["Q", ""],
    ["W", ""],
    ["E", ""],
    ["R", ""],
    ["T", ""],
    ["Y", ""],
    ["U", ""],
    ["I", ""],
    ["O", ""],
    ["P", ""],
    ["A", ""],
    ["S", ""],
    ["D", ""],
    ["F", ""],
    ["G", ""],
    ["H", ""],
    ["J", ""],
    ["K", ""],
    ["L", ""],
    ["Z", ""],
    ["X", ""],
    ["C", ""],
    ["V", ""],
    ["B", ""],
    ["N", ""],
    ["M", ""],
  ])

  const [board, setBoard] = useState(startingBoard)
  const { innerWidth, innerHeight } = window;
  const [currentRow, setCurrentRow] = useState(0)
  const [currentTile, setCurrentTile] = useState(0)
  const [correctWord, setCorrectWord] = useState(random_word)
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)
  const [keyMap, setKeyMap] = useState(dict)

  useEffect(() => {
    let flag = true;

    const pressKey = (e) => {
      if (flag) {
        if (e.keyCode <= 90 && e.keyCode >= 65) {
          const val = String.fromCharCode(e.keyCode);
          flag = false;
          clickKey(val);
        }
        if (e.keyCode === 8) {
          deleteKey();
        }
        if (e.keyCode === 13){
          enterKey();
        }
      }
    }

    const liftKey = () => {
      flag = true;
    }

    document.addEventListener("keydown", pressKey);
    document.addEventListener("keyup", liftKey);

    return (() => {
      document.removeEventListener("keydown", pressKey);
      document.removeEventListener("keyup", liftKey);
    });
  }, [currentTile]);


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
      if (almost[i] && !correct[i]) {
        newBoard[checkRow][i]['state'] = "almost"
        if (keyMap.get(newBoard[checkRow][i]['char']) != "correct") {
          keyMap.set(newBoard[checkRow][i]['char'], "almost")
        }
      }
      if (correct[i]) {
        newBoard[checkRow][i]['state'] = "correct"
        keyMap.set(newBoard[checkRow][i]['char'], "correct")
      }
      if (!almost[i] && !correct[i]) {
        newBoard[checkRow][i]['state'] = "error"
        keyMap.set(newBoard[checkRow][i]['char'], "error")
      }
    }


    setBoard(newBoard)
    checkGame(checkRow)
  }

  const clickKey = (val) => {
    if (currentTile != 5) {
      const newBoard = [...board]

      newBoard[currentRow][currentTile]['char'] = val

      setCurrentTile(currentTile + 1);

      setBoard(newBoard)
    }
  }

  const checkGame = (rowtocheck) => {
    const row = board[rowtocheck]
    let check = true

    for (let i = 0; i < 5; i++) {
      if (row[i]['char'] != correctWord[i]) {
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

  const deleteKey = () => {
    if (currentTile != 0) {
      const newBoard = [...board, board[currentRow][currentTile - 1]['char'] = ""]
      setBoard(newBoard)
      setCurrentTile(currentTile - 1)
    }
  }

  return (
    <div className="App" tabIndex="0">
      {lose && <Lose height={innerHeight} width={innerWidth} correctWord={correctWord.join("")} />}
      {win && <Win height={innerHeight} width={innerWidth} />}
      <nav>
        <h1 className="noSelect">Harry's Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentRow, setCurrentRow, currentTile, setCurrentTile, correctWord }}>
        <div style={{ height: innerHeight, width: innerWidth, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Board />
          </div>
          <Keyboard onClickKey={clickKey} onEnter={enterKey} onDelete = {deleteKey} keyMap={keyMap} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
