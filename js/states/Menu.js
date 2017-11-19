let menuState = {


    create: function () {
        game.add.sprite(0,0,'background_menu');

        game.add.sprite(975,500,'credits');

        game.add.sprite(400,100,'logo');

    	buttonPlay = game.add.button(game.world.centerX -125,300,'play',this.ca,this,2,1,0);


    },

    ca: function () {
        game.state.start("up")
    },
    cr: function () {
        game.state.start("credits")
    }
};