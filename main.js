/************************************************** */
/****************YOUR CODE HERE************* */

function add(a, b) {
    console.log(a + b)
}

function subtract(x, y) {
    console.log(x - y)
}

function multiply(a, b) {
    console.log(a * b)
}

function divide(x, y) {
    console.log(x / y)
}

function square(a) {
    console.log(a * a)
}
// Math.pow(a, 2) or (a ** 2)


function squareRoot(x){
    console.log(Math.sqrt(x))
}

function concatenate(str1, str2){
    console.log(str1 + str2)
}

/******************************OUR CODE BELOW******************************** */

if (typeof add === 'undefined') {
    console.log(add)
    add = undefined;
}
if (typeof subtract === 'undefined') {
    subtract = undefined;
}
if (typeof multiply === 'undefined') {
    multiply = undefined;
}
if (typeof divide === 'undefined') {
    divide = undefined;
}
if (typeof square === 'undefined') {
    square = undefined;
}
if (typeof squareRoot === 'undefined') {
    squareRoot = undefined;
}
if (typeof concatenate === 'undefined') {
    concatenate = undefined;
}

module.exports = { add, subtract, multiply, divide, square, squareRoot, concatenate }
