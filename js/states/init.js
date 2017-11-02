let initState = {

    preload: function(){

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});

        //sprites
        game.load.image("button-green","./assets/sprites/green_button00.png");
        game.load.image("player","./assets/sprites/player.png");

        //audio


        //settings
        game.time.desiredFps = 60;
    },

    play: function () {

    },

    create: function () {

        game.state.start('menu');
    }
};
