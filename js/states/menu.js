let menuState = {


    create: function () {
    	game.add.sprite(0,0, 'bg');
    	buttonPlay = game.add.button(game.world.centerX - 95,10,'button-green',this.go,this,2,1,0);


    },

    go: function () {
        game.state.start("play")
    }
};