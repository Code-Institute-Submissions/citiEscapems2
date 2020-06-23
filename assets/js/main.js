
	var myCity = [
	    {'name':'Dublin', 'img':'assets/img/dublin.jpg', 'country':'Ireland'},
	    {'name':'Milan', 'img':'assets/img/milan.jpg', 'country':'Italy'},
	    {'name':'Berlin', 'img':'assets/img/berlin.jpg', 'country':'Germany'},
	    {'name':'Paris', 'img':'assets/img/paris.jpg', 'country':'France'},
	    {'name':'London', 'img':'assets/img/london.jpg', 'country':'United Kingdom'},
        {'name':'Vienna', 'img':'assets/img/vienna.jpg', 'country':'Austria'},
        {'name':'Prague', 'img':'assets/img/prague.jpg', 'country':'Czechia'},
	    {'name':'Madrid', 'img':'assets/img/madrid.jpg', 'country':'Spain'},
	]
	
	

cityTile(myCity)

	function cityTile(data){
		var table = document.getElementById('myTile')

		for (var i = 0; i < data.length; i++){
			var tile = `<li class="tile">
                            <img class="tile-img" src="${data[i].img}" alt="Picture of ${data[i].name}" />
							<h3>${data[i].name}</h3>
							<div>${data[i].country}</div>
					  </li>
                      </div>
                      `
			table.innerHTML += tile
		}
    }
    
     function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: -28.024, lng: 140.887}
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
  {lat: -8.409518, lng: 115.0920},
  {lat: -33.918861, lng: 18.423300},
  {lat: 16.5004, lng: 151.7415}
  
]
    
