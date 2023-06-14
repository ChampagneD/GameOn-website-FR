import {
  isValidForm,
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isBirthDateValid,
  isTournamentsValid,
  isRadiosValid,
  isCheckboxValid,
} from "./form.js";

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");

first.addEventListener("focusout", function (el) {
  isFirstNameValid(el);
});
last.addEventListener("focusout", function (el) {
  isLastNameValid(el);
});
email.addEventListener("focusout", function (el) {
  isEmailValid(el);
});
birthdate.addEventListener("focusout", function (el) {
  isBirthDateValid(el);
});
quantity.addEventListener("focusout", function (el) {
  isTournamentsValid(el);
});
checkbox.addEventListener("click", function (el) {
  isCheckboxValid(el);
});

document.getElementById("form").addEventListener("submit", function (e) {
  if (isValidForm()) {
    document.querySelector("#form-confirmation-message").style.display = "flex";

    document.querySelector("#form").style.display = "none";
  }
});
