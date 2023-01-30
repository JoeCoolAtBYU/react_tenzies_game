import './App.css';
import Die from "./components/die"

function App() {
  function randomNumber(){
    return Math.floor(Math.random() * 6)+1;

  }
  return (
    <div className="game">
      <div className="dice-container">
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
        <Die value={randomNumber()}/>
      </div>
    </div>
  );
}

export default App;
