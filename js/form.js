var link = document.querySelector(".js-link");
var form = document.querySelector('.search-form');

link.addEventListener ("click", function(event) {
  event.preventDefault();
  if (!form.classList.contains("search-form-hide")) {
    form.classList.toggle("search-form-hide");
  }
  else {
    form.classList.toggle("search-form-show");
  }
});
