console.log("Add validation!");

let form = document.querySelector("#parking-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateName()
  
});

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
