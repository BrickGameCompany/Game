let tablica = 0;
let bl = 1;
let cardState = {
    
    create: function () {
        buttonPlay = game.add.button(game.world.centerX -165,10,'button-play',this.go,this,2,1,0);
        let sel = game.add.text(game.world.centerX, 30, "Selected:", {fill: 'red'});


        buttonCard1 = game.add.button(15,100,'kartap',this.go1,this,2,1,1);
        buttonCard2 = game.add.button(195,100,'kartap',this.go2,this,2,1,0);
        buttonCard3 = game.add.button(375,100,'kartap',this.go3,this,2,1,0);
        buttonCard4 = game.add.button(555,100,'kartap',this.go4,this,2,1,0);
        buttonCard5 = game.add.button(735,100,'kartap',this.go5,this,2,1,0);
        buttonCard6 = game.add.button(915,100,'kartap',this.go6,this,2,1,0);
        buttonCard7 = game.add.button(1095,100,'kartap',this.go7,this,2,1,0);
        buttonCard8 = game.add.button(15,375,'kartap',this.go8,this,2,1,0);
        buttonCard9 = game.add.button(195,375,'kartap',this.go9,this,2,1,0);
        buttonCard10 = game.add.button(375,375,'kartap',this.go10,this,2,1,0);
        buttonCard11 = game.add.button(555,375,'kartap',this.go11,this,2,1,0);
        buttonCard12 = game.add.button(735,375,'kartap',this.go12,this,2,1,0);
        buttonCard13 = game.add.button(915,375,'kartap',this.go13,this,2,1,0);
        buttonCard14 = game.add.button(1095,375,'kartap',this.go14,this,2,1,0);

        let name1 = game.add.text(55, 120, cards.cards[1].name, {fill: 'black' , fontSize: '15px'});
        let name2 = game.add.text(245, 120, cards.cards[2].name, {fill: 'black' , fontSize: '15px'});
        let name3 = game.add.text(425, 120, cards.cards[3].name, {fill: 'black' , fontSize: '15px'});
        let name4 = game.add.text(585, 125, cards.cards[4].name, {fill: 'black' , fontSize: '10px'});
        let name5 = game.add.text(775, 125, cards.cards[5].name, {fill: 'black' , fontSize: '10px'});
        let name6 = game.add.text(955, 120, cards.cards[6].name, {fill: 'black' , fontSize: '15px'});
        let name7 = game.add.text(1125, 125, cards.cards[7].name, {fill: 'black' , fontSize: '10px'});
        let name8 = game.add.text(70, 395, cards.cards[8].name, {fill: 'black' , fontSize: '15px'});
        let name9 = game.add.text(220, 395, cards.cards[9].name, {fill: 'black' , fontSize: '15px'});
        let name10 = game.add.text(410, 395, cards.cards[10].name, {fill: 'black' , fontSize: '15px'});
        let name11 = game.add.text(595, 395, cards.cards[11].name, {fill: 'black' , fontSize: '15px'});
        let name12 = game.add.text(775, 395, cards.cards[12].name, {fill: 'black' , fontSize: '15px'});
        let name13 = game.add.text(955, 395, cards.cards[13].name, {fill: 'black' , fontSize: '15px'});
        let name14 = game.add.text(1135, 395, cards.cards[14].name, {fill: 'black' , fontSize: '15px'});
        
        let sprite1 = game.add.image(55, 120+30, cards.cards[1].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite2 = game.add.image(245, 120+30, cards.cards[2].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite3 = game.add.image(425, 120+30, cards.cards[3].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite4 = game.add.image(585, 125+30, cards.cards[4].sprite, {fill: 'black' , fontSize: '10px'});
        let sprite5 = game.add.image(775, 125+30, cards.cards[5].sprite, {fill: 'black' , fontSize: '10px'});
        let sprite6 = game.add.image(955, 120+30, cards.cards[6].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite7 = game.add.image(1125, 125+30, cards.cards[7].sprite, {fill: 'black' , fontSize: '10px'});
        let sprite8 = game.add.image(70, 395+30, cards.cards[8].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite9 = game.add.image(220, 395+30, cards.cards[9].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite10 = game.add.image(410, 395+30, cards.cards[10].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite11 = game.add.image(595, 395+30, cards.cards[11].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite12 = game.add.image(775, 395+30, cards.cards[12].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite13 = game.add.image(955, 395+30, cards.cards[13].sprite, {fill: 'black' , fontSize: '15px'});
        let sprite14 = game.add.image(1135, 395+30, cards.cards[14].sprite, {fill: 'black' , fontSize: '15px'});

        let description1 = game.add.text(40, 280, cards.cards[1].description, {fill: 'black' , fontSize: '8px'});
        let description2 = game.add.text(230, 280, cards.cards[2].description, {fill: 'black' , fontSize: '8px'});
        let description3 = game.add.text(410, 280, cards.cards[3].description, {fill: 'black' , fontSize: '8px'});
        let description4 = game.add.text(570, 280, cards.cards[4].description, {fill: 'black' , fontSize: '8px'});
        let description5 = game.add.text(760, 280, cards.cards[5].description, {fill: 'black' , fontSize: '8px'});
        let description6 = game.add.text(940, 280, cards.cards[6].description, {fill: 'black' , fontSize: '8px'});
        let description7 = game.add.text(1110, 280, cards.cards[7].description, {fill: 'black' , fontSize: '8px'});
        let description8 = game.add.text(40, 555, cards.cards[8].description, {fill: 'black' , fontSize: '8px'});
        let description9 = game.add.text(220, 555, cards.cards[9].description, {fill: 'black' , fontSize: '8px'});
        let description10 = game.add.text(410, 555, cards.cards[10].description, {fill: 'black' , fontSize: '8px'});
        let description11 = game.add.text(570, 555, cards.cards[11].description, {fill: 'black' , fontSize: '8px'});
        let description12 = game.add.text(760, 555, cards.cards[12].description, {fill: 'black' , fontSize: '8px'});
        let description13 = game.add.text(940, 555, cards.cards[13].description, {fill: 'black' , fontSize: '8px'});
        let description14 = game.add.text(1110, 555, cards.cards[14].description, {fill: 'black' , fontSize: '8px'});
    },
    
    update: function () {
    	if(tablica ==5){
    			buttonCard1.inputEnabled = false;
    			buttonCard2.inputEnabled = false;
    			buttonCard3.inputEnabled = false;
    			buttonCard4.inputEnabled = false;
    			buttonCard5.inputEnabled = false;
    			buttonCard6.inputEnabled = false;
    			buttonCard7.inputEnabled = false;
    			buttonCard8.inputEnabled = false;
    			buttonCard9.inputEnabled = false;
    			buttonCard10.inputEnabled = false;
    			buttonCard11.inputEnabled = false;
    			buttonCard12.inputEnabled = false;
    			buttonCard13.inputEnabled = false;
    			buttonCard14.inputEnabled = false;
    	}
    },
    go: function () {
        game.state.start("play")
    },

    go1: function () {
    	ourTable.shift();
ourTable.push(cards.cards[1].name);
console.log(ourTable);
let Wyb = game.add.image(15,100,'kartas');
buttonCard1.inputEnabled = false;
tablica ++;
    },
    go2: function () {
    	ourTable.shift();
ourTable.push(cards.cards[2].name);
console.log(ourTable);
let Wyb = game.add.image(195,100,'kartas');
buttonCard2.inputEnabled = false;
tablica ++;
    },
    go3: function () {
    	ourTable.shift();
ourTable.push(cards.cards[3].name);
console.log(ourTable);
let Wyb = game.add.image(375,100,'kartas');
buttonCard3.inputEnabled = false;
tablica ++;    
    },
    go4: function () {
    	ourTable.shift();
ourTable.push(cards.cards[4].name);
console.log(ourTable);
let Wyb = game.add.image(555,100,'kartas');
buttonCard4.inputEnabled = false;
tablica ++;
    },
    go5: function () {
    	ourTable.shift();
ourTable.push(cards.cards[5].name);
console.log(ourTable);
let Wyb = game.add.image(735,100,'kartas');
buttonCard5.inputEnabled = false;
tablica ++;
    },
    go6: function () {
    	ourTable.shift();
ourTable.push(cards.cards[6].name);
console.log(ourTable);
let Wyb = game.add.image(915,100,'kartas');
buttonCard6.inputEnabled = false;
tablica ++;
    },
    go7: function () {
    	ourTable.shift();
ourTable.push(cards.cards[7].name);
console.log(ourTable);
let Wyb = game.add.image(1095,100,'kartas');
buttonCard7.inputEnabled = false;
tablica ++;
    },
    go8: function () {
    	ourTable.shift();
ourTable.push(cards.cards[8].name);
console.log(ourTable);
let Wyb = game.add.image(15,375,'kartas');
buttonCard8.inputEnabled = false;
tablica ++;
    },
    go9: function () {
    	ourTable.shift();
ourTable.push(cards.cards[9].name);
console.log(ourTable);
let Wyb = game.add.image(195,375,'kartas');
buttonCard9.inputEnabled = false;
tablica ++;
    },
    go10: function () {
    	ourTable.shift();
ourTable.push(cards.cards[10].name);
console.log(ourTable);
let Wyb = game.add.image(375,375,'kartas');
buttonCard10.inputEnabled = false;
tablica ++;
    },
    go11: function () {
    	ourTable.shift();
ourTable.push(cards.cards[11].name);
console.log(ourTable);
let Wyb = game.add.image(555,375,'kartas');
buttonCard11.inputEnabled = false;
tablica ++;
    },
    go12: function () {
    	ourTable.shift();
ourTable.push(cards.cards[12].name);
console.log(ourTable);
let Wyb = game.add.image(735,375,'kartas');
buttonCard12.inputEnabled = false;
tablica ++;
    },
    go13: function () {
    	ourTable.shift();
ourTable.push(cards.cards[13].name);
console.log(ourTable);
let Wyb = game.add.image(915,375,'kartas');
buttonCard13.inputEnabled = false;
tablica ++;
    },
    go14: function () {
    	ourTable.shift();
ourTable.push(cards.cards[14].name);
console.log(ourTable);
let Wyb = game.add.image(1095,375,'kartas');
buttonCard14.inputEnabled = false;
tablica ++;
    }
};