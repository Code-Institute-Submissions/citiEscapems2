
	var myCity = [
	    {'name':'Dublin', 'age':'assets/img/dublin.jpg', 'birthdate':'11/10/1989'},
	    {'name':'Milan', 'age':'32', 'birthdate':'10/1/1989'},
	    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
	    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
	    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
	    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
	]
	
	cityTile(myCity)



	function cityTile(data){
		var table = document.getElementById('myTile')

		for (var i = 0; i < data.length; i++){
			var tile = `<div class="tile">
                            <li>
                            <img src="${data[i].age}" alt="city name" />
							<h3>${data[i].name}</h3>
							<div>${data[i].birthdate}</div>
					  </li>
                      </div>`
			table.innerHTML += tile
		}
	}
