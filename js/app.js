const result = document.querySelector(".result"),
  numbers = document.querySelectorAll(".number"),
  func = document.querySelectorAll(".function"),
  equal = document.querySelector(".equal"),
  dot = document.querySelector(".dot");

updateNumber();
updateDot();
updateFunctions();
updateEqual();

function updateNumber() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (result.innerHTML == "Math Error") {
        result.innerHTML += "";
      } else {
        result.innerHTML += number.innerHTML;
      }
    });
  });
}

function updateDot() {
  dot.addEventListener("click", () => {
    // if (result.textContent.includes(".")) {
    //   result.innerHTML += "";
    // } else {
    //  }
    result.innerHTML += dot.innerHTML;
  });
}

function updateFunctions() {
  func.forEach((one) => {
    one.addEventListener("click", () => {
      if (one.textContent == "«") {
        if (result.textContent != "") {
          result.innerHTML = result.innerHTML.substr(
            0,
            result.innerHTML.length - 1
          );
        } else {
          return false;
        }
      } else if (one.textContent == "C") {
        if (result.textContent != "") {
          result.innerHTML = "";
        } else {
          return false;
        }
      } else if (
        one.textContent == "X" ||
        one.textContent == "+" ||
        one.textContent == "-" ||
        one.textContent == "÷"
      ) {
        if (result.innerHTML.includes("X")) {
          result.innerHTML += "";
        } else if (result.innerHTML.includes("+")) {
          result.innerHTML += "";
        } else if (result.innerHTML.includes("÷")) {
          result.innerHTML += "";
        } else if (result.innerHTML.includes("-")) {
          result.innerHTML += "";
        } else if (result.innerHTML == "Math Error") {
          result.innerHTML += "";
        } else {
          result.innerHTML += one.textContent;
        }
      }
    });
  });
}

function updateEqual() {
  equal.addEventListener("click", () => {
    let plus = result.textContent.indexOf("+");
    let min = result.textContent.indexOf("-");
    let devide = result.textContent.indexOf("÷");
    let mult = result.textContent.indexOf("X");
    let operator;

    if (min > -1) {
      operator = min;
    }
    if (plus > -1) {
      operator = plus;
    }
    if (devide > -1) {
      operator = devide;
    }
    if (mult > -1) {
      operator = mult;
    }

    let firstPart = parseInt(result.innerHTML.substr(0, operator));
    let secondPart = parseInt(
      result.innerHTML.substr(operator + 1, result.innerHTML.length)
    );

    if (result.innerHTML[operator] == "+") {
      result.innerHTML = firstPart + secondPart;
    } else if (result.innerHTML[operator] == "-") {
      result.innerHTML = firstPart - secondPart;
    } else if (result.innerHTML[operator] == "X") {
      result.innerHTML = firstPart * secondPart;
    } else if (result.innerHTML[operator] == "÷") {
      result.innerHTML = firstPart / secondPart;
    }

    if (result.innerHTML == "Infinity" || result.innerHTML == "NaN") {
      result.innerHTML = "Math Error";
    }
  });
}
