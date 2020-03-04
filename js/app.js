// Vars
const button = document.querySelectorAll(".key");
const toDisplay = document.querySelector("#resultInput");
const result = document.querySelector("#result");
const keypad = document.querySelector(".keypad");
let formula = "";
let sqrtUsed = false;
let percentUsed = false;
let numeric = Boolean;

// Events
keypad.addEventListener("click", e => {
  let pressedKey = e.target.firstChild.textContent;
  numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(
    pressedKey
  );
  if (pressedKey == "%") {
    percentUsed = true;
    console.log(percentUsed);
  }
  // RESULT
  if (pressedKey == "=" && sqrtUsed && !percentUsed) {
    formula += ")";
    sqrtUsed = false;
    result.textContent = eval(formula);
  } else if (pressedKey == "=" && !sqrtUsed && !percentUsed) {
    result.textContent = eval(formula);
  } else if (pressedKey == "=" && percentUsed) {
    // formula /= 100;
    result.textContent = eval(formula);
  }
  // Square root used
  else if (pressedKey == "√") {
    sqrtUsed = true;
    formula += "Math.sqrt(";
    toDisplay.textContent += "√";
  }
  // DELETE
  else if (pressedKey == "Del") {
    result.textContent = 0;
    toDisplay.textContent = "";
    formula = "";
  }
  //  NO square root used
  else if (!sqrtUsed && !percentUsed) {
    formula += pressedKey;
    toDisplay.textContent += pressedKey;
  } else if (!sqrtUsed && percentUsed) {
    formula += "/100";
    percentUsed = false;
    toDisplay.textContent += pressedKey;
  }
  //  Square root used - NOT NUMERIC
  else if (sqrtUsed && !numeric && !percentUsed) {
    formula += `)${pressedKey}`;
    toDisplay.textContent += pressedKey;
    sqrtUsed = false;
  }
  //  Square root used - NUMERIC
  else if (sqrtUsed && numeric) {
    formula += pressedKey;
    toDisplay.textContent += pressedKey;
  }
  console.log(formula);
});
