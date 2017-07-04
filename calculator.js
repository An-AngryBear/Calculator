/*DOM Elements*/
const inputValue1 = document.getElementById("value1"),
	inputValue2 = document.getElementById("value2"),
	submitBtn = document.getElementById("submit-btn"),
  output = document.getElementById("output");


  // Create a function that multiplies two numbers
  // passed in as arguments. Return the product.
function multiply(input1, input2) {
	return input1 * input2
}

  // Create a function that adds two numbers
  // passed in as arguments. Return the sum.
function addition(input1, input2) {
	return +input1 + +input2;
}

  // Create a function that subtracts two numbers
  // passed in as arguments. Return the difference.
function subtraction(input1, input2) {
  return input1 - input2;
}

  // Create a function that divides two numbers
  // passed in as arguments. Return the quotient.
function division(input1, input2) {
  return input1 / input2;
}

// Validator
function error() {
  if (inputValue1.value === "" || inputValue2.value === "") {
    alert("Please enter a valid numeral in both input fields")
    return false;
  } else {
    return true;
  }
}

function buttonHighlight(button) {
    button.classList.add("highlight");
}

  // Create a function that accepts three arguments.
  //   1. First number
  //   2. Second number
  //   3. A function that performs an operation on them
function calculate(input1, input2, mathFunc) {
  return mathFunc(input1, input2);
}

submitBtn.addEventListener("click", function() {
  error();
  if (document.getElementsByClassName("highlight").length !== 0)  {
    let highlightedElement = document.getElementsByClassName("highlight")[0];
    switch (highlightedElement.id) {
      case "addition":
        var mathFunction = addition;
        break;
      case "multiplication":
        var mathFunction = multiply;
        break;
      case "division":
        var mathFunction = division;
        break;
      case "subtraction":
        var mathFunction = subtraction;
    }
    var mathResult = calculate(inputValue1.value, inputValue2.value, mathFunction);
    output.innerHTML = "";
    let outputText = document.createElement("h3");
    outputText.innerHTML = mathResult;
    output.append(outputText);
  }
})

document.addEventListener("click", function() {
  if(event.target.classList.contains("mathBtn")) {
    if (document.querySelectorAll(".highlight").length > 0) {
      document.querySelectorAll(".highlight")[0].classList.remove("highlight");
    }
    buttonHighlight(event.target);
  }
})