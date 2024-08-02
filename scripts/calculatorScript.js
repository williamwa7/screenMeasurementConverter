function addToInput(value) {
  var calculatorInput = document.getElementById("calculator-input");
  calculatorInput.value += value;
}

function clearInput() {
  var calculatorInput = document.getElementById("calculator-input");
  calculatorInput.value = "";
}

function calculate(operator) {
  var calculatorInput = document.getElementById("calculator-input");
  var inputValue = calculatorInput.value;

  if (operator === "C") {
    clearInput();
    return;
  }

  if (operator === "=") {
    if (inputValue === "" || inputValue === "=") {
      return;
    }
    try {
      var result = eval(inputValue);
      calculatorInput.value = result;
      calculatorInput.classList.add("calculator-result");
    } catch (error) {
      calculatorInput.value = "Error";
    }
    return;
  }

  calculatorInput.value += operator;
}

// Função para processar entrada do teclado
document.addEventListener("keydown", function (event) {
  var calculatorInput = document.getElementById("calculator-input");
  var key = event.key;

  // Verifica se o input da calculadora está em foco
  if (document.activeElement === calculatorInput) {
    if (!isNaN(key) || key === ".") {
      addToInput(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      addToInput(` ${key} `);
    } else if (key === "Enter") {
      calculate("=");
    } else if (key === "Backspace") {
      calculatorInput.value = calculatorInput.value.slice(0, -1);
    } else if (key === ",") {
      addToInput(".");
    } else if (key.toLowerCase() === "c" || key === "Delete") {
      clearInput();
      calculatorInput.classList.remove("calculator-result");
    }
  }
});
