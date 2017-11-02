let initState = {

    preload: function(){

    	game.load.image("player","./assets/player.png");

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});

        game.load.image("button-green","./assets/sprites/green_button00.png");
    },

    play: function () {

    },

    create: function () {

        game.state.start('menu');
    }
};
