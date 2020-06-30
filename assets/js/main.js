var myCity = [
  { name: "Dublin", img: "assets/img/dublin.jpg", country: "Ireland" },
  { name: "Milan", img: "assets/img/milan.jpg", country: "Italy" },
  { name: "Berlin", img: "assets/img/berlin.jpg", country: "Germany" },
  { name: "Paris", img: "assets/img/paris.jpg", country: "France" },
  { name: "London", img: "assets/img/london.jpg", country: "United Kingdom" },
  { name: "Vienna", img: "assets/img/vienna.jpg", country: "Austria" },
  { name: "Prague", img: "assets/img/prague.jpg", country: "Czechia" },
  { name: "Madrid", img: "assets/img/madrid.jpg", country: "Spain" },
  { name: "Amsterdam", img: "assets/img/amsterdam.jpg", country: "Holland" },
  { name: "Zurich", img: "assets/img/zurich.jpg", country: "Switzerland" },
  { name: "Warsaw", img: "assets/img/warsaw.jpg", country: "Poland" },
  { name: "Lisbon", img: "assets/img/lisbon.jpg", country: "Portugal" },
];

cityTile(myCity);

function cityTile(data) {
  var table = document.getElementById("cityTiles");

  for (var i = 0; i < data.length; i++) {
    var tile = `<div class="col-sm-12 col-md-6 col-lg-3 mt-5">
                    <div class="container fade">
                        <a href="#"><img class="tile-img" src="${data[i].img}" alt="Picture of ${data[i].name}"/></a>
					    <div class="city-centered"><h3 class="tile-city">${data[i].name}</h3></div>
					    <div class="bottom"><h5 class=tile-country>${data[i].country}</h5></div>
					</div>
                </div>`;
    table.innerHTML += tile;
  }
}

/*--------------------------------------------------------------------------------------------------------------------------Fade in & out function*/
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view once it intersects at a speed of 500ms and opacity of 1
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //on scroll up the element fades out at a speed of 500 ms to a 0 opacity
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handlerpage-load
});

//Scrolling button on click from map in navbar to allow slowish scroll to map section
$(".btn-map").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});
$("#btn-city").click(function() {
    $('html,body').animate({
        scrollTop: $("#cityTiles").offset().top},
        'slow');
});