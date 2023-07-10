const errorFirst = document.getElementById("errorFirstName");
const errorLastName = document.getElementById("errorLastName");
const errorEmail = document.getElementById("errorMail");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorQuantity = document.getElementById("errorQuantity");
const errorLoc = document.getElementById("errorLoc");
const errorCheckbox = document.getElementById("errorCheckBox");

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const radios = document.querySelectorAll('input[name="location"');
const checkbox = document.getElementById("checkbox1");
const modalBody = document.getElementsByClassName("modal-body");
const inputButton = document.createElement("input");

export const isValidForm = () => {
  return (
    isFirstNameValid(first) &&
    isLastNameValid(last) &&
    isEmailValid(email) &&
    isBirthDateValid(birthdate) &&
    isTournamentsValid(quantity) &&
    isRadiosValid(radios) &&
    isCheckboxValid(checkbox)
  );
};

function showError(error, text, target) {
  error.style.display = "block";
  error.innerHTML = text;
  target.style.borderColor = "red";
  target.focus();
}

function hideError(error, target) {
  error.style.display = "none";
  target.style.borderColor = "inherit";
}

export const isFirstNameValid = (el) => {
  const target = el.target || el;

  const regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  if (target.value.trim() === "") {
    //  Instruction d'erreur pour champ INPUT firstName vide

    showError(errorFirst, "Vous devez entrer votre prénom", target);

    return false;
  } else if (!target.value.match(regex)) {
    showError(
      errorFirst,
      "Veuillez rentrer uniquement des caractéres valides",
      target
    );
  } else if (target.value.length < 2) {
    showError(errorFirst, "Veuillez remplir le champ prénom", target);
    return false;
  } else {
    hideError(errorFirst, target);
    return true;
  }
};

export const isLastNameValid = (el) => {
  const target = el.target || el;

  const regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  if (target.value.trim() === "") {
    //  Instruction d'erreur pour champ INPUT firstName vide
    showError(errorLastName, "Vous devez entrer votre nom", target);

    return false;
  } else if (!target.value.match(regex)) {
    showError(
      errorFirst,
      "Veuillez rentrer uniquement des caractéres valides",
      target
    );
  } else if (target.value.length < 2) {
    // Instruction d'erreur pour champ lastName tailles des caractères
    showError(
      errorLastName,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom",
      target
    );

    return false;
  } else {
    hideError(errorLastName, target);
    return true;
  }
};

export const isEmailValid = (el) => {
  const target = el.target || el;

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (target.value.trim() === "") {
    showError(errorEmail, "Vous devez entrer votre email", target);

    return false;
  } else if (!target.value.match(regexEmail)) {
    showError(errorEmail, "Veuillez rentrer une adresse mail valide", target);

    return false;
  } else {
    hideError(errorEmail, target);
    return true;
  }
};

export const isBirthDateValid = (el) => {
  const target = el.target || el;

  let regexDate = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

  if (target.value.trim() === "") {
    showError(
      errorBirthdate,
      "Vous devez entrer votre date de naissance",
      target
    );

    return false;
  } else if (!target.value.match(regexDate)) {
    showError(
      errorBirthdate,
      "Veuillez entrer une date de naissance valide",
      target
    );
    return false;
  } else {
    hideError(errorBirthdate, target);

    return true;
  }
};

export const isTournamentsValid = (el) => {
  const target = el.target || el;

  if (target.value.trim() === "") {
    showError(
      errorQuantity,
      "Vous devez entrer votre nombre de tournois",
      target
    );

    return false;
  } else {
    hideError(errorQuantity, target);

    return true;
  }
};

export const isRadiosValid = (el) => {
  const target = el.target || el;
  const radios = document.querySelectorAll('input[name="location"');

  let selected;

  for (const radio of radios) {
    if (radio.checked) {
      selected = radio.value;
      break;
    }
  }

  if (!selected) {
    errorLoc.style.display = "block";
    errorLoc.innerHTML = "Vous devez selectionner un pays";

    return false;
  } else {
    return true;
  }
};
export const isCheckboxValid = (el) => {
  const target = el.target || el;

  if (!target.checked) {
    showError(
      errorCheckbox,
      "Vous devez vérifier que vous acceptez les termes et conditions.",
      target
    );
    return false;
  } else {
    hideError(errorCheckbox, target);

    return true;
  }
};
