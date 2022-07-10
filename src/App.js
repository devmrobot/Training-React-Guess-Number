import { useState } from "react";
import "./App.css";

const randomNumber = Math.round(Math.random() * 10);

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    const crashTest = parseInt(value, setValue);
    setResult("Pick a number");
    if (crashTest === randomNumber) setResult("You Win!");
    if (crashTest > randomNumber) setResult("Too high, guess again");
    if (crashTest < randomNumber) setResult("Too Low, guess again");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Guess Number !</h1>
        <h2 className="lead">Guess a number between 1 and 10.</h2>
      </div>
      <div className="container-input">
        <p>Enter a number : </p>
        <input
        type="number"
          value={value}
          onChange={handleChange}
          placeholder="Take a shot !"
        ></input>
      </div>
      <div className="container-button">
        <button className="btn" type="submit" onClick={handleClick}>
          Check
        </button>
        <div className="response">{result}</div>
      </div>
    </div>
  );
}

export default App;
