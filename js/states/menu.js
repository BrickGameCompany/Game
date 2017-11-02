let menuState = {


    create: function () {
    	game.add.sprite(0,0, 'bg');
    	buttonPlay = game.add.button(game.world.centerX - 95,50,'button-green',this.go,this,2,1,0);


        game.add.text(610,57,'Play');
    },

    go: function () {
        game.state.start("play")
    }
};