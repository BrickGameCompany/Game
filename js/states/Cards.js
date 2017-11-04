let cardState = {
    
    create: function () {

        buttonPlay = game.add.button(game.world.centerX -165,10,'button-play',this.go,this,2,1,0);
        let sel = game.add.text(game.world.centerX, 30, "Selected", {fill: 'red'});
        buttonCard = game.add.button(15,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(195,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(375,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(555,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(735,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(915,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(1095,100,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(15,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(195,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(375,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(555,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(735,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(915,375,'kartap',this.go,this,2,1,0);
        buttonCard = game.add.button(1095,375,'kartap',this.go,this,2,1,0);

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

        
        var ourTable = new Array(5);
    },
    
    update: function () {
        
    },

    go: function () {
ourTable.push('Michał');
console.log(ourTable);
    }
};