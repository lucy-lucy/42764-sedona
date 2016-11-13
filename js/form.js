var link = document.querySelector(".js-link");
var form = document.querySelector(".search-form");

var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departute-date]");

form.classList.add("search-form-hide");

link.addEventListener ("click", function(event) {
  event.preventDefault();
  form.classList.toggle("search-form-hide");
  form.classList.toggle("search-form-show");
  arrivalDate.focus();
});

form.addEventListener("submit", function(event) {
  if(!arrivalDate.value || departureDate.value) {
    event.preventDefault();
    form.classList.remove("search-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  }
});
