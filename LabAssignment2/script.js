
// Get HTML elements
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let cityInput = document.getElementById("city");

let addButton = document.getElementById("add");
let updateButton = document.getElementById("update");
let resetButton = document.getElementById("reset");

let personTable = document.getElementById("personTable");
let message = document.getElementById("message");

// Persons array
let persons = [];

// Store the index of the person being edited
let editingIndex = -1;

function getGender() {
    let selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    return selectedGender.value;
}

function getFormData() {
    return {
        name: nameInput.value.trim(),
        gender: getGender(),
        age: ageInput.value,
        city: cityInput.value
    };
}

function displayPersons() {

    personTable.innerHTML = "";

    persons.forEach(function(person, index) {

        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = person.name;

        let genderCell = document.createElement("td");
        genderCell.textContent = person.gender;

        let ageCell = document.createElement("td");
        ageCell.textContent = person.age;

        let cityCell = document.createElement("td");
        cityCell.textContent = person.city;

        let actionCell = document.createElement("td");

        let updateLink = document.createElement("a");
        updateLink.href = "#";
        updateLink.textContent = "Update";
        updateLink.dataset.action = "update";
        updateLink.dataset.index = index;

        let removeLink = document.createElement("a");
        removeLink.href = "#";
        removeLink.textContent = "Remove";
        removeLink.dataset.action = "remove";
        removeLink.dataset.index = index;

        actionCell.appendChild(updateLink);
        actionCell.appendChild(document.createTextNode(" / "));
        actionCell.appendChild(removeLink);

        row.appendChild(nameCell);
        row.appendChild(genderCell);
        row.appendChild(ageCell);
        row.appendChild(cityCell);
        row.appendChild(actionCell);

        personTable.appendChild(row);

    });
}

function validateForm() {

    if (nameInput.value.trim() === "") {
        message.textContent = "Please enter a name.";
        return false;
    }

    if (ageInput.value === "" || Number(ageInput.value) <= 0) {
        message.textContent = "Please enter a valid age.";
        return false;
    }

    if (!Number.isInteger(Number(ageInput.value))) {
        message.textContent = "Age must be a whole number.";
        return false;
    }

    if (cityInput.value === "") {
        message.textContent = "Please select a city.";
        return false;
    }

    return true;
}

addButton.addEventListener("click", function() {

    if (!validateForm()) {
        return;
    }

    let person = getFormData();

    persons.push(person);

    displayPersons();

    message.textContent = "Person added successfully.";

});

personTable.addEventListener("click", function(event) {

    let clickedLink = event.target.closest("a");

    if (clickedLink === null) {
        return;
    }

    event.preventDefault();

    let index = Number(clickedLink.dataset.index);

    // Update selected person
    if (clickedLink.dataset.action === "update") {

        let person = persons[index];

        nameInput.value = person.name;
        ageInput.value = person.age;
        cityInput.value = person.city;

        document.querySelector(
            'input[name="gender"][value="' + person.gender + '"]'
        ).checked = true;

        editingIndex = index;

        addButton.disabled = true;
        updateButton.disabled = false;

        message.textContent = "Edit the selected person's details.";

    }

    // Remove selected person
    else if (clickedLink.dataset.action === "remove") {

        persons.splice(index, 1);

        // Adjust editing index if necessary
        if (editingIndex === index) {
            resetForm();
        }
        else if (editingIndex > index) {
            editingIndex--;
        }

        displayPersons();

        message.textContent = "Person removed successfully.";

    }

});


// Update the existing person
updateButton.addEventListener("click", function() {

    if (!validateForm()) {
        return;
    }

    if (editingIndex !== -1) {

        persons[editingIndex] = getFormData();

        displayPersons();

        resetForm();

        message.textContent = "Person updated successfully.";

    }

});


function resetForm() {

    nameInput.value = "Tehreem";
    ageInput.value = "31";
    cityInput.value = "Lahore";

    document.getElementById("male").checked = false;
    document.getElementById("female").checked = true;

    editingIndex = -1;

    addButton.disabled = false;
    updateButton.disabled = true;

    message.textContent = "";
}

resetButton.addEventListener("click", function() {
    resetForm();
});

