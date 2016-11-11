var link = document.querySelector(".js-link");
var form = document.querySelector('.search-form');

form.classList.add("search-form-hide");

link.addEventListener ("click", function(event) {
  event.preventDefault();
  form.classList.toggle("search-form-hide");
  form.classList.toggle("search-form-show");
});
