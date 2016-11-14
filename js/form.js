var link = document.querySelector(".js-link");
var form = document.querySelector(".search-form");

if(form) {
  var arrivalDate = form.querySelector("[name=arrival-date]");
  var departureDate = form.querySelector("[name=departure-date]");

  form.classList.add("search-form-hide");
}

if(link) {
  link.addEventListener ("click", function(event) {
    event.preventDefault();
    form.classList.remove("search-form-error");
    form.classList.toggle("search-form-hide");
    form.classList.toggle("search-form-show");
    if(arrivalDate) {
      arrivalDate.focus();
    }
  });
}

if(form) {
  form.addEventListener("submit", function(event) {
    if(!arrivalDate.value || !departureDate.value) {
      event.preventDefault();
      form.classList.remove("search-form-error");
      form.offsetWidth;
      form.classList.add("search-form-error");
    }
  });
}

function initMap() {
  var sedona = {lat: 34.869867, lng: -111.760978};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: sedona,
    scrollwheel: false,
    zoom: 9,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: sedona,
    map: map
  });
}
