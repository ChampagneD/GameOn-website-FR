function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close the Modale on click
// Retrieve the close button from the DOM, retrieve form and add closeModale function as a click event
const closebutton = document.querySelector(".close");
const sendbutton = document.querySelector("#btn-send");
const formulaire = document.getElementById("form");

formulaire.addEventListener("submit", function (e) {
  e.preventDefault(); // stop l'envoi du formulaire avec la méthode preventDefault() de l'événement
});

closebutton.addEventListener("click", closeModale);
sendbutton.addEventListener("click", closeModale);

function closeModale(el) {
  // change form display and resetting its content

  modalbg.style.display = "none";
  formulaire.reset();
  formulaire.style.display = "block";
}
