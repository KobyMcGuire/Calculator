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
    viewer.innerHTML += `${button.textContent}`;
}


let buttons = document.querySelectorAll(".button");
let viewer = document.querySelector(".viewer");
let arr = [];
let firstChain = false;



for (const button of buttons) {
    button.addEventListener("click", function() {
        console.log(arr.length);

        //Will clear the viewer when a number is pressed after an operator
        if (viewer.innerHTML === "+" || 
            viewer.innerHTML === "-" ||
            viewer.innerHTML === "*" ||
            viewer.innerHTML === "/") {
                arr.push(viewer.textContent);
                clearViewer();
        }

        //Seperate from above

        if (button.id === "equals") {
            arr.push(parseInt(viewer.innerHTML));
            clearViewer();
            let evaluation = operate(arr[1], arr[0], arr[2]);
            //Clear array to get ready for another operation
            arr = [];
            //Update Viewer
            viewer.innerHTML = `${evaluation}`;
        }

        if (button.id === "number") {
            if (firstChain === true) {
                clearViewer();
                //Reset First Chain in order to not limit the calculator to only one digit inputs
                firstChain = false; 
            }
            displayNumbers(button);
        }

        if (button.id === "operator") {
            arr.push(parseInt(viewer.innerHTML));
            clearViewer();
            if (arr.length === 3) {
                let evaluation = operate(arr[1], arr[0], arr[2]);
                arr.length = 0;
                arr.push(evaluation);
                arr.push(button.textContent);
                console.log(arr);
                firstChain = true;
                viewer.innerHTML = `${evaluation}`;
                return;  
            }
            displayNumbers(button);  
        }
 
        if (button.id === "clear") {
            clearViewer();
            arr = [];
        }

        console.log(arr);

    })
}


