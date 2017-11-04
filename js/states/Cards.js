let cardState = {
    
    create: function () {
        buttonPlay = game.add.button(game.world.centerX -165,10,'button-play',this.go,this,2,1,0);
        let sel = game.add.text(game.world.centerX, 30, "Selected:", {fill: 'red'});
        buttonCard = game.add.button(15,100,'kartap',this.go1,this,2,1,0);
        buttonCard = game.add.button(195,100,'kartap',this.go2,this,2,1,0);
        buttonCard = game.add.button(375,100,'kartap',this.go3,this,2,1,0);
        buttonCard = game.add.button(555,100,'kartap',this.go4,this,2,1,0);
        buttonCard = game.add.button(735,100,'kartap',this.go5,this,2,1,0);
        buttonCard = game.add.button(915,100,'kartap',this.go6,this,2,1,0);
        buttonCard = game.add.button(1095,100,'kartap',this.go7,this,2,1,0);
        buttonCard = game.add.button(15,375,'kartap',this.go8,this,2,1,0);
        buttonCard = game.add.button(195,375,'kartap',this.go9,this,2,1,0);
        buttonCard = game.add.button(375,375,'kartap',this.go10,this,2,1,0);
        buttonCard = game.add.button(555,375,'kartap',this.go11,this,2,1,0);
        buttonCard = game.add.button(735,375,'kartap',this.go12,this,2,1,0);
        buttonCard = game.add.button(915,375,'kartap',this.go13,this,2,1,0);
        buttonCard = game.add.button(1095,375,'kartap',this.go14,this,2,1,0);

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
    },

    go1: function () {
    	ourTable.shift();
ourTable.push(cards.cards[1].name);
console.log(ourTable);
    },
    go2: function () {
    	ourTable.shift();
ourTable.push(cards.cards[2].name);
console.log(ourTable);
    },
    go3: function () {
    	ourTable.shift();
ourTable.push(cards.cards[3].name);
console.log(ourTable);
    },
    go4: function () {
    	ourTable.shift();
ourTable.push(cards.cards[4].name);
console.log(ourTable);
    },
    go5: function () {
    	ourTable.shift();
ourTable.push(cards.cards[5].name);
console.log(ourTable);
    },
    go6: function () {
    	ourTable.shift();
ourTable.push(cards.cards[6].name);
console.log(ourTable);
    },
    go7: function () {
    	ourTable.shift();
ourTable.push(cards.cards[7].name);
console.log(ourTable);
    },
    go8: function () {
    	ourTable.shift();
ourTable.push(cards.cards[8].name);
console.log(ourTable);
    },
    go9: function () {
    	ourTable.shift();
ourTable.push(cards.cards[9].name);
console.log(ourTable);
    },
    go10: function () {
    	ourTable.shift();
ourTable.push(cards.cards[10].name);
console.log(ourTable);
    },
    go11: function () {
    	ourTable.shift();
ourTable.push(cards.cards[11].name);
console.log(ourTable);
    },
    go12: function () {
    	ourTable.shift();
ourTable.push(cards.cards[12].name);
console.log(ourTable);
    },
    go13: function () {
    	ourTable.shift();
ourTable.push(cards.cards[13].name);
console.log(ourTable);
    },
    go14: function () {
    	ourTable.shift();
ourTable.push(cards.cards[14].name);
console.log(ourTable);
    }
};