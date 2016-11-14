var link = document.querySelector(".js-link");
var form = document.querySelector(".search-form");

var arrivalDate = form.querySelector("[name=arrival-date]");
var departureDate = form.querySelector("[name=departure-date]");
var searchBtn = form.querySelector('.search-btn');

form.classList.add("search-form-hide");

link.addEventListener ("click", function(event) {
  event.preventDefault();
  form.classList.remove("search-form-error");
  form.classList.toggle("search-form-hide");
  form.classList.toggle("search-form-show");
  arrivalDate.focus();
});

form.addEventListener("submit", function(event) {
  if(form && searchBtn){
    if(!arrivalDate.value || !departureDate.value) {
      event.preventDefault();
      form.classList.remove("search-form-error");
      form.offsetWidth;
      form.classList.add("search-form-error");
    }
  }
});
