import { useState } from "react";
import "./App.css";
import game from "./assets/game.png"

const randomNumber = Math.round(Math.random() * 100);

function App() {
  const [value, setValue] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [result, setResult] = useState("");
  const [numberGuess, setNumberGuess] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState(randomNumber);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const restartAgain = () => {
    setDisabled(false);
    setUserCount(0);
    setNumberGuess([]);
    setRandomNumbers(randomNumber);
    setResult("");
    setValue("");
  };

  const handleClick = () => {
    setUserCount(userCount + 1);
    setNumberGuess([...numberGuess, value]);
    const crashTest = parseInt(value, setValue);
    setResult("Pick a number");
    if (crashTest === randomNumber) {
      setResult("You Win!");
      setDisabled(true);
    }
    if (crashTest > randomNumber) {
      setResult("Too high, guess again");
      setDisabled(disabled);
    }
    if (crashTest < randomNumber) {
      setResult("Too Low, guess again");
      setDisabled(disabled);
    }
    if (userCount === 9) {
      setResult("GAME OVER !!!");
      setDisabled(!disabled);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <img src={game}></img>
        <h1>Guess Number !</h1>
        <h2 className="lead">Guess a number between 1 and 100.</h2>
      </div>
      <div className="container-input">
        <p>Enter a number : </p>
        <input
          type="number"
          disabled={disabled}
          value={value}
          onChange={handleChange}
          placeholder="Take a shot !"
        ></input>
      </div>
      <div className="container-button">
        <button
          disabled={disabled}
          className="btn"
          type="submit"
          onClick={handleClick}
        >
          Check
        </button>
        {disabled ? <button onClick={restartAgain}>Try again</button> : null}
        {/* {disabled && <button onClick={restartAgain} >Try again</button>} */}
        <div className="response">Total round play : {userCount}</div>
        <div className="test">
          Your guesses :
          {numberGuess.map((item, index) => {
            return (
              <p key={index}>
                {item} {userCount < 10 ? "-" : null}
              </p>
            );
          })}
        </div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}

export default App;
