// Set-up buttons
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var clear = document.getElementById('clear');
var del = document.getElementById("del");
var point = document.getElementById('point');
var equal = document.getElementById('equal');
var plus = document.getElementById('plus');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var topbar = document.getElementById('top-bar');
var equation = document.getElementById('equation');

// Set-up calculator screen
var screen = document.getElementById('calcScreen');
let value = 0;
equation.innerHTML = value;

// Clear button
clear.addEventListener("click", function() {
    value = 0;
    equation.innerHTML = value;
    topbar.innerHTML = null;
    });

// Button clicks
one.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 1;
        equation.innerHTML = value;
    }
    else {
        value = value + "1";
        equation.innerHTML = value;
    }
});

two.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 2;
        equation.innerHTML = value;
    }
    else {
        value = value + "2";
        equation.innerHTML = value;
    }
});

three.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 3;
        equation.innerHTML = value;
    }
    else {
        value = value + "3";
        equation.innerHTML = value;
    }
});

four.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 4;
        equation.innerHTML = value;
    }
    else {
        value = value + "4";
        equation.innerHTML = value;
    }
});

five.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 5;
        equation.innerHTML = value;
    }
    else {
        value = value + "5";
        equation.innerHTML = value;
    }
});

six.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 6;
        equation.innerHTML = value;
    }
    else {
        value = value + "6";
        equation.innerHTML = value;
    }
});

seven.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 7;
        equation.innerHTML = value;
    }
    else {
        value = value + "7";
        equation.innerHTML = value;
    }
});

eight.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 8;
        equation.innerHTML = value;
    }
    else {
        value = value + "8";
        equation.innerHTML = value;
    }
});

nine.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 9;
        equation.innerHTML = value;
    }
    else {
        value = value + "9";
        equation.innerHTML = value;
    }
});

zero.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = 0;
        equation.innerHTML = value;
    }
    else {
        value = value + "0";
        equation.innerHTML = value;
    }
});

point.addEventListener("click", function() {
    if (value === 0) {
        equation.innerHTML = null;
        value = ".";
        equation.innerHTML = value;
    }
    else {
        value = value + ".";
        equation.innerHTML = value;
    }
});

del.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else {
        value = value.substring(0, value.length - 1);
        equation.innerHTML = value;
    }
});

// Key presses

addEventListener("keypress", function(event) {
    if (event.key === "1" && value === 0) {
        equation.innerHTML = null;
        value = 1;
        equation.innerHTML = value;
    }
    else if (event.key === "1") {
        value = value + "1";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "2" && value === 0) {
        equation.innerHTML = null;
        value = 2;
        equation.innerHTML = value;
    }
    else if (event.key === "2") {
        value = value + "2";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "3" && value === 0) {
        equation.innerHTML = null;
        value = 3;
        equation.innerHTML = value;
    }
    else if (event.key === "3") {
        value = value + "3";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "4" && value === 0) {
        equation.innerHTML = null;
        value = 4;
        equation.innerHTML = value;
    }
    else if (event.key === "4") {
        value = value + "4";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "5" && value === 0) {
        equation.innerHTML = null;
        value = 5;
        equation.innerHTML = value;
    }
    else if (event.key === "5") {
        value = value + "5";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "6" && value === 0) {
        equation.innerHTML = null;
        value = 6;
        equation.innerHTML = value;
    }
    else if (event.key === "6") {
        value = value + "6";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "7" && value === 0) {
        equation.innerHTML = null;
        value = 7;
        equation.innerHTML = value;
    }
    else if (event.key === "7") {
        value = value + "7";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "8" && value === 0) {
        equation.innerHTML = null;
        value = 8;
        equation.innerHTML = value;
    }
    else if (event.key === "8") {
        value = value + "8";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "9" && value === 0) {
        equation.innerHTML = null;
        value = 9;
        equation.innerHTML = value;
    }
    else if (event.key === "9") {
        value = value + "9";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "0" && value === 0) {
        equation.innerHTML = null;
        value = 0;
        equation.innerHTML = value;
    }
    else if (event.key === "0") {
        value = value + "0";
        equation.innerHTML = value;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "." && value === 0) {
        equation.innerHTML = null;
        value = ".";
        equation.innerHTML = value;
    }
    else if (event.key === ".") {
        value = value + ".";
        equation.innerHTML = value;
    }
});

addEventListener('keydown', function(event) {
    if (event.key === "Backspace" && value === 0) {
        // Do nothing
    }
    else if (event.key === "Backspace") {
        value = value.substring(0, value.length - 1);
        equation.innerHTML = value;
    }
});

// Add function
function add(a, b) {
    return a + b;
  }

// Subtract function
function subtract(a, b) {
    return a - b;
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Divide function
function divide(a, b) {
    return a / b;
}

// Set-up operator buttons


// Operate function
function operate(a, b) {

}