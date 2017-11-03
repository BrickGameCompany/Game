let initState = {

    preload: function(){

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});

        //sprites
        game.load.image("bg", "./assets/sprites/background_menu.jpg");
        game.load.image("button-play","./assets/sprites/menu_button.png");
        game.load.image("button-credits","./assets/sprites/Credits_button.png");
        game.load.image("cre", "./assets/sprites/Credits.png");
        game.load.image("blue-green","./assets/sprites/blue_button00.png");
        game.load.image("background","./assets/sprites/background.png");
        game.load.image("player","./assets/sprites/player.png");
        game.load.image("enemy","./assets/sprites/enemy.png");

        //audio


        //settings
        game.time.desiredFps = 60;

        //json
        game.load.json('card', 'https://api.myjson.com/bins/ach2z');
    },

    play: function () {

    },

    create: function () {

        game.state.start('menu');
    }
};
