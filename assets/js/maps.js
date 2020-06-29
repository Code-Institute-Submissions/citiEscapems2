var locations = [
  ['Dublin', 53.3498, -6.2603, 'Dublin is the capital of Ireland and the home of scholars and poets alike. For those of you who fancy a nice quiet pint or a rowdy sing along then this is the place for you. But be warned, it does not come cheap!', 'https://www.visitdublin.com/'],
  ['Milan', 45.4642, 9.1900, 'Milan, a metropolis in Italys northern Lombardy region, is a global capital of fashion and design.', 'https://www.introducingmilan.com/'],
  ['Paris', 48.8566, 2.3522, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['London', 51.5074, -0.1278, 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.','https://en.wikipedia.org/wiki/London' ],
  ['Berlin', 52.5200, 13.4050, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Vienna', 48.2082, 16.3738, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Prague', 50.0755, 14.4378, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Madrid', 40.4168, -3.7038, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Warsaw', 52.2297, 21.0122, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Amsterdam', 52.3667, 4.8945, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Lisbon', 38.7223, -9.1393, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris'],
  ['Zurich', 47.3769, 8.5417, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.wikipedia.org/wiki/Paris']
  ];

function initMap() {

    var myLatLng = {
      center: new google.maps.LatLng(53.3498, -6.2603),
      zoom: 4,
    };
    var map = new google.maps.Map(document.getElementById("map"),
        myLatLng);

         setMarkers(map,locations)

  }
  
    function setMarkers(map,locations){

      var marker, i

for (i = 0; i < locations.length; i++)
 {  

 var name = locations[i][0]
 var lat = locations[i][1]
 var long = locations[i][2]
 var details =  locations[i][3]
 var site = locations[i][4]

 latlngset = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({  
          map: map, title: name , position: latlngset  
        });
        map.setCenter(marker.getPosition())


        var content =  name + `</br>` + details + " " + `<a href="` + site + `"target="blank">visit here</a>`

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
        
    })(marker,content,infowindow)); 
    

  }
  }