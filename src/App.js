import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [inputValue, setInputValue] = useState("");

  const [armNumber, setArmNumber] = useState();

  const checkValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    setArmNumber(inputValue);
  };

  const checkArmNumber = () => {
    if (armNumber) {
      const stringNumber = armNumber.toString().split("");
      const mulitpliedNumber = stringNumber
        .map((num) => num * num * num)
        .reduce((arr, num) => arr + num);
      console.log(mulitpliedNumber);

      if (mulitpliedNumber == armNumber) {
        alert("it is an armstrong number");
      }
    }
  };

  checkArmNumber();
  useEffect(() => {
    console.log(inputValue, armNumber);
  }, [inputValue, armNumber]);
  return (
    <div className="App">
      <h1> Check Armstrong number </h1>
      <input type="number" value={inputValue} onChange={checkValue} />
      <button onClick={handleSubmit}> Submit number</button>
    </div>
  );
}
