function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        evaluation = add(a,b);
    }

    else if (operator === "-") {
        evaluation = subtract(a, b);
    }

    else if (operator === "*") {
        evaluation = multiply(a, b);
    }

    else if (operator === "/") {
        evaluation = divide(a, b);
    }

    return evaluation;

}

let viewer = document.querySelector(".viewer");
function displayNumbers(button) {
    viewer.innerHTML = `${button.textContent}`;
}

let buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    button.addEventListener("click", function() {
        displayNumbers(button);
    })
}


/*
console.log(operate("+", 2, 3));
console.log(operate("-", 2, 3));
console.log(operate("/", 2, 3));
console.log(operate("*", 2, 3));
*/