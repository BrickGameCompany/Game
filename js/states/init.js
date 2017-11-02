let initState = {

    preload: function(){

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});

        game.load.image("button-green",".../assets/sprites/green_button00.png");
    },

    init: function () {

    },

    create: function () {
        this.init();
        game.state.start('menu')
    }
};
