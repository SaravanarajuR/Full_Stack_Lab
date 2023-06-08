function handleClick(eve) {
  let exp = document.getElementById("output").value;
  let arr = exp.split("");
  const mathFunctions = [
    "sqrt",
    "log",
    "log10",
    "abs",
    "round",
    "sin",
    "cos",
    "tan",
  ];
  if (eve.target.id === "!") {
    document.getElementById("output").value = factorial(Number(exp));
  } else if (eve.target.id === "backspace") {
    const value = document.getElementById("output").value;
    if (value === "error" || value === "" || value === "Enter value first") {
      handleClear();
    } else {
      arr.pop();
      document.getElementById("output").value = arr.join("");
    }
  } else if (mathFunctions.includes(eve.target.id)) {
    if (exp === "" || exp === "Enter value first") {
      document.getElementById("output").value = "Enter value first";
    } else {
      arr = [`${eve.target.id}(`, ...arr, ")"];
      document.getElementById("output").value = arr
        .join("")
        .replace("Math.", "");
    }
  } else {
    let last = arr[arr.length - 1];
    let event = eve.target.id;
    let operators = ["+", "-", "/", "*", "^"];
    if (operators.includes(last) && operators.includes(event)) {
      arr.pop();
      arr = [...arr, eve.target.id];
      document.getElementById("output").value = arr.join("");
    } else {
      arr =
        exp != "Enter value first" ? [...arr, eve.target.id] : [eve.target.id];
      document.getElementById("output").value = arr.join("");
    }
  }
}
function handleClear() {
  document.getElementById("output").value = "";
}
function handleSubmit() {
  try {
    const sci = ["cos", "tan", "sin", "log", "abs", "round"];
    let eqn = document.getElementById("output").value;
    for (let i = 0; i < sci.length; i++) {
      eqn = eqn.split(sci[i]).join(`Math.${sci[i]}`);
    }
    ans = eval(eqn);
  } catch (err) {
    ans = "error";
  }
  document.getElementById("output").value = ans === undefined ? "" : ans;
}

function factorial(num) {
  fact = 1;
  for (let n = 1; n <= num; n++) {
    fact *= num;
    if (n === num) {
      return fact;
    }
  }
}
