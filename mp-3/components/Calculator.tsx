import React, { useState } from 'react';
import '../src/styles/projects.css';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => setResult(num1 + num2);
    const subtract = () => setResult(num1 - num2);
    const multiply = () => setResult(num1 * num2);
    const divide = () => setResult( num1 / num2);
    const power = () => setResult(Math.pow(num1, num2));
    const clear = () => { setNum1(0); setNum2(0); setResult(0); };
    
    return (
        <div className="calculator-container">
            <h4>Calculator</h4>
            <div className="enter">  
            <label htmlFor="num1">Enter first number:</label>
            <input type="number" id="num1" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            </div>
            <div className="enter"> 
            <label htmlFor="num2">Enter second number:</label>
            <input type="number" id="num2" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            </div>
            <div className="buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>−</button>
                <button onClick={multiply}>×</button>
                <button onClick={divide}>÷</button>
                <button onClick={power}>^</button>
                <button onClick={clear}>Clear</button>
            </div>
            <h4>Result: <span id="output">{result}</span></h4>
        </div>
    );
};

export default Calculator;
