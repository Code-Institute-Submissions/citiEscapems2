
	var myCity = [
	    {'name':'Dublin', 'age':'assets/img/dublin.jpg', 'country':'Ireland'},
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
                            <img src="${data[i].age}" alt="city name" />
							<h3>${data[i].name}</h3>
							<div>${data[i].country}</div>
					  </li>
                      </div>
                      </div>`
			table.innerHTML += tile
		}
	}

    
