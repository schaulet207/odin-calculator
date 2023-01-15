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
var subtractor = document.getElementById('subtract');
var multiplier = document.getElementById('multiply');
var divvy = document.getElementById('divvy');
var topbar = document.getElementById('top-bar');
var equation = document.getElementById('equation');

// Set-up calculator screen
var screen = document.getElementById('calcScreen');
let value = 0;
let valueB = null;
equation.innerHTML = value;

// Clear button
clear.addEventListener("click", function() {
    value = 0;
    valueB = null;
    equation.innerHTML = value;
    topbar.innerHTML = null;
    });

// Button clicks
one.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 1;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "1";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "1";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = "1";
        equation.innerHTML = valueB;
    }
});

two.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 2;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "2";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "2";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = "2";
        equation.innerHTML = valueB;
    }
});


three.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 3;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "3";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "3";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 3;
        equation.innerHTML = valueB;
    }
});


four.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 4;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "4";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "4";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 4;
        equation.innerHTML = valueB;
    }
});


five.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 5;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "5";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0) {
        valueB = valueB + "5";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 5;
        equation.innerHTML = valueB;
    }
});


six.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 6;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "6";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "6";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 6;
        equation.innerHTML = valueB;
    }
});


seven.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 7;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "7";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "7";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 7;
        equation.innerHTML = valueB;
    }
});


eight.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 8;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "8";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "8";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 8;
        equation.innerHTML = valueB;
    }
});


nine.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 9;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "9";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "9";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 9;
        equation.innerHTML = valueB;
    }
});


zero.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = 0;
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + "0";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "0";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = 0;
        equation.innerHTML = valueB;
    }
});


point.addEventListener("click", function() {
    if (value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = ".";
        equation.innerHTML = value;
    }
    else if (value !== 0 && valueB === null) {
        value = value + ".";
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + ".";
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        valueB = ".";
        equation.innerHTML = valueB;
    }
});


del.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else if (value > 0) {
        value = value.substring(0, value.length - 1);
        equation.innerHTML = value;
    }
    else if (valueB !== null && valueB !== 0) {
        valueB = valueB.substring(0, valueB.length - 1);
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        // Do nothing
    }
});

divvy.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else if (value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " / ";
        topbar.innerHTML = value;
    }
    // else if (valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    // }
});

multiplier.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else if (value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " x ";
        topbar.innerHTML = value;
    }
    // else if (valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    // }
});

subtractor.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else if (value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " - ";
        topbar.innerHTML = value;
    }
    // else if (valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    // }
});

plus.addEventListener("click", function() {
    if (value === 0) {
        // Do nothing
    }
    else if (value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " + ";
        topbar.innerHTML = value;
    }
    // else if (valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    // }
});



// Key presses
addEventListener("keypress", function(event) {
    if (event.key === "1" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "1";
        equation.innerHTML = value;
    }
    else if (event.key === "1" && value !== 0 && valueB === null) {
        value = value + "1";
        equation.innerHTML = value;
    }
    else if (event.key === "1" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "1";
        equation.innerHTML = valueB;
    }
    else if (event.key === "1" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "1";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "2" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "2";
        equation.innerHTML = value;
    }
    else if (event.key === "2" && value !== 0 && valueB === null) {
        value = value + "2";
        equation.innerHTML = value;
    }
    else if (event.key === "2" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "2";
        equation.innerHTML = valueB;
    }
    else if (event.key === "2" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "2";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "3" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "3";
        equation.innerHTML = value;
    }
    else if (event.key === "3" && value !== 0 && valueB === null) {
        value = value + "3";
        equation.innerHTML = value;
    }
    else if (event.key === "3" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "3";
        equation.innerHTML = valueB;
    }
    else if (event.key === "3" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "3";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "4" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "4";
        equation.innerHTML = value;
    }
    else if (event.key === "4" && value !== 0 && valueB === null) {
        value = value + "4";
        equation.innerHTML = value;
    }
    else if (event.key === "4" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "4";
        equation.innerHTML = valueB;
    }
    else if (event.key === "4" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "4";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "5" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "5";
        equation.innerHTML = value;
    }
    else if (event.key === "5" && value !== 0 && valueB === null) {
        value = value + "5";
        equation.innerHTML = value;
    }
    else if (event.key === "5" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "5";
        equation.innerHTML = valueB;
    }
    else if (event.key === "5" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "5";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "6" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "6";
        equation.innerHTML = value;
    }
    else if (event.key === "6" && value !== 0 && valueB === null) {
        value = value + "6";
        equation.innerHTML = value;
    }
    else if (event.key === "6" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "6";
        equation.innerHTML = valueB;
    }
    else if (event.key === "6" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "6";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "7" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "7";
        equation.innerHTML = value;
    }
    else if (event.key === "7" && value !== 0 && valueB === null) {
        value = value + "7";
        equation.innerHTML = value;
    }
    else if (event.key === "7" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "7";
        equation.innerHTML = valueB;
    }
    else if (event.key === "7" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "7";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "8" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "8";
        equation.innerHTML = value;
    }
    else if (event.key === "8" && value !== 0 && valueB === null) {
        value = value + "8";
        equation.innerHTML = value;
    }
    else if (event.key === "8" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "8";
        equation.innerHTML = valueB;
    }
    else if (event.key === "8" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "8";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "9" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "9";
        equation.innerHTML = value;
    }
    else if (event.key === "9" && value !== 0 && valueB === null) {
        value = value + "9";
        equation.innerHTML = value;
    }
    else if (event.key === "9" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "9";
        equation.innerHTML = valueB;
    }
    else if (event.key === "9" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "9";
        equation.innerHTML = valueB;
    }
});

addEventListener("keypress", function(event) {
    if (event.key === "0" && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "0";
        equation.innerHTML = value;
    }
    else if (event.key === "0" && value !== 0 && valueB === null) {
        value = value + "0";
        equation.innerHTML = value;
    }
    else if (event.key === "0" && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + "0";
        equation.innerHTML = valueB;
    }
    else if (event.key === "0" && valueB === 0) {
        equation.innerHTML = null;
        valueB = "0";
        equation.innerHTML = valueB;
    }
});

addEventListener('keydown', function(event) {
    if (event.key === "Backspace" && value === 0) {
        // Do nothing
    }
    else if (event.key === "Backspace" && value > 0) {
        value = value.substring(0, value.length - 1);
        equation.innerHTML = value;
    }
    else if (event.key === "Backspace" && valueB !== null && valueB !== 0) {
        valueB = valueB.substring(0, valueB.length - 1);
        equation.innerHTML = valueB;
    }
    else if (valueB === 0) {
        // Do nothing
    }
});

addEventListener('keydown', function(event) {
    if (event.key === "/" && value === 0) {
        // Do nothing
    }
    else if (event.key === "/" && value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " / ";
        topbar.innerHTML = value;
    }
    // else if (event.key === "/" && valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    //}
});

addEventListener('keydown', function(event) {
    if (event.key === "*" && value === 0) {
        // Do nothing
    }
    else if (event.key === "*" && value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " * ";
        topbar.innerHTML = value;
    }
    // else if (event.key === "/" && valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    //}
});

addEventListener('keydown', function(event) {
    if (event.key === "+" && value === 0) {
        // Do nothing
    }
    else if (event.key === "+" && value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " + ";
        topbar.innerHTML = value;
    }
    // else if (event.key === "/" && valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    //}
});

addEventListener('keydown', function(event) {
    if (event.key === "-" && value === 0) {
        // Do nothing
    }
    else if (event.key === "-" && value !== 0 && valueB === null) {
        valueB = 0;
        equation.innerHTML = valueB;
        value = value + " - ";
        topbar.innerHTML = value;
    }
    // else if (event.key === "/" && valueB !== null && value !== 0) {
    //     // Put in code later to make this run the equate() function
    //}
});

addEventListener('keydown', function(event) {
    if (event.key === "." && value === 0 && valueB === null) {
        equation.innerHTML = null;
        value = "0";
        equation.innerHTML = value;
    }
    else if (event.key === "." && value !== 0 && valueB === null) {
        value = value + ".";
        equation.innerHTML = value;
    }
    else if (event.key === "." && valueB !== null && valueB !== 0 && valueB !== null) {
        valueB = valueB + ".";
        equation.innerHTML = valueB;
    }
    else if (event.key === "." && valueB === 0) {
        equation.innerHTML = null;
        valueB = ".";
        equation.innerHTML = valueB;
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