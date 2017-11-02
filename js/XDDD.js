var data=[];
	$.getJSON('./assets/json/cards.json', function(datek)){
		var name = []
		var availability = []
		var description = []
		var sprite = []

		for (var j=0; j<4; j++) {

			name[j] = datek.products[j].name;
			availability[j] = datek.products[j].availability;
			description[j] = datek.products[j].description;
			sprite[j] = datek.products[j].sprite;
		}

		for (var i in datek.products){

			data.push({

				name: name[i],
				availability: availability[i],
				description: description[i],
				sprite: sprite[i]
			});
		}
	};