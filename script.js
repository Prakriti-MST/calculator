let screen = document.querySelector("#screen");

function appendValue(value) {
  screen.value += value;
  console.log("Value appended:", screen.value);
}

function clearScreen() {
  screen.value = "";
  console.log("Screen cleared");
}

function checkExpression() {
  let operatorCount = 0;
  let expression = screen.value;
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] == "+" ||
      expression[i] == "-" ||
      expression[i] == "/" ||
      expression[i] == "*" ||
      expression[i] == "%"
    ) {
      operatorCount++;
    }
  }
  if (operatorCount > 2) {
    return false;
  }
  return true;
}

function calculate() {
  if (checkExpression()) {
    const result = eval(screen.value);
    console.log("Calculation result:", result);
    if (
      result === undefined ||
      Number.isNaN(result) ||
      Number.isFinite(result)
    ) {
      console.error("Error: Calculation result is undefined.");
      screen.value = "Error";
      return;
    }
    screen.value = result;
  } else {
    console.log("Invalid Expression");
    screen.value = "Error";
  }
}
