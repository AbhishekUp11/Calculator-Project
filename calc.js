let currentInput = "0";

function updateResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateResult();
}

function appendOperator(operator) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator; // Replace operator
  } else {
    currentInput += operator;
  }
  updateResult();
}

function clearResult() {
  currentInput = "0";
  updateResult();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || "0";
  updateResult();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString(); // Evaluate safely
    if (currentInput === "Infinity" || isNaN(currentInput)) {
      currentInput = "Error";
    }
  } catch {
    currentInput = "Error";
  }
  updateResult();
}
