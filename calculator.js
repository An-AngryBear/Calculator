/*DOM Elements*/
const inputValue1 = document.getElementById("value1"),
	inputValue2 = document.getElementById("value2"),
	addBtn = document.getElementById("addition"),
	subtractBtn = document.getElementById("subtraction"),
	multiplyBtn = document.getElementById("multiplication"),
	divideBtn = document.getElementById("division"),
	enterBtn = document.getElementById("enter-btn");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(input1, input2) {
	return input1 * input2
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addition(input1, input2) {
	return input1 + input2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(input1, input2) {
  return input1 - input2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(input1, input2) {
  return input1 / input2;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function calculate(input1, input2, mathFunc) {

}