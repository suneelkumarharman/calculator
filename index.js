let currentInput = '';

function clearScreen() {
  currentInput = '';
  document.getElementById('result').value = '';
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('result').value = currentInput;
}

function appendInput(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function calculate() {
  const result = eval(currentInput);
  currentInput = result.toString();
  document.getElementById('result').value = currentInput;
}
