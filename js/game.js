var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container'),
    initState = require( './states/init' ),
    playState = require( './states/play' ),
    menuState = require( './states/menu' );

game.global = {

};

window.game = game;
game.state.add('init',initState);
game.state.add('menu',menuState);
game.state.add('play',playState);

game.state.start('init');