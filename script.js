function append(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function backspace() {
  let current = document.getElementById("result").value;
  document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("result").value;

  try {
    expression = expression
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/pi/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/\^/g, '**');

    const result = eval(expression);
    document.getElementById("result").value = result;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

