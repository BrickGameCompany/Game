let data=[];
	$.getJSON('./assets/json/cards.json', function(datek){
		let name = [];
		let availability = [];
		let description = [];
		let sprite = [];

		for (let j=0; j<4; j++) {

			name[j] = datek.cards[j].name;
			availability[j] = datek.cards[j].availability;
			description[j] = datek.cards[j].description;
			sprite[j] = datek.cards[j].sprite;
		}

		for (let i in datek.cards){

			data.push({

				name: name[i],
				availability: availability[i],
				description: description[i],
				sprite: sprite[i]
			});
		}
	});