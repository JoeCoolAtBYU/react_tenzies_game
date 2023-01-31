import './App.css';
import Die from "./components/die"
import {useEffect, useState} from "react";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


// put real dots on dice  - DONE
// track the number of rolls - DONE
// track the time it took to win
// Save your best time to local storage.

function App() {
  const [dice, setDice] = useState(allNewDice)
  const [tenzie, setTenzie] = useState(false)
  const [numRolls, setNumRolls] = useState(0);


  useEffect(() => {
    let isWon = dice.filter(dice => dice.isHeld === true)
    if (isWon.length === 10) {
      setTenzie(true)
      console.log("You Won!!!!")
    }

  }, [dice])

  function genRandNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function genNewDie() {
    return {id: nanoid(), value: genRandNum(), isHeld: false}
  }

  function resetGame() {
    setDice(allNewDice)
    setTenzie(false)
    setNumRolls(0)
  }

  function allNewDice() {
    let diceArray = []
    for (let x = 0; x < 10; x++) {
      diceArray.push(genNewDie())
    }

    return diceArray;
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
              return die.id === id ? {...die, isHeld: !die.isHeld} : die
            })
    )
  }

  function rollButtonClicked() {
    setNumRolls(oldRolls => oldRolls + 1)
    setDice(oldDice => oldDice.map(die => {
      if (die.isHeld) {
        return die;
      }
      else {
        return genNewDie();
      }
    }))
  }

  let diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} hold={() => holdDice(die.id)}/>)

  return (
    <div className={"main"}>
      {tenzie ? <Confetti/> : <div/>}
      <div className="game">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="numRolls">
            {`You have rolled the dice ${numRolls} ${numRolls === 1 ? "time": "times"}`}
          </div>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={tenzie ? resetGame : rollButtonClicked}>{tenzie ? "New Game" : "Roll"}</button>
      </div>
    </div>
  );
}

export default App;
