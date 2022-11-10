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

function clearViewer() {
    viewer.innerHTML = '';
    return;
}

function displayNumbers(button) {
    if (button.id === "operator") {
        clearViewer();
        viewer.innerHTML = button.textContent;
        return;
    }
    // if for clear
    // if for enter
    viewer.innerHTML += `${button.textContent}`;
}


let buttons = document.querySelectorAll(".button");
let viewer = document.querySelector(".viewer");
let arr = [];

for (const button of buttons) {
    button.addEventListener("click", function() {

        //Will clear the viewer after an operator is chosen
        if (viewer.innerHTML === "+" || 
            viewer.innerHTML === "-" ||
            viewer.innerHTML === "*" ||
            viewer.innerHTML === "/") {
                
                clearViewer();
        }

        //Seperate from above
        if (button.id === "number") {
            displayNumbers(button);
        }

        if (button.id === "operator") {
            arr.push(parseInt(viewer.innerHTML));
            arr.push(button.textContent);
            displayNumbers(button);  
        }

        if (button.id === "equals") {
            arr.push(parseInt(viewer.innerHTML));
            clearViewer();
            let evaluation = operate(arr[1], arr[0], arr[2]);
            viewer.innerHTML = `${evaluation}`;
        }

        if (button.id === "clear") {
            clearViewer();
            arr = [];
        }

        console.log(arr);
    })
}


/*
console.log(operate("+", 2, 3));
console.log(operate("-", 2, 3));
console.log(operate("/", 2, 3));
console.log(operate("*", 2, 3));
*/