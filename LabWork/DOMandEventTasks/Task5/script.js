let paragraph = document.getElementById("paragraph");
let InputProperty = document.getElementById("property");
let InputValue = document.getElementById("value");
let button = document.getElementById("apply");
let message = document.getElementById("message");

button.addEventListener("click", function(){
    let property = InputProperty.value.trim();
    let value = InputValue.value.trim();

    if(property === "" || value === ""){
        message.textContent = "Please enter the CSS property and value...";
    }
    else if(!CSS.supports(property, value)){
        message.textContent = "Please enter the valis CSS property and value...";
    }
    else{
        paragraph.style.setProperty(property, value);
        message.textContent = "Style applied successfully"
    }
})