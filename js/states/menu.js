let menuState = {


    create: function () {
    	game.stage.backgroundColor = "#4488AA";
        game.add.text(20,150,'menu',{fill:'#fff'});

    	buttonPlay = game.add.button(game.world.centerX - 95,300,'button-green',this.go,this,2,1,0);

        game.add.text(610,307,'Play');
    },

    go: function () {
        game.state.start("play")
    }
};