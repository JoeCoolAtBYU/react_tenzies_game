import './App.css';
import Die from "./components/die"
import {useState} from "react";

function App() {
  const[dice, setDice] = useState(allNewDice)

  function allNewDice() {
    let diceArray = []
    for (let x = 0; x < 10; x++) {
      diceArray.push(<Die value={Math.floor(Math.random() * 6) + 1}/>)
    }
    return diceArray;
  }

  function rollButtonClicked () {
    setDice(allNewDice)
  }

  return (
    <div className="game">
      <div className="dice-container">
        {dice}
      </div>
      <button className="roll-dice" onClick={rollButtonClicked}>Roll</button>
    </div>
  );
}

export default App;
