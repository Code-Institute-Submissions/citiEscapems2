var locations = [
  ['Dublin', 53.3498, -6.2603, 'Dublin is the capital of Ireland and the home of scholars and poets alike. For those of you who fancy a nice quiet pint or a rowdy sing along then this is the place for you. But be warned, it does not come cheap!', 'https://www.visitdublin.com/'],
  ['Milan', 45.4642, 9.1900, 'Milan, a metropolis in Italys northern Lombardy region, is a global capital of fashion and design.', 'https://www.introducingmilan.com/'],
  ['Paris', 48.8566, 2.3522, 'Paris, Frances capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.', 'https://en.parisinfo.com/'],
  ['London', 51.5074, -0.1278, 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.','https://en.wikipedia.org/wiki/London' ],
  ['Berlin', 52.5200, 13.4050, 'Berlin, Germany’s capital, dates to the 13th century. Reminders of the citys turbulent 20th-century history include its Holocaust memorial and the Berlin Walls graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification', 'https://www.visitberlin.de/en'],
  ['Vienna', 48.2082, 16.3738, 'Vienna, Austria’s capital, lies in the country’s east on the Danube River. Its artistic and intellectual legacy was shaped by residents including Mozart, Beethoven and Sigmund Freud. The city is also known for its Imperial palaces, including Schönbrunn, the Habsburgs’ summer residence.', 'https://www.wien.info/en'],
  ['Prague', 50.0755, 14.4378, 'Prague, capital city of the Czech Republic, is bisected by the Vltava River. Nicknamed “the City of a Hundred Spires,” its known for its Old Town Square, the heart of its historic core, with colorful baroque buildings, Gothic churches and the medieval Astronomical Clock, which gives an animated hourly show.', 'https://www.wien.info/en'],
  ['Madrid', 40.4168, -3.7038, 'Madrid, Spains central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters.', 'https://www.esmadrid.com/en'],
  ['Warsaw', 52.2297, 21.0122, 'Warsaw is the capital and largest city of Poland.The metropolis stands on the Vistula River in east-central Poland and its population is officially estimated at 1.8 million residents within a greater metropolitan area of 3.1 million residents,[3] which makes Warsaw the 7th most-populous capital city in the European Union.', 'https://warsawtour.pl/en/main-page/'],
  ['Amsterdam', 52.3667, 4.8945, 'Amsterdam is the Netherlands’ capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city’s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk.', 'https://www.iamsterdam.com/en/see-and-do'],
  ['Lisbon', 38.7223, -9.1393, 'Lisbon is Portugal’s hilly, coastal capital city. From imposing São Jorge Castle, the view encompasses the old city’s pastel-colored buildings, Tagus Estuary and Ponte 25 de Abril suspension bridge.', 'https://www.visitlisboa.com/en'],
  ['Zurich', 47.3769, 8.5417, 'The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history.', 'https://www.zuerich.com/en']
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


        var content = `<h3>` + name + `</h3>` + `</br>` + `<p>` + details + `</p>` + " " + `<a href="` + site + `"target="blank">visit here</a>`

  var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
        
    })(marker,content,infowindow)); 
    

  }
  }