let currentInput = "";
let displayElement = document.getElementById("display");

function appendInput(value) {
  currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(eval(currentInput)).toString();
  updateDisplay();
}

function calculateTrigFunction(func) {
  const radians = eval(currentInput);
  const result = Math[func](radians);
  currentInput = result.toString();
  updateDisplay();
}

function updateDisplay() {
  displayElement.textContent = currentInput || "0";
}
