function updateResult(value) {
    let resultElement = document.getElementById("output");

    resultElement.innerHTML = value;

    if (value < 0) {
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "red";
        resultElement.style.padding = "5px";
        resultElement.style.borderRadius = "5px";
    } else {

        resultElement.style.color = "#0073e6";
        resultElement.style.backgroundColor = "transparent";
    }
}


function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    updateResult(num1 + num2);
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    updateResult(num1 - num2);
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    updateResult(num1 * num2);
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        updateResult("Error: Division by 0");
    } else {
        updateResult(num1 / num2);
    }
}


function power() {
    let base = parseFloat(document.getElementById("num1").value);
    let exponent = parseInt(document.getElementById("num2").value);
    let result = 1;

    if (exponent >= 0) {
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }
    } else {
        result = "Error: Negative exponent not supported";
    }
    
    updateResult(result);
}


function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    updateResult("_"); 
}
