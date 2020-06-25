
	var myCity = [
	    {'name':'Dublin', 'img':'assets/img/dublin.jpg', 'country':'Ireland'},
	    {'name':'Milan', 'img':'assets/img/milan.jpg', 'country':'Italy'},
	    {'name':'Berlin', 'img':'assets/img/berlin.jpg', 'country':'Germany'},
	    {'name':'Paris', 'img':'assets/img/paris.jpg', 'country':'France'},
	    {'name':'London', 'img':'assets/img/london.jpg', 'country':'United Kingdom'},
        {'name':'Vienna', 'img':'assets/img/vienna.jpg', 'country':'Austria'},
        {'name':'Prague', 'img':'assets/img/prague.jpg', 'country':'Czechia'},
	    {'name':'Madrid', 'img':'assets/img/madrid.jpg', 'country':'Spain'},
        {'name':'Amsterdam', 'img':'assets/img/amsterdam.jpg', 'country':'Holland'},
        {'name':'Lisbon', 'img':'assets/img/lisbon.jpg', 'country':'Portugal'}
	]
	
const URL = "cities.json"	

cityTile(myCity)

	function cityTile(data){
		var table = document.getElementById('myTile')

		for (var i = 0; i < data.length; i++){
			var tile = `<li class="tile">
                            <a href="#"><img class="tile-img" src="${data[i].img}" alt="Picture of ${data[i].name}"/></a>
							<h3 class="tile-city">${data[i].name}</h3>
							<h5 class="tile-country">${data[i].country}</h5>
					  </li>
                      </div>
                      `
			table.innerHTML += tile
		}
    }
    
     function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 48.5785, lng: 14.9706}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
var locations = [
  {lat: 53.3498, lng: -6.2603},
  {lat: 51.5074, lng: -0.1278},
  {lat: 48.8566, lng: 2.3522},
  {lat: 45.4642, lng: 9.1900},
  {lat: 48.2082, lng: 16.3738},
  {lat: 52.5200, lng: 13.4050},
  {lat: 50.0755, lng: 14.4378},
  {lat: 40.4168, lng: -3.7038},
  {lat: 38.7223, lng: -9.1393},
  {lat: 52.3667, lng: 4.8945}
  
]
    
