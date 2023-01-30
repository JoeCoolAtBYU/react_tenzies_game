import './App.css';
import Die from "./components/die"
import {useState, useEffect} from "react";
import {nanoid} from "nanoid"



function App() {
  const [dice, setDice] = useState(allNewDice)
  const [tenzie, setTenzie] = useState(false)


  useEffect(()=>{
    let isWon = dice.filter(dice => dice.isHeld === true)
    if(isWon.length === 10){
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

  function resetGame(){
    setDice(allNewDice)
    setTenzie(false)
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
    <div className="game">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={tenzie ? resetGame : rollButtonClicked}>{tenzie ? "Restart" : "Roll"}</button>
    </div>
  );
}

export default App;
