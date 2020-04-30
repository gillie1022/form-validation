console.log("Add validation!");

let form = document.querySelector("#parking-form");

function validateName() {
  let nameInput = document.querySelector("#name");
  let nameValue = nameInput.value;
  let nameField = nameInput.parentElement;

  if (nameValue !== "") {
    nameField.classList.remove("input-invalid");
    nameField.classList.add("input-valid");
  } else {
    nameField.classList.remove("input-valid");
    nameField.classList.add("input-invalid");
  }
}

function validateCar() {
  let carYear = document.querySelector("#car-year");
  let carYearValue = carYear.value;
  let carMake = document.querySelector("#car-make");
  let carMakeValue = carMake.value;
  let carModel = document.querySelector("#car-model");
  let carModelValue = carModel.value;
  let carField = document.querySelector("#car-field");

  if (carYearValue !== "" && carMakeValue !== "" && carModelValue !== "") {
    carField.classList.remove("input-invalid");
    carField.classList.add("input-valid");
  } else {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
  }
}
function validateStartDate() {
  let startDate = document.querySelector("#start-date");
  let startDateValue = startDate.value;
  let startDateField = startDate.parentElement;

  if (startDateValue !== "") {
    startDateField.classList.remove("input-invalid");
    startDateField.classList.add("input-valid");
  } else {
    startDateField.classList.remove("input-valid");
    startDateField.classList.add("input-invalid");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateName();
  validateCar();
  validateStartDate()
});
