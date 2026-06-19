console.log("JavaScript Runtime Environment Demo");

console.log("Program Started");

function firstTask(){
    console.log("Call Stack Example");
}

firstTask();

console.log("Program Ended");


// ----------------------
// Hoisting Demo
// ----------------------

showMessage();

function showMessage(){
    console.log("Function executed before declaration");
}


// var hoisting

console.log(myName);

var myName = "Meenakshi";


// TDZ Example

/*
console.log(city);

let city = "Hyderabad";*/


// Normal Function

function calculate(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let operation =
    document.getElementById("operation").value;

    let result;

    switch(operation){

        case "+":
            result = n1 + n2;
            break;

        case "-":
            result = n1 - n2;
            break;

        case "*":
            result = n1 * n2;
            break;

        case "/":

            if(n2 == 0){
                alert("Cannot Divide By Zero");
                return;
            }

            result = n1 / n2;
            break;

        default:
            result = "Invalid Operation";
    }

    console.log(
    "[Operation]",
    n1,
    operation,
    n2,
    "=",
    result
    );

    let resultBox =
    document.getElementById("resultBox");

    resultBox.innerHTML = result;

    resultBox.classList.add("animate");

    console.log(
    "[Animation Triggered]"
    );

    document.getElementById("hiddenText")
    .style.display = "block";

    console.log(
    "[DOM Updated] Display:",
    result
    );
}

// Arrow Function
const clearResult = () => {

    let answer =
    confirm("Do You Want To Clear Result ?");

    if(answer){

        document.getElementById("resultBox")
        .innerHTML = "Result Will Display Here";

        document.getElementById("hiddenText")
        .style.display = "none";

        alert("Result Cleared");
    }
};

// Anonymous Function

let welcome = function(){

    console.log(
    "Anonymous Function Executed"
    );
};

welcome();

// IIFE - Immediately Invoked Function Expression

(function(){

    console.log(
    "IIFE Executed Automatically"
    );

})();

// Function Currying

function greet(name){

    return function(message){

        return message + " " + name;
    }
}

let user = greet("John");

console.log(
user("Hello")
);

console.log(
"[Currying Demo] Hello John! Welcome Back!"
);

// BOM Prompt

let userName =
prompt("Enter Your Name");

if(userName){

    console.log(
    "Welcome " + userName
    );
}

// DOM Methods Demo

console.log(
document.getElementById("num1")
);

console.log(
document.querySelector("#operation")
);