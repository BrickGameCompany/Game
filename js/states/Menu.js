let menuState = {


    create: function () {
    	game.add.sprite(0,0, 'bg');

    	buttonCredits = game.add.button(game.world.centerX +15,10,'button-credits',this.cr,this,2,1,0);
    	buttonPlay = game.add.button(game.world.centerX -165,10,'button-play',this.go,this,2,1,0);

        let text = game.add.text(100, 100, "Json test: " + cards.cards[0].name, { fill: '#ffffff' });
    },

    go: function () {
        game.state.start("play")
    },
    cr: function () {
        game.state.start("credits")
    }
};