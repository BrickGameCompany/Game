let initState = {

    preload: function(){

        let loadingLabel = game.add.text(20,150,'loading game data...',{fill:'#fff'});
    },

    init: function () {

    },

    create: function () {
        this.init();
        game.state.start('menu')
    }
};
