console.log("Add validation!");

let form = document.querySelector("#parking-form");

document.getElementsByTagName("label")[0].setAttribute("id", "name-label");

document.getElementsByTagName("label")[1].setAttribute("id", "car-label");

document
  .getElementsByTagName("label")[2]
  .setAttribute("id", "start-date-label");

document.getElementsByTagName("label")[3].setAttribute("id", "days-label");

document
  .getElementsByTagName("label")[4]
  .setAttribute("id", "credit-card-label");

document.getElementsByTagName("label")[5].setAttribute("id", "cvv-label");

document
  .getElementsByTagName("label")[6]
  .setAttribute("id", "expiration-label");

function validateName() {
  let nameInput = document.querySelector("#name");
  let nameValue = nameInput.value;
  let nameField = nameInput.parentElement;
  let nameLabel = document.querySelector("#name-label");
  if (nameValue !== "") {
    nameField.classList.remove("input-invalid");
    nameField.classList.add("input-valid");
    nameLabel.textContent="Name"
  } else {
    nameField.classList.remove("input-valid");
    nameField.classList.add("input-invalid");
    nameLabel.textContent = "Name is required!";
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
  let carLabel= document.querySelector("#car-label");

  if (carYearValue !== "" && carMakeValue !== "" && carModelValue !== "") {
    carField.classList.remove("input-invalid");
    carField.classList.add("input-valid");
    carLabel.textContent="Car";
  } else {
    carField.classList.remove("input-valid");
    carField.classList.add("input-invalid");
    carLabel.textContent="Car is required!"
  }
}
function validateStartDate() {
  let startDate = document.querySelector("#start-date");
  let startDateValue = startDate.value;
  let startDateField = startDate.parentElement;
let startDateLabel = document.querySelector("#start-date-label");
  if (startDateValue !== "") {
    startDateField.classList.remove("input-invalid");
    startDateField.classList.add("input-valid");
    startDateLabel.textContent="Date parking"
  } else {
    startDateField.classList.remove("input-valid");
    startDateField.classList.add("input-invalid"); startDateLabel.textContent="Date parking is required!"
  }
}
function validateDays() {
  let days = document.querySelector("#days");
  let daysValue = days.value;
  let daysField = days.parentElement;
  let daysLabel = document.querySelector("#days-label");

  if (daysValue !== "") {
    daysField.classList.remove("input-invalid");
    daysField.classList.add("input-valid");
    daysLabel.textContent="Number of days";
} else {
    daysField.classList.remove("input-valid");
    daysField.classList.add("input-invalid");
    daysLabel.textContent="Number of days is required!";
  }
}
function validateCreditCard() {
  let creditCard = document.querySelector("#credit-card");
  let creditCardValue = creditCard.value;
  let creditCardField = creditCard.parentElement;
let creditCardLabel = document.querySelector("#credit-card-label");
  if (creditCardValue !== "") {
    creditCardField.classList.remove("input-invalid");
    creditCardField.classList.add("input-valid");
    creditCardLabel.textContent="Credit Card";
} else {
    creditCardField.classList.remove("input-valid");
    creditCardField.classList.add("input-invalid");
    creditCardLabel.textContent="Credit Card is required!";
  }
}
function validateCvv() {
  let cvvInput = document.querySelector("#cvv");
  let cvvValue = cvvInput.value;
  let cvvField = cvvInput.parentElement;
let cvvLabel = document.querySelector("#cvv-label");
  if (cvvValue !== "") {
    cvvField.classList.remove("input-invalid");
    cvvField.classList.add("input-valid");
    cvvLabel.textContent="CVV";
} else {
    cvvField.classList.remove("input-valid");
    cvvField.classList.add("input-invalid");
    cvvLabel.textContent="CVV is required!";
  }
}
function validateExpiration() {
  let expirationInput = document.querySelector("#expiration");
  let expirationValue = expirationInput.value;
  let expirationField = expirationInput.parentElement;
let expirationLabel = document.querySelector("#expiration-label");
  if (expirationValue !== "") {
    expirationField.classList.remove("input-invalid");
    expirationField.classList.add("input-valid");
    expirationLabel.textContent="Expiration"
} else {
    expirationField.classList.remove("input-valid");
    expirationField.classList.add("input-invalid");
    expirationLabel.textContent="Expiration is required!"
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateName();
  validateCar();
  validateStartDate();
  validateDays();
  validateCreditCard();
  validateCvv();
  validateExpiration();
});
