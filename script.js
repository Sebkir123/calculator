const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const toggleCheckbox = document.getElementById("toggle-theme");

toggleCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (value) {
      const lastNumber = expression.split(/[\+\-\*\/]/).pop();

      if (value === ".") {
        if (lastNumber.includes(".")) return;
        if (lastNumber === "") return;
      }
      expression += value;
      display.textContent = expression;
      return;
    }
    if (action === "clear") {
      expression = "";
      display.textContent = "0";
      return;
    }

    if (action === "equals") {
      try {
        const result = eval(expression);
        display.textContent = result;
        expression = result.toString();
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    }
  });
});
