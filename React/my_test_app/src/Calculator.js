import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        data-testid="num1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        data-testid="num2"
      />

      <button onClick={handleAddition}>Add</button>

      {result !== null && (
        <h3 data-testid="result">Result: {result}</h3>
      )}
    </div>
  );
}

export default Calculator;
