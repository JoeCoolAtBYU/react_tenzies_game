import './App.css';
import Die from "./components/die"
import {useState} from "react";
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = useState(allNewDice)

  function genRandNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function allNewDice() {
    let diceArray = []
    for (let x = 0; x < 10; x++) {
      diceArray.push({id: nanoid(), value: genRandNum(), isHeld: false})
    }

    return diceArray;
  }

  function holdDice(id){
    console.log(id);
  }

  function rollButtonClicked() {
    setDice(allNewDice)
  }

  let diceElements = dice.map(die => <Die key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} hold={holdDice}/>)

  return (
    <div className="game">
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollButtonClicked}>Roll</button>
    </div>
  );
}

export default App;
