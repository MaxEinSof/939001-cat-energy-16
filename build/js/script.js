var mainNav = document.querySelector(".main-nav");
var burgerToggle = document.querySelector(".main-nav__toggle");

var catalogButton = document.querySelectorAll(".catalog-item__button");
var showAllButton = document.querySelector(".main-catalog__button");
var addCatalogButton = document.querySelectorAll(".additional-item__button");

var form = document.querySelector(".program-form");
var catName = document.querySelector("#cat-name-field");
var catWeight = document.querySelector("#cat-weight-field");
var eMail = document.querySelector("#email-field");
var tel = document.querySelector("#tel-field");

mainNav.classList.remove("main-nav--nojs");

burgerToggle.addEventListener("click", function (evt) {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});

for (var i = 0; i < catalogButton.length; i++) {
  catalogButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
  })
}

showAllButton.addEventListener("click", function (evt) {
  evt.preventDefault();
});

for (var i = 0; i < addCatalogButton.length; i++) {
  addCatalogButton[i].addEventListener("click", function (evt) {
    evt.preventDefault();
  })
}

form.addEventListener("submit", function (evt) {
  if (!catName.value || !catWeight.value || !eMail.value || !tel.value) {
    evt.preventDefault();
    if (!catName.value) {
      catName.classList.add("program-form__input--required");
    }
    if (!catWeight.value) {
      catWeight.classList.add("program-form__input--required");
    }
    if (!eMail.value) {
      eMail.classList.add("program-form__input--required");
    }
    if (!tel.value) {
      tel.classList.add("program-form__input--required");
    }
  }
});
