let number1 = document.getElementById("number1");

let number2 = document.getElementById("number2");

let button = document.getElementById("Calculate");

let result = document.getElementById("result");

button.addEventListener("click", function(){
    
    let operation = document.querySelector('input[name=operation]:checked');

    if(number1.value === "" || number2.value === ""){
        result.textContent = "Please enter both numbers";
    }
    else if(operation === null){
        result.textContent = "Please select an operation";
    }
    else{
        let num1 = Number(number1.value);
        let num2 = Number(number2.value);

        if(operation.value === "add"){
            result.textContent = "Result: " + (num1 + num2);
        }
        else if(operation.value === "subtract"){
            result.textContent = "Result: " + (num1 - num2);
        }
        else if(operation.value === "multiply"){
            result.textContent = "Result: " + (num1 * num2);
        }
        else if(operation.value === "divide"){
            if(num2 === 0){
                result.textContent = "Cannot divide by zero";
            }
            else{
                result.textContent = "Result: " + (num1 / num2);
            }
        }

    }
    
})