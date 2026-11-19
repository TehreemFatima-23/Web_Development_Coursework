let number = document.getElementById("number");

let button = document.getElementById("Calculate");

button.addEventListener("click", function(){
    let value = Number(number.value)
    let square = value*value
    alert("The square of the entered number is: " + square);
});

