let initState = {

    preload: function(){
    	this.load.image("player","assets/player.png");

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});
    },

    play: function () {

    },

    create: function () {
        this.play();
        game.state.start('menu')
    }
};
