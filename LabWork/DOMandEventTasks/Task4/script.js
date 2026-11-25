let city = document.getElementById("city");
let button = document.getElementById("remove");
let result = document.getElementById("result");

button.addEventListener("click", function(){
    if(city.value === ""){
        result.textContent = "Please select a city first";
    }
    else{
        city.remove(city.selectedIndex);
        result.textContent = "City removed successfully";
    }
});