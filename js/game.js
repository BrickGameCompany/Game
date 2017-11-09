var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container');


game.global = {

};

window.game = game;
game.state.add('card',cardState);
game.state.add('init',initState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('credits',creditsState);
game.state.add('wictory', WictoryState);

game.state.start('init');