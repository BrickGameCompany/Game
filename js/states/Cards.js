let cardState = {
    
    create: function () {
        buttonPlay = game.add.button(game.world.centerX -165,10,'button-play',this.go,this,2,1,0);
        buttonPlay = game.add.button(15,100,'kartap',this.go,this,2,1,0);
        
    },
    
    update: function () {
        
    },

    go: function () {
        game.state.start("play")
    }
};