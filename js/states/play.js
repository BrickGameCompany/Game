let playState = {

    create: function () {
<<<<<<< Updated upstream

=======
this.player = game.add.sprite(100, 100, 'postac');
        require('../utils/player').Player();

        Player.prototype = Object.create(Phaser.Sprite.prototype);
        Player.prototype.constructor = Player;

        Player.prototype.update = function () {

        };
>>>>>>> Stashed changes
    }
};
