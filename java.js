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

console.log(operate("+", 2, 3));
console.log(operate("-", 2, 3));
console.log(operate("/", 2, 3));
console.log(operate("*", 2, 3));
