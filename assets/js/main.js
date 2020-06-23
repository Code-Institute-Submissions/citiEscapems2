
	var myCity = [
	    {'name':'Dublin', 'img':'assets/img/dublin.jpg', 'country':'Ireland'},
	    {'name':'Milan', 'age':'32', 'country':'Italy'},
	    {'name':'Berlin', 'age':'29', 'country':'Germany'},
	    {'name':'Paris', 'age':'25', 'country':'France'},
	    {'name':'London', 'age':'27', 'country':'United Kingdom'},
	    {'name':'Vienna', 'age':'24', 'country':'Austria'},
	]
	
	

cityTile(myCity)

	function cityTile(data){
		var table = document.getElementById('myTile')

		for (var i = 0; i < data.length; i++){
			var tile = `<div class="row">
                        <div class="col col-sm-12 col-md-6 col-lg-3>
                            <li class="tile">
                            <img src="${data[i].img}" alt="Picture of ${data[i].name}" />
							<h3>${data[i].name}</h3>
							<div>${data[i].country}</div>
					  </li>
                      </div>
                      </div>`
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
    
